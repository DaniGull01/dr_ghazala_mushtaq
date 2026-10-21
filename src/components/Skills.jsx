import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  { name: 'Patient Assessment', level: 95 },
  { name: 'Manual Therapy', level: 92 },
  { name: 'Musculoskeletal Rehabilitation', level: 93 },
  { name: 'Orthopedic Rehabilitation', level: 90 },
  { name: 'Neurological Rehabilitation', level: 85 },
  { name: 'Dry Needling', level: 88 },
  { name: 'Cupping Therapy', level: 90 },
  { name: 'Electrotherapy', level: 87 },
  { name: 'Pain Management', level: 91 },
  { name: 'Documentation & Reporting', level: 89 },
]

function SkillBar({ name, level, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-xs font-bold text-medical-blue">{level}%</span>
      </div>
      <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-medical-blue to-deep-teal"
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28 bg-light-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-warm-copper font-semibold text-sm tracking-wider uppercase">Proficiencies</span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-deep-teal mt-2">
            Professional Skills
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Clinical competencies developed through rigorous training and practice
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-center max-w-5xl mx-auto">
          {/* Skills Bars */}
          <div className="lg:col-span-3">
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
              {skills.map((skill, index) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} index={index} />
              ))}
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src="./fit.jpg"
                alt="Physiotherapy practice"
                className="w-full h-72 lg:h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-heading font-semibold text-lg">Comprehensive Care</p>
                <p className="text-white/80 text-sm">Evidence-based techniques for every condition</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}