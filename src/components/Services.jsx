import { useState, useMemo, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ClipboardList, Hand, Syringe, FlaskConical, Dumbbell, Zap, Footprints, BookOpen } from 'lucide-react'

const services = [
  {
    icon: ClipboardList,
    title: 'Patient Assessment',
    desc: 'Comprehensive evaluation and diagnosis of musculoskeletal and neurological conditions.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80',
  },
  {
    icon: Hand,
    title: 'Manual Therapy',
    desc: 'Hands-on treatment techniques for joint mobilization and soft tissue release.',
    image: 'https://images.unsplash.com/photo-1776291691067-beff2ec5ec35?w=400&q=80',
  },
  {
    icon: Syringe,
    title: 'Dry Needling',
    desc: 'Evidence-based pain management using trigger point therapy.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80',
  },
  {
    icon: FlaskConical,
    title: 'Cupping Therapy',
    desc: 'Dry and wet cupping for pain relief and improved circulation.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80',
  },
  {
    icon: Dumbbell,
    title: 'Exercise Prescription',
    desc: 'Personalized rehabilitation plans for strength and mobility.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80',
  },
  {
    icon: Zap,
    title: 'Electrotherapy',
    desc: 'Modern physiotherapy modalities including TENS and ultrasound.',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&q=80',
  },
  {
    icon: Footprints,
    title: 'Functional Training',
    desc: 'Restoring movement patterns and independence in daily activities.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80',
  },
  {
    icon: BookOpen,
    title: 'Patient Education',
    desc: 'Long-term recovery strategies and self-management techniques.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80',
  },
]

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full"
    >
      <div className="relative h-36 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading={index < 4 ? 'eager' : 'lazy'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/80 via-deep-teal/30 to-transparent" />
        <div className="absolute bottom-3 left-4">
          <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center">
            <service.icon size={18} className="text-white" />
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-base font-heading font-bold text-deep-teal mb-2">{service.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(4)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef(null)

  const totalPages = useMemo(
    () => Math.ceil(services.length / itemsPerPage),
    [itemsPerPage]
  )

  const handleResize = useCallback(() => {
    const width = window.innerWidth
    if (width < 640) setItemsPerPage(1)
    else if (width < 1024) setItemsPerPage(2)
    else setItemsPerPage(4)
  }, [])

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  // Reset slide when items per page changes
  useEffect(() => {
    setCurrentSlide(0)
  }, [itemsPerPage])

  // Auto-play
  useEffect(() => {
    if (isPaused || totalPages <= 1) return
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalPages)
    }, 4000)
    return () => clearInterval(intervalRef.current)
  }, [totalPages, isPaused])

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index)
  }, [])

  const goNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalPages)
  }, [totalPages])

  const goPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalPages) % totalPages)
  }, [totalPages])

  const visibleServices = useMemo(
    () => services.slice(
      currentSlide * itemsPerPage,
      currentSlide * itemsPerPage + itemsPerPage
    ),
    [currentSlide, itemsPerPage]
  )

  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-warm-copper font-semibold text-sm tracking-wider uppercase">What I Offer</span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-deep-teal mt-2">
            Services
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Comprehensive physiotherapy services tailored to your recovery needs
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slides */}
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className={`grid gap-6 ${
                  itemsPerPage === 1
                    ? 'grid-cols-1'
                    : itemsPerPage === 2
                    ? 'grid-cols-2'
                    : 'grid-cols-4'
                }`}
              >
                {visibleServices.map((service, index) => (
                  <ServiceCard key={service.title} service={service} index={index} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          {totalPages > 1 && (
            <>
              <button
                onClick={goPrev}
                className="absolute -left-3 sm:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-deep-teal hover:text-white hover:border-deep-teal transition-all z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={goNext}
                className="absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-deep-teal hover:text-white hover:border-deep-teal transition-all z-10"
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Dot Indicators */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all rounded-full ${
                    currentSlide === index
                      ? 'w-8 h-2.5 bg-deep-teal'
                      : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}