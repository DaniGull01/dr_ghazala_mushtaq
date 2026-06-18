import { motion } from 'framer-motion'
import { Calendar, MessageCircle } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-teal via-deep-teal to-medical-blue" />

      {/* Medical Background Image */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Abstract Medical Shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 border border-white/30 rounded-full" />
        <div className="absolute bottom-10 right-10 w-80 h-80 border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/10 rounded-full" />
        <div className="absolute top-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-warm-copper/20 rounded-full blur-3xl" />
        {/* Cross/plus medical symbols */}
        <div className="absolute top-1/4 left-1/4 text-white/20 text-6xl font-light">+</div>
        <div className="absolute bottom-1/4 right-1/4 text-white/20 text-6xl font-light">+</div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            Start Your Recovery Journey Today
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Take the first step toward a pain-free, active lifestyle. Book your consultation now and experience personalized physiotherapy care.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-warm-copper hover:bg-warm-copper/90 text-white px-8 py-3.5 rounded-full font-semibold text-base transition-all hover:shadow-xl hover:shadow-warm-copper/30"
            >
              <Calendar size={18} />
              Book Appointment
            </a>
            <a
              href="https://wa.me/923188910400"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-full font-semibold text-base transition-all border border-white/30"
            >
              <MessageCircle size={18} />
              WhatsApp Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}