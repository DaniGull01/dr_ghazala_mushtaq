import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const expertise = [
  'Musculoskeletal Physiotherapy & Pain Management',
  'Back Pain, Neck Pain & Joint Disorders',
  'Stroke Rehabilitation & Functional Mobility Training',
  "Bell's Palsy Rehabilitation",
  'Post-Operative Rehabilitation',
  'Sports Injuries & Movement-Related Conditions',
  'Therapeutic Exercise & Functional Rehabilitation',
  'Dry Needling Therapy',
  'Cupping (Hijama) Therapy',
]

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 lg:py-28 bg-light-cream bg-cover bg-center"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(250, 247, 240, 0.94),
            rgba(250, 247, 240, 0.94)
          ),
          url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80')
        `,
      }}
    >
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* About Doctor */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="text-warm-copper font-semibold text-sm tracking-wider uppercase">
            About Doctor
          </span>

          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-deep-teal mt-2 mb-6">
            Meet Dr. Ghazala Mushtaq
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Dr. Ghazala Mushtaq is a Doctor of Physical Therapy (DPT)
            and Consultant Physiotherapist dedicated to providing
            patient-centered physiotherapy and rehabilitation services.
            She focuses on helping individuals improve mobility, manage
            pain, restore physical function, and enhance their quality
            of life through individualized rehabilitation plans and
            evidence-informed clinical care.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            She has professional experience in hospital-based
            physiotherapy and clinical practice, along with specialized
            training in dry needling and cupping therapy. Her approach
            emphasizes appropriate assessment, personalized treatment,
            patient education, and functional recovery.
          </p>
        </motion.div>

        {/* Areas of Expertise */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 lg:mt-16"
        >
          <div className="text-center mb-10">
            <span className="text-warm-copper font-semibold text-sm tracking-wider uppercase">
              Specialized Care
            </span>

            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-deep-teal mt-2 mb-3">
              Areas of Expertise
            </h3>

            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Personalized physiotherapy and rehabilitation services
              designed to support recovery, improve movement, and
              promote better physical function.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertise.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.4,
                  delay: (index % 3) * 0.1,
                }}
                className="group flex items-start gap-3 p-5 rounded-xl
                  bg-white/80 border border-deep-teal/10
                  shadow-sm hover:shadow-md hover:border-warm-copper/50
                  transition-all duration-300"
              >
                <span className="flex-shrink-0 flex items-center justify-center
                  w-7 h-7 rounded-full bg-deep-teal/10
                  text-warm-copper font-bold text-sm
                  group-hover:bg-deep-teal group-hover:text-white
                  transition-colors duration-300"
                >
                  ✓
                </span>

                <p className="text-gray-700 text-sm sm:text-base
                  font-medium leading-relaxed"
                >
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
