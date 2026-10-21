import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-light-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-warm-copper font-semibold text-sm tracking-wider uppercase">
            About Doctor
          </span>

          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-deep-teal mt-2 mb-6">
            Meet Dr. Ghazala Mushtaq
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Dr. Ghazala Mushtaq is a Doctor of Physical Therapy (DPT)
            and Consultant Physiotherapist dedicated to providing
            patient-centered physiotherapy and rehabilitation services.
            She focuses on helping individuals improve mobility, manage
            pain, restore physical function, and enhance their quality
            of life through individualized rehabilitation plans and
            evidence-informed clinical care.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            She has professional experience in hospital-based
            physiotherapy and clinical practice, along with specialized
            training in dry needling and cupping therapy. Her approach
            emphasizes appropriate assessment, personalized treatment,
            patient education, and functional recovery.
          </p>
        </motion.div>
      </div>
    </section>
  )
}