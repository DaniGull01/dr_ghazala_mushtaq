import { motion } from 'framer-motion'
import { Award, BookOpen, FlaskConical, ClipboardCheck } from 'lucide-react'

const certifications = [
  {
    icon: Award,
    title: 'Dry Needling & Cupping Therapy Certification',
    desc: 'Certified in advanced dry needling and cupping techniques for pain management',
    color: 'from-medical-blue to-cyan-500',
    image: './1000512065.jpg',
  },
  {
    icon: Award,
    title: 'Pre-Service Training Provider Course on Clubfoot',
    desc: 'Specialized training in clubfoot management and rehabilitation',
    color: 'from-medical-blue to-cyan-500',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&q=80',
  },
  {
    icon: FlaskConical,
    title: 'Advanced Cupping Therapy',
    desc: 'Certified in dry and wet cupping techniques for pain management',
    color: 'from-warm-copper to-amber-500',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80',
  },
  {
    icon: BookOpen,
    title: 'SPSS & EndNote Workshop',
    desc: 'Research methodology and data analysis certification',
    color: 'from-purple-500 to-violet-500',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80',
  },
  {
    icon: BookOpen,
    title: 'Dry Needling and Pain Management Workshop',
    desc: 'Hands-on workshop on dry needling techniques and pain management strategies',
    color: 'from-purple-500 to-violet-500',
    image: './1000511594.jpg',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 lg:py-28 bg-light-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-warm-copper font-semibold text-sm tracking-wider uppercase">Credentials</span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-deep-teal mt-2">
            Certifications & Workshops
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Continuous professional development and specialized training
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={cardVariants}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Image */}
              <div className="relative h-[13rem] overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" /> */}
                <div className={`absolute top-3 left-3 w-10 h-10 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg`}>
                  <cert.icon size={18} className="text-white" />
                </div>
              </div>
              {/* Content */}
              <div className="p-5">
                <h3 className="text-base font-heading font-bold text-deep-teal mb-2">{cert.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{cert.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}