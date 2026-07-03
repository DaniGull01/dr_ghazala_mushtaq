import { motion } from 'framer-motion'
import { Bone, Spline, Brain, Baby, Activity, Syringe } from 'lucide-react'

const expertiseAreas = [
   {
    icon: Syringe,
    title: 'Pain Management',
    items: [ 'Dry Needling & Acupuncture Therapy',],
    color: 'from-warm-copper to-amber-600',
    image: './1000512115.jpg',
  },
  {
    icon: Syringe,
    title: 'Pain Management',
    items: ['Cupping Therapy'],
    color: 'from-warm-copper to-amber-600',
    image: './1000512112.jpg',
  },
  {
    icon: Bone,
    title: 'Musculoskeletal Rehabilitation',
    items: ['Low Back Pain', 'Neck Pain', 'SI Joint Dysfunction', 'Joint Pain'],
    color: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1780545311196-f8b507b08b94?w=500&q=80',
  },
  {
    icon: Spline,
    title: 'Orthopedic Rehabilitation',
    items: ['Fractures', 'Joint Replacements', 'Soft Tissue Injuries'],
    color: 'from-emerald-500 to-teal-500',
    image: 'https://images.unsplash.com/photo-1780541027382-cf422369bdaa?w=500&q=80',
  },
  {
    icon: Brain,
    title: 'Neurological Rehabilitation',
    items: ['Stroke', 'Cerebral Palsy', 'Functional Recovery'],
    color: 'from-purple-500 to-violet-500',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=500&q=80',
  },
  {
    icon: Baby,
    title: 'Pediatric Rehabilitation',
    items: ['Developmental Conditions', 'Clubfoot Rehabilitation'],
    color: 'from-pink-500 to-rose-500',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=500&q=80',
  },
  {
    icon: Activity,
    title: 'Post-Operative Rehabilitation',
    items: ['Surgical Recovery', 'Mobility Restoration'],
    color: 'from-orange-500 to-amber-500',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=500&q=80',
  }
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-warm-copper font-semibold text-sm tracking-wider uppercase">What I Treat</span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-deep-teal mt-2">
            Areas of Expertise
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Specialized clinical expertise across multiple rehabilitation disciplines
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {expertiseAreas.map((area) => (
            <motion.div
              key={area.title}
              variants={cardVariants}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
                <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center shadow-lg`}>
                  <area.icon size={20} className="text-white" />
                </div>
              </div>
              {/* Content */}
              <div className="px-5 pb-6 -mt-2 relative z-10">
                <h3 className="text-lg font-heading font-bold text-deep-teal mb-4">{area.title}</h3>
                <ul className="space-y-2">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${area.color} flex-shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}