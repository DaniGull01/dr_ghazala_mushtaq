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
                  src="./About-pic.jpeg"
                  alt="Dr. Ghazala Mushtaq"
                  className="w-full h-full object-contain"
                />
                {/* Gradient overlay */}
              
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
            <span className="text-warm-copper font-semibold text-sm tracking-wider uppercase">About Doctor</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-deep-teal mt-2 mb-6">
              Meet Dr. Ghazala Mushtaq
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
             Dr. Ghazala Mushtaq is a Doctor of Physical Therapy (DPT) and Consultant Physiotherapist dedicated to providing patient-centered physiotherapy and rehabilitation services. She focuses on helping individuals improve mobility, manage pain, restore physical function, and enhance their quality of life through individualized rehabilitation plans and evidence-informed clinical care.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              She has professional experience in hospital-based physiotherapy and clinical practice, along with specialized training in dry needling and cupping therapy. Her approach emphasizes appropriate assessment, personalized treatment, patient education, and functional recovery.
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