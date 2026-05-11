// components/shared/Footer.tsx
import Link from 'next/link'
import {  Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-linear-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center font-bold text-slate-950">
                ▶
              </div>
              <span className="text-lg font-bold bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                The Plays
              </span>
            </div>
            <p className="text-slate-900 text-sm">
              Premium 3D driving simulator experiences with professional-grade equipment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-950 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Pricing', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="text-slate-900 hover:text-cyan-400 transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-slate-950 font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {['FAQ', 'Privacy Policy', 'Terms of Service', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-900 hover:text-cyan-400 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-slate-950 font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-slate-900 text-sm">
                <Phone size={16} className="text-cyan-400" />
                +880 1234 567890
              </li>
              <li className="flex items-center gap-2 text-slate-900 text-sm">
                <Mail size={16} className="text-cyan-400" />
                info@theplays.com
              </li>
              <li className="flex items-center gap-2 text-slate-900 text-sm">
                <MapPin size={16} className="text-cyan-400" />
                Dhaka, Bangladesh
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8 mb-8">
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-6">
            {[
              { Icon: Mail, label: 'Facebook' },
              { Icon: Mail, label: 'Twitter' },
              { Icon: Mail, label: 'Instagram' },
              { Icon: Mail, label: 'LinkedIn' },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-slate-500 text-sm">
            <p>&copy; 2024 The Plays. All rights reserved. | Built with ❤️ for driving enthusiasts</p>
          </div>
        </div>
      </div>
    </footer>
  )
}