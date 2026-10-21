import { motion } from 'framer-motion'
import { BookText, Download, FileText } from 'lucide-react'

export default function Research() {
  return (
    <section id="research" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-warm-copper font-semibold text-sm tracking-wider uppercase">Evidence-Based Practice</span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-deep-teal mt-2">
            Research & Publications
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Contributing to the advancement of physiotherapy through research
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80"
                alt="Medical research and evidence-based practice"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-white font-heading font-semibold text-lg">Research-Driven Care</p>
                <p className="text-white/80 text-sm">Bridging evidence and clinical practice</p>
              </div>
            </div>
          </motion.div>

          {/* Research Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-light-cream to-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-medical-blue to-deep-teal flex items-center justify-center shadow-lg flex-shrink-0">
                  <BookText size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText size={14} className="text-warm-copper" />
                    <span className="text-xs font-semibold text-warm-copper uppercase tracking-wider">Featured Research</span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-heading font-bold text-deep-teal mb-4 leading-tight">
                    Comparative Effectiveness of Lumbosacral Exercises and Mulligan Mobilization in Sacroiliac Joint Dysfunction
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    A comparative study evaluating the effectiveness of two treatment approaches for patients suffering from sacroiliac joint dysfunction. This research contributes to evidence-based practice in musculoskeletal physiotherapy.
                  </p>
                  <button href='https://www.xisdxjxsu.asia/viewarticle.php?aid=4006' className="inline-flex items-center gap-2 bg-deep-teal hover:bg-deep-teal/90 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg cursor-pointer">
                    <Download size={16} />
                    Download Publication
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}