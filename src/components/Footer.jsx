import { Linkedin, Mail, Phone, Heart } from 'lucide-react'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Services', href: '#services' },
  { name: 'Experience', href: '#experience' },
  { name: 'Research', href: '#research' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-deep-teal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-2">
              Dr. Ghazala<span className="text-warm-copper">.</span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Doctor of Physical Therapy dedicated to helping you move better, recover faster, and live pain-free through evidence-based, compassionate care.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/ghazala-mushtaq-2193b3284"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-warm-copper flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="mailto:ghazalarana58@gmail.com"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-warm-copper flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              <a
                href="tel:+923188910400"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-warm-copper flex items-center justify-center transition-colors"
                aria-label="Phone"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-heading font-bold uppercase tracking-wider mb-4 text-gray-300">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-warm-copper transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-heading font-bold uppercase tracking-wider mb-4 text-gray-300">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+923188910400" className="text-gray-400 hover:text-warm-copper transition-colors text-sm flex items-center gap-2">
                  <Phone size={14} />
                  +92 318 8910400
                </a>
              </li>
              <li>
                <a href="mailto:ghazalarana58@gmail.com" className="text-gray-400 hover:text-warm-copper transition-colors text-sm flex items-center gap-2">
                  <Mail size={14} />
                  ghazalarana58@gmail.com
                </a>
              </li>
              <li className="text-gray-400 text-sm flex items-start gap-2">
                <span>Islamabad & Rawalpindi</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-center text-gray-400 text-xs flex items-center justify-center gap-1">
            &copy; {new Date().getFullYear()} Dr. Ghazala Mushtaq. All rights reserved. Made with
            <Heart size={12} className="text-warm-copper" />
            for better health.
          </p>
        </div>
      </div>
    </footer>
  )
}