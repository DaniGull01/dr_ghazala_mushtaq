
import { Building, MapPin, Calendar } from 'lucide-react'

const experiences = [
  
  {
    period: 'Previous Experience',
    title: 'Former Clinical Physiotherapist',
    org: 'Rahim Hospital',
    location: 'Rawalpindi',
    description:
      'Provided outpatient physiotherapy assessment, individualized rehabilitation planning, manual therapy, dry needling, and cupping therapy to support pain management and functional recovery.',
    color: 'from-warm-copper to-amber-600',
  },
  {
    period: 'Previous Experience',
    title: 'Former Physiotherapist – Orthopedic Rehabilitation',
    org: 'Benazir Bhutto Hospital',
    location: 'Rawalpindi',
    description:
      'Provided orthopedic physiotherapy and rehabilitation services, focusing on patient assessment, functional mobility, therapeutic exercises, and individualized rehabilitation planning to support recovery and improve physical function.',
    color: 'from-medical-blue to-cyan-500',
  },
  {
    period: 'Nov 2025 – Mar 2026',
    title: 'Physiotherapist',
    org: 'National Institute of Rehabilitation Medicine (NIRM)',
    location: 'Islamabad',
    description:
      'Gained clinical experience in orthopedic and neurological rehabilitation, patient assessment, treatment planning, monitoring progress, and clinical documentation.',
    color: 'from-purple-500 to-violet-500',
  }
]
export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-warm-copper font-semibold text-sm tracking-wider uppercase">
            My Journey
          </span>

          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-deep-teal mt-2">
            Clinical Experience
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <ul className="space-y-6">
            {experiences.map((exp) => (
              <li key={exp.title} className="flex items-start gap-4">
                <div
                  className={`mt-2 w-3 h-3 rounded-full bg-gradient-to-br ${exp.color} flex-shrink-0`}
                />

                <div className="flex-1">
                  <h3 className="text-lg font-heading font-bold text-deep-teal mb-2">
                    {exp.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 text-gray-500 text-sm mb-3">
                    <Building size={14} />
                    <span>{exp.org}</span>

                    {exp.location && (
                      <>
                        <span className="text-gray-300">|</span>
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </>
                    )}

                    {exp.period && (
                      <>
                        <span className="text-gray-300">|</span>
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </>
                    )}
                  </div>

                  <p className="text-gray-600 text-sm leading-7">
                    {exp.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
