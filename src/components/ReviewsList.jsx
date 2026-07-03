import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, Loader2, MessageSquareText } from 'lucide-react'

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzTM5SRu_mljHBugONx-rMaIFbyWG2gqIT29_rsX0gP9sjb6MgTL-LLJkZFbZKder2U/exec'
const REVIEWS_UPDATED_EVENT = 'reviews-updated'

function formatDate(isoString) {
  return new Date(isoString).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

function getInitials(name) {
  return name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase()
}

function jsonpFetch(url) {
  return new Promise((resolve, reject) => {
    const callbackName = `jsonp_callback_${Date.now()}_${Math.floor(Math.random() * 10000)}`
    const script = document.createElement('script')
    const cleanup = () => {
      delete window[callbackName]
      script.remove()
    }
    window[callbackName] = (data) => {
      cleanup()
      resolve(data)
    }
    script.onerror = () => {
      cleanup()
      reject(new Error('JSONP request failed'))
    }
    const separator = url.includes('?') ? '&' : '?'
    script.src = `${url}${separator}callback=${callbackName}`
    document.body.appendChild(script)
  })
}

function RatingSummary({ reviews }) {
  const total = reviews.length
  const average = total
    ? (reviews.reduce((sum, r) => sum + Number(r.rating), 0) / total).toFixed(1)
    : '0.0'

  const counts = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => Number(r.rating) === star).length,
  }))

  return (
    <div className="bg-white flex flex-col justify-center items-center rounded-2xl p-6 sm:p-8 border border-gray-100 mb-6">
              <h3 className="text-[26px] font-heading font-bold mb-8 text-deep-teal">Over All Rating</h3>

      <div className="flex w-full flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
        {/* Average score */}
        <div className="flex sm:flex-col items-center sm:items-start gap-3 sm:gap-1 flex-shrink-0">
          <span className="text-4xl font-heading font-bold text-deep-teal leading-none">
            {average}
          </span>
          <div>
            <div className="flex items-center gap-0.5 mb-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={14}
                  className={
                    star <= Math.round(Number(average))
                      ? 'fill-warm-copper text-warm-copper'
                      : 'fill-transparent text-gray-300'
                  }
                />
              ))}
            </div>
            <p className="text-gray-400 text-xs whitespace-nowrap">
              {total} {total === 1 ? 'review' : 'reviews'}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px self-stretch bg-gray-100" />

        {/* Distribution bars */}
        <div className="flex-1 space-y-1.5 w-full">
          {counts.map(({ star, count }) => {
            const pct = total ? (count / total) * 100 : 0
            return (
              <div key={star} className="flex items-center gap-3">
                <span className="text-xs text-gray-500 w-3 flex-shrink-0">{star}</span>
                <Star size={11} className="fill-gray-300 text-gray-300 flex-shrink-0" />
                <div className="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="h-full rounded-full bg-warm-copper"
                  />
                </div>
                <span className="text-xs text-gray-400 w-5 flex-shrink-0 text-right">{count}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function ReviewsList() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState(false)

  const loadReviews = async () => {
    setLoadError(false)
    try {
      const data = await jsonpFetch(SCRIPT_URL)
      setReviews(data)
    } catch {
      setLoadError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadReviews()
    window.addEventListener(REVIEWS_UPDATED_EVENT, loadReviews)
    return () => window.removeEventListener(REVIEWS_UPDATED_EVENT, loadReviews)
  }, [])

  if (loading) {
    return (
      <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100 text-center">
        <Loader2 size={22} className="text-medical-blue mx-auto mb-3 animate-spin" />
        <p className="text-gray-500 text-sm">Loading reviews…</p>
      </div>
    )
  }

  if (loadError) {
    return (
      <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100 text-center">
        <p className="text-red-500 text-sm mb-1">Couldn't load reviews right now.</p>
        <p className="text-gray-400 text-xs">Please refresh the page to try again.</p>
      </div>
    )
  }

  if (reviews.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-10 sm:p-12 shadow-lg border border-gray-100 text-center">
        <div className="w-12 h-12 rounded-2xl bg-medical-blue/10 flex items-center justify-center mx-auto mb-4">
          <MessageSquareText size={20} className="text-medical-blue" />
        </div>
        <p className="text-deep-teal font-semibold text-sm mb-1">No reviews yet</p>
        <p className="text-gray-500 text-sm">Be the first to share your experience.</p>
      </div>
    )
  }

  return (
    <div id="reviews">
      <RatingSummary reviews={reviews} />

      <div className="space-y-4 flex flex-col justify-center items-center">
        <AnimatePresence>
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-white w-full mb-8 rounded-2xl p-6 sm:p-7 shadow-lg border border-gray-100"
            >
              <div className="flex  items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-medical-blue/10 flex items-center justify-center text-medical-blue font-semibold text-sm flex-shrink-0">
                    {getInitials(review.name)}
                  </div>
                  <div>
                    <p className="font-semibold text-deep-teal text-sm leading-tight">{review.name}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{formatDate(review.date)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-0.5 flex-shrink-0 bg-warm-copper/10 rounded-full px-2.5 py-1">
                  <Star size={12} className="fill-warm-copper text-warm-copper" />
                  <span className="text-xs font-semibold text-warm-copper ml-0.5">
                    {review.rating}
                  </span>
                </div>
              </div>

              <div className="relative pl-4">
                <Quote size={14} className="absolute left-0 top-0.5 text-gray-200 fill-gray-200" />
                <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}