import { motion } from 'framer-motion'
import { MapPin, Calendar, Building } from 'lucide-react'

const experiences = [
  {
    title: 'Former Clinical physiotherapy practice',
    org: 'Rahim Hospital',
    location: 'Rawalpindi',
    color: 'from-warm-copper to-amber-600',
    items: [
      'OPD Assessment & Diagnosis',
      'Dry Needling & Cupping Therapy',
      'Manual Therapy Techniques',
      'Rehabilitation Planning',
    ],
  },
  {
    period: 'Nov 2025 – Mar 2026',
    title: 'Physiotherapist',
    org: 'National Institute of Rehabilitation Medicine (NIRM)',
    location: 'Islamabad',
    color: 'from-medical-blue to-cyan-500',
    items: [
      'Orthopedic Rehabilitation',
      'Neurological Rehabilitation',
      'Treatment Planning',
      'Progress Documentation',
    ],
  },
 
  {
    period: 'Jun – Aug 2023',
    title: 'Musculoskeletal Therapy Observership',
    org: 'Clinical Placement',
    location: '',
    color: 'from-purple-500 to-violet-500',
    items: [
      'Musculoskeletal Assessment',
      'Therapy Observation',
      'Patient Management',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-warm-copper font-semibold text-sm tracking-wider uppercase">My Journey</span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-deep-teal mt-2">
            Clinical Experience
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Clinical training and professional experience in leading healthcare institutions
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-6 md:gap-12 mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-warm-copper to-amber-500 border-2 border-white shadow z-10" />

              {/* Content Card */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-warm-copper bg-warm-copper/10 px-3 py-1 rounded-full mb-3">
                    <Calendar size={12} />
                    {exp.period}
                  </span>
                  <h3 className="text-lg font-heading font-bold text-deep-teal mb-1">{exp.title}</h3>
                  <div className="flex items-center gap-3 text-gray-500 text-sm mb-4">
                    <Building size={14} />
                    <span>{exp.org}</span>
                    {exp.location && (
                      <>
                        <span className="text-gray-300">|</span>
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </>
                    )}
                  </div>
                  <ul className="space-y-2">
                    {exp.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${exp.color} flex-shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}