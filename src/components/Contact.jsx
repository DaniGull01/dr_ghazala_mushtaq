import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Linkedin, MessageCircle, Send } from 'lucide-react'

const WHATSAPP_NUMBER = '923188910400' // no + or leading zeros

const SERVICE_LABELS = {
  musculoskeletal: 'Musculoskeletal Rehabilitation',
  orthopedic: 'Orthopedic Rehabilitation',
  neurological: 'Neurological Rehabilitation',
  pediatric: 'Pediatric Rehabilitation',
  'post-op': 'Post-Operative Rehabilitation',
  pain: 'Pain Management',
  other: 'Other',
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const serviceLabel = SERVICE_LABELS[formData.service] || 'Not specified'

    const messageLines = [
      '*New Appointment Request*',
      '',
      `*Name:* ${formData.name || '-'}`,
      `*Email:* ${formData.email || '-'}`,
      `*Phone:* ${formData.phone || '-'}`,
      `*Service Interested In:* ${serviceLabel}`,
      '',
      `*Message:*`,
      formData.message || '-',
    ]

    const encodedMessage = encodeURIComponent(messageLines.join('\n'))
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

    // Optional: reset the form after sending
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-light-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-warm-copper font-semibold text-sm tracking-wider uppercase">Get In Touch</span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-deep-teal mt-2">
            Contact Me
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Ready to start your recovery? Reach out and let's discuss your treatment plan
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-heading font-bold text-deep-teal mb-2">Dr. Ghazala Mushtaq</h3>
              <p className="text-gray-500 mb-6">Doctor of Physical Therapy (DPT)</p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-medical-blue/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-medical-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Phone</p>
                    <a href="tel:+923188910400" className="text-gray-500 hover:text-warm-copper transition-colors text-sm">
                      +92 318 8910400
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-medical-blue/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-medical-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Email</p>
                    <a href="mailto:ghazalarana58@gmail.com" className="text-gray-500 hover:text-warm-copper transition-colors text-sm">
                      ghazalarana58@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-medical-blue/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-medical-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Location</p>
                    <p className="text-gray-500 text-sm">Islamabad & Rawalpindi</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-medical-blue/10 flex items-center justify-center flex-shrink-0">
                    <Linkedin size={18} className="text-medical-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/ghazala-mushtaq-2193b3284" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-warm-copper transition-colors text-sm">
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <a
                  href="https://wa.me/923188910400"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white w-full py-3 rounded-xl font-semibold transition-all hover:shadow-lg"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 overflow-hidden">
              <h4 className="font-heading font-bold text-deep-teal mb-4">Service Location</h4>
              <iframe
                src="https://maps.google.com/maps?q=33.613948420284075,73.06781338465711&z=15&output=embed"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: '0.75rem' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <p className="text-gray-500 text-sm mt-4">
                📍 Islamabad & Rawalpindi
              </p>
              <p className="text-gray-400 text-xs mt-1">In-clinic and home visit consultations available</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-heading font-bold text-deep-teal mb-6">Send a Message</h3>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-medical-blue focus:ring-2 focus:ring-medical-blue/20 outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-medical-blue focus:ring-2 focus:ring-medical-blue/20 outline-none transition-all text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+92 3XX XXXXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-medical-blue focus:ring-2 focus:ring-medical-blue/20 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">Service Interested In</label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-medical-blue focus:ring-2 focus:ring-medical-blue/20 outline-none transition-all text-sm text-gray-500"
                  >
                    <option value="">Select a service</option>
                    <option value="musculoskeletal">Musculoskeletal Rehabilitation</option>
                    <option value="orthopedic">Orthopedic Rehabilitation</option>
                    <option value="neurological">Neurological Rehabilitation</option>
                    <option value="pediatric">Pediatric Rehabilitation</option>
                    <option value="post-op">Post-Operative Rehabilitation</option>
                    <option value="pain">Pain Management</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell me about your condition..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-medical-blue focus:ring-2 focus:ring-medical-blue/20 outline-none transition-all text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-deep-teal hover:bg-deep-teal/90 text-white py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>      
    </section>
  )
}