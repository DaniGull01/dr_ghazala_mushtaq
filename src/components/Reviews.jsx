import { motion } from 'framer-motion'
import ReviewsList from './ReviewsList'
import ReviewForm from './ReviewForm'

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-light-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-warm-copper font-semibold text-sm tracking-wider uppercase">
            Patient Feedback
          </span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-deep-teal mt-2">
            What Patients Say
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Real experiences from people who've completed treatment
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Reviews take more visual weight — social proof first */}
          <div className="lg:col-span-3">
            <ReviewsList />
          </div>
          <div className="lg:col-span-2 lg:sticky lg:top-24">
            <ReviewForm />
          </div>
        </div>
      </div>
    </section>
  )
}