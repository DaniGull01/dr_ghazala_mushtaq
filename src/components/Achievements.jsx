import { motion } from 'framer-motion'
import { Trophy, Medal, Star } from 'lucide-react'
import { useState } from 'react'

const achievements = [
  {
    icon: Trophy,
    title: 'Two-Time University Badminton Champion',
    desc: 'Secured first place in university badminton championships',
    gradient: 'from-amber-400 to-yellow-500',
    iconBg: 'from-amber-500 to-yellow-600',
    image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=500&q=80',
  },
  {
    icon: Medal,
    title: 'University Sports Representation',
    desc: 'Represented the university in inter-collegiate sports competitions',
    gradient: 'from-blue-400 to-cyan-500',
    iconBg: 'from-medical-blue to-cyan-600',
    image: 'https://images.unsplash.com/photo-1461896836934-bd45ba8fcf9b?w=500&q=80',
  },
  {
    icon: Star,
    title: 'Women\'s Sports Gala Participant',
    desc: 'Active participant in women\'s sports gala events promoting fitness',
    gradient: 'from-pink-400 to-rose-500',
    iconBg: 'from-pink-500 to-rose-600',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&q=80',
  },
]

export default function Achievements() {
  const [imgErrors, setImgErrors] = useState({})

  return (
    <section id="achievements" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-warm-copper font-semibold text-sm tracking-wider uppercase">Recognition</span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-deep-teal mt-2">
            Awards & Achievements
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Excellence in academics, sports, and professional development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((ach, index) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${ach.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  {!imgErrors[index] ? (
                    <img
                      src={ach.image}
                      alt={ach.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      onError={() => setImgErrors(prev => ({ ...prev, [index]: true }))}
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${ach.gradient}`} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
                </div>
                {/* Content */}
                <div className="p-8 text-center -mt-12 relative z-10">
                  <motion.div
                    animate={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${ach.iconBg} flex items-center justify-center mx-auto mb-5 shadow-lg border-4 border-white`}
                  >
                    <ach.icon size={28} className="text-white" />
                  </motion.div>
                  <h3 className="text-lg font-heading font-bold text-deep-teal mb-3">{ach.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{ach.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}