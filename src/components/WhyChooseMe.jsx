import { motion } from 'framer-motion'
import { ShieldCheck, UserCog, HeartHandshake, BookOpenCheck } from 'lucide-react'

const trustItems = [
  {
    icon: ShieldCheck,
    title: 'Evidence-Based Care',
    desc: 'Every treatment plan is grounded in the latest clinical research and proven methodologies.',
    color: 'from-medical-blue to-cyan-500',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80',
  },
  {
    icon: UserCog,
    title: 'Personalized Treatment Plans',
    desc: 'Tailored rehabilitation programs designed specifically for your unique condition and goals.',
    color: 'from-warm-copper to-amber-500',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80',
  },
  {
    icon: HeartHandshake,
    title: 'Compassionate Approach',
    desc: 'A caring, patient-centered environment where you feel heard, respected, and supported.',
    color: 'from-emerald-500 to-teal-500',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&q=80',
  },
  {
    icon: BookOpenCheck,
    title: 'Continuous Professional Development',
    desc: 'Regularly updating skills and knowledge through workshops, certifications, and research.',
    color: 'from-purple-500 to-violet-500',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80',
  },
]

export default function WhyChooseMe() {
  return (
    <section id="why-choose-me" className="py-20 lg:py-28 bg-light-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-warm-copper font-semibold text-sm tracking-wider uppercase">Why Trust Me</span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-deep-teal mt-2">
            Why Choose Me
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            What sets my practice apart
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Image */}
              <div className="relative h-36 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                  <item.icon size={20} className="text-white" />
                </div>
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-heading font-bold text-deep-teal mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}