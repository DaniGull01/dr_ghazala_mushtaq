import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, User, Send, CheckCircle2, AlertCircle } from 'lucide-react'

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzTM5SRu_mljHBugONx-rMaIFbyWG2gqIT29_rsX0gP9sjb6MgTL-LLJkZFbZKder2U/exec'
const REVIEWS_UPDATED_EVENT = 'reviews-updated'
const MAX_MESSAGE_LENGTH = 500

const RATING_LABELS = {
  1: 'Poor',
  2: 'Fair',
  3: 'Good',
  4: 'Very good',
  5: 'Excellent',
}

export default function ReviewForm() {
  const [formData, setFormData] = useState({ name: '', text: '' })
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { id, value } = e.target
    if (id === 'text' && value.length > MAX_MESSAGE_LENGTH) return
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!formData.name.trim() || !formData.text.trim()) {
      setError('Please fill in your name and review.')
      return
    }
    if (rating === 0) {
      setError('Please select a star rating.')
      return
    }

    setSubmitting(true)

    try {
      const body = new URLSearchParams({
        name: formData.name.trim(),
        rating: rating.toString(),
        text: formData.text.trim(),
      })

      await fetch(SCRIPT_URL, { method: 'POST', body, mode: 'no-cors' })

      setSubmitted(true)
      setFormData({ name: '', text: '' })
      setRating(0)
      window.dispatchEvent(new Event(REVIEWS_UPDATED_EVENT))

      setTimeout(() => setSubmitted(false), 3500)
    } catch (err) {
      setError('Something went wrong submitting your review. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const displayRating = hoverRating || rating

  return (
    <div className="bg-white w-full flex flex-col justify-center items-center rounded-2xl p-6 sm:p-9 shadow-lg border border-gray-100">
      <div className="mb-7 flex flex-col justify-center items-center">
        <h3 className="text-[26px] font-heading font-bold text-deep-teal">Leave a Review</h3>
        <p className="text-gray-500 text-sm mt-1.5">
          Your feedback helps others feel confident about starting their treatment.
        </p>
      </div>

      <form className="space-y-6 w-full" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Your Name
          </label>
          <div className="relative">
            <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              id="name"
              placeholder="e.g. Ayesha Khan"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-medical-blue focus:ring-2 focus:ring-medical-blue/20 outline-none transition-all text-sm placeholder:text-gray-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2.5">
            How was your experience?
          </label>
          <div className="flex items-center gap-4 bg-light-cream rounded-xl px-4 py-3.5">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="p-1 -m-1 transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-medical-blue/40 rounded-lg"
                  aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                >
                  <Star
                    size={24}
                    className={
                      star <= displayRating
                        ? 'fill-warm-copper text-warm-copper transition-colors'
                        : 'fill-transparent text-gray-300 transition-colors'
                    }
                  />
                </button>
              ))}
            </div>
            <span className="text-xs font-medium text-gray-500 min-w-[70px]">
              {displayRating ? RATING_LABELS[displayRating] : 'Tap to rate'}
            </span>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="text" className="block text-sm font-medium text-gray-700">
              Your Review
            </label>
            <span className="text-xs text-gray-400">
              {formData.text.length}/{MAX_MESSAGE_LENGTH}
            </span>
          </div>
          <textarea
            id="text"
            rows={5}
            placeholder="Tell others about your experience — what was treated, how it went, and what stood out."
            value={formData.text}
            onChange={handleChange}
            className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-medical-blue focus:ring-2 focus:ring-medical-blue/20 outline-none transition-all text-sm resize-none placeholder:text-gray-400"
          />
        </div>

        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="flex items-start gap-2 bg-red-50 text-red-600 text-sm rounded-xl px-4 py-3"
            >
              <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="submit"
          disabled={submitting}
          className="w-full flex items-center justify-center gap-2 bg-deep-teal hover:bg-deep-teal/90 disabled:opacity-60 disabled:cursor-not-allowed text-white py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg"
        >
          <AnimatePresence mode="wait" initial={false}>
            {submitted ? (
              <motion.span
                key="submitted"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex items-center gap-2"
              >
                <CheckCircle2 size={16} />
                Review submitted
              </motion.span>
            ) : submitting ? (
              <motion.span key="submitting" className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                Submitting…
              </motion.span>
            ) : (
              <motion.span key="idle" className="flex items-center gap-2">
                <Send size={16} />
                Submit Review
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </form>
    </div>
  )
}