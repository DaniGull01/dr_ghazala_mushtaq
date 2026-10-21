import { motion } from 'framer-motion'
import { Calendar, MessageCircle, GraduationCap, Stethoscope, Brain, UserCheck } from 'lucide-react'

const stats = [
  { icon: GraduationCap, label: 'Certified cupping & dry needling therapist', value: 'Physiotherapist' },
  { icon: Stethoscope, label: 'Clinical Rotations', value: '5+' },
  { icon: Brain, label: 'Orthopedic & Neuro Rehab', value: 'Specialist' },
  { icon: UserCheck, label: 'Independent Practice', value: 'Active' },
]

const floatingIcons = [
  { Icon: Stethoscope, x: '2%', y: '15%', delay: 0 },
  { Icon: Brain, x: '80%', y: '10%', delay: 0.3 },
  { Icon: UserCheck, x: '85%', y: '75%', delay: 0.6 },
  { Icon: GraduationCap, x: '2%', y: '70%', delay: 0.9 },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-deep-teal via-deep-teal to-medical-blue overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-medical-blue rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-warm-copper rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-warm-copper font-semibold text-sm lg:text-base tracking-wider uppercase mb-4">
              Doctor of Physical Therapy (DPT)
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Helping You Move Better,
              <span className="block text-warm-copper">Recover Faster,</span>
              <span className="block">Live Pain-Free.</span>
            </h1>
            <p className="text-gray-200 text-base lg:text-lg max-w-xl mb-8 leading-relaxed">
              Dedicated Physiotherapist specializing in musculoskeletal, orthopedic, post-operative, neurological and pediatric rehabilitation with a patient-centered approach.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-warm-copper hover:bg-warm-copper/90 text-white px-6 py-3 rounded-full font-semibold transition-all hover:shadow-xl hover:shadow-warm-copper/30"
              >
                <Calendar size={18} />
                Book Appointment
              </a>
              <a
                href="https://wa.me/923188910400"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white px-6 py-3 rounded-full font-semibold transition-all"
              >
                <MessageCircle size={18} />
                WhatsApp Consultation
              </a>
            </div>
          </motion.div>

          {/* Right Content - Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Gradient Background */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-medical-blue/30 via-warm-copper/20 to-deep-teal/30 blur-3xl absolute -top-10 -left-10" />

              {/* Image Frame */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl shadow-deep-teal/50">
                <img
                  src="/hero-profile.jpeg"
                  alt="Dr. Ghazala Mushtaq"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/40 via-transparent to-transparent" />
                {/* Name badge */}
                <div className="absolute bottom-4 left-0 right-0 p-4 text-center bg-gradient-to-t from-deep-teal/80 to-transparent">
                  <p className="text-white font-heading font-semibold text-lg">Dr. Ghazala Mushtaq</p>
                  <p className="text-white/80 text-sm">Doctor of Physical Therapy</p>
                </div>
              </div>

              {/* Floating Icons */}
              {floatingIcons.map(({ Icon, x, y, delay }) => (
                <motion.div
                  key={Icon.name}
                  className="absolute w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20"
                  style={{ left: x, top: y }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay,
                    ease: 'easeInOut',
                  }}
                >
                  <Icon size={20} className="text-white" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Statistics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 lg:mt-20"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:bg-white/15 transition-all"
            >
              <stat.icon className="text-warm-copper mb-3" size={24} />
              <p className="text-white font-heading font-bold text-xl">{stat.value}</p>
              <p className="text-gray-300 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}