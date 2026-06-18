import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-light-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image Placeholder */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="w-full h-[500px]">
                <img
                  src="/ghazala.jpeg"
                  alt="Dr. Ghazala Mushtaq"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/60 via-transparent to-transparent" />
                {/* Quote overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-deep-teal/90 via-deep-teal/60 to-transparent">
                  <Quote size={28} className="text-warm-copper mb-2" />
                  <p className="text-white/95 text-lg italic leading-relaxed font-light">
                    "Every patient deserves a personalized path toward recovery and independence."
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-warm-copper/30 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-warm-copper/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-warm-copper font-semibold text-sm tracking-wider uppercase">About Me</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-deep-teal mt-2 mb-6">
              Meet Dr. Ghazala Mushtaq
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Doctor of Physical Therapy graduate from <strong>Government College University Faisalabad</strong> (2020–2025) with a CGPA of <strong>3.43/4.00</strong>. Throughout her academic journey, she developed a deep passion for restoring movement and enhancing quality of life.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Experienced in musculoskeletal, orthopedic, neurological, and pediatric rehabilitation, as well as post-operative care. Dr. Ghazala is committed to evidence-based practice and a patient-centered approach that empowers individuals on their recovery journey.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                'Musculoskeletal Rehabilitation',
                'Orthopedic Rehabilitation',
                'Pediatric Rehabilitation',
                'Neurological Rehabilitation',
                'Post-Operative Care',
                'Pain Management',
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <div className="w-2 h-2 rounded-full bg-warm-copper flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}