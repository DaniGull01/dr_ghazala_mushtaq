import { motion } from 'framer-motion'
import {
  Calendar,
  MessageCircle,
  GraduationCap,
  Stethoscope,
  Brain,
  UserCheck,
} from 'lucide-react'

const stats = [
  {
    icon: GraduationCap,
    label: 'Certified Cupping & Dry Needling Therapist',
    value: 'Physiotherapist',
  },
  {
    icon: Stethoscope,
    label: 'Clinical Rotations',
    value: '5+',
  },
  {
    icon: Brain,
    label: 'Orthopedic & Neuro Rehab',
    value: 'Specialist',
  },
  {
    icon: UserCheck,
    label: 'Independent Practice',
    value: 'Active',
  },
]

const floatingIcons = [
  { Icon: Stethoscope, x: '2%', y: '15%', delay: 0 },
  { Icon: Brain, x: '85%', y: '10%', delay: 0.3 },
  { Icon: UserCheck, x: '88%', y: '75%', delay: 0.6 },
  { Icon: GraduationCap, x: '2%', y: '75%', delay: 0.9 },
]

export default function Hero() {
  return (
    <section
  id="home"
  className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
  style={{
    backgroundImage: `
      linear-gradient(
        110deg,
        rgba(7, 43, 48, 0.92) 0%,
        rgba(7, 43, 48, 0.82) 30%,
        rgba(15, 52, 68, 0.72) 100%
      ),
      url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=85')
    `,
  }}
>
      {/* Subtle Background Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-medical-blue/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00b5f1]/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[#00b5f1] font-semibold text-sm lg:text-base tracking-wider uppercase mb-4">
              Doctor of Physical Therapy (DPT)
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Helping You Move Better,
              <span className="block text-[#00b5f1]">
                Recover Faster,
              </span>
              <span className="block">
                Live Pain-Free.
              </span>
            </h1>

            <p className="text-gray-200 text-base lg:text-lg max-w-xl mb-8 leading-relaxed">
              Dedicated Consultant Physiotherapist providing
              patient-centered care in musculoskeletal, orthopedic,
              post-operative, neurological, and pediatric rehabilitation.
              Helping patients improve mobility, manage pain, and
              regain function through personalized rehabilitation.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2
                  bg-[#00b5f1] hover:bg-[#00b5f1]/90 text-white
                  px-6 py-3 rounded-full font-semibold transition-all
                  hover:shadow-xl hover:shadow-[#00b5f1]/30"
              >
                <Calendar size={18} />
                Book Appointment
              </a>

              <a
                href="https://wa.me/923188910400"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2
                  border-2 border-white/40 hover:border-white
                  hover:bg-white/10 text-white px-6 py-3
                  rounded-full font-semibold transition-all"
              >
                <MessageCircle size={18} />
                WhatsApp Consultation
              </a>
            </div>

            {/* Location / Clinic */}
            <p className="mt-6 text-white/75 text-sm">
              <span className="text-[#00b5f1] font-semibold">
                Wellcare Therapy Clinic
              </span>
              {' '}| G-9/4, Islamabad
            </p>
          </motion.div>

          {/* Right Content - Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative">

              {/* Portrait Glow */}
              <div
                className="absolute -inset-8 rounded-full
                  bg-gradient-to-br from-medical-blue/30
                  via-[#00b5f1]/20 to-deep-teal/30 blur-3xl"
              />

              {/* Image Frame */}
              <div
                className="relative w-64 h-64 sm:w-72 sm:h-72
                  lg:w-80 lg:h-80 rounded-full overflow-hidden
                  border-4 border-white/30 shadow-2xl
                  shadow-deep-teal/50"
              >
                <img
                  src="/hero-profile.jpeg"
                  alt="Dr. Ghazala Mushtaq, Consultant Physiotherapist"
                  className="w-full h-full object-cover"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/50 via-transparent to-transparent" />

                {/* Name Badge */}
                <div className="absolute bottom-0 left-0 right-0 p-5 pt-10 text-center bg-gradient-to-t from-deep-teal/95 to-transparent">
                  <p className="text-white font-heading font-semibold text-lg">
                    Dr. Ghazala Mushtaq
                  </p>
                  <p className="text-white/85 text-sm">
                    Consultant Physiotherapist
                  </p>
                </div>
              </div>

              {/* Floating Medical Icons */}
              {floatingIcons.map(({ Icon, x, y, delay }) => (
                <motion.div
                  key={Icon.displayName || Icon.name || delay}
                  className="absolute z-10 w-12 h-12
                    bg-white/15 backdrop-blur-md rounded-xl
                    flex items-center justify-center
                    border border-white/25 shadow-lg"
                  style={{
                    left: x,
                    top: y,
                  }}
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
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-md
                rounded-2xl p-5 border border-white/15
                hover:bg-white/15 hover:border-[#00b5f1]/40
                transition-all duration-300"
            >
              <stat.icon
                className="text-[#00b5f1] mb-3"
                size={26}
              />

              <p className="text-white font-heading font-bold text-lg sm:text-xl mb-1">
                {stat.value}
              </p>

              <p className="text-gray-200 text-sm leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}