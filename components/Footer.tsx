import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 border-t border-amber-500/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Samta Sainik Dal</h3>
            <p className="text-gray-400 text-sm">
              Providing quality military uniforms and equipment since establishment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Calculator
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-amber-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={16} className="text-amber-400" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={16} className="text-amber-400" />
                <span>contact@samtasainikdal.in</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin size={16} className="text-amber-400 mt-1" />
                <span>New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-500/20 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} Samta Sainik Dal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
