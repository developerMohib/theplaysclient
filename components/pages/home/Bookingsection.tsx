'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { Calendar, Clock, Users } from 'lucide-react'

export default function BookingSection() {
//   const { user } = useAuth()
const user = {
    name: 'John Doe',   email: 'john.doe@example.com', role: 'user'
}
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    duration: '1',
    name: '',
    phone: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (user) {
      // Proceed to booking
      window.location.href = '/dashboard/user'
    } else {
      // Redirect to login
      window.location.href = '/auth/login'
    }
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-black">

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-200">
            Quick Booking
          </h2>
          <p className="text-gray-300 text-lg">
            Get started with just a few clicks
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="p-8 rounded-2xl bg-linear-to-br from-slate-800/80 to-slate-900/80 border border-cyan-500/20 backdrop-blur-sm space-y-6"
        >
          {/* Date */}
          <div>
            <label className="text-sm font-semibold mb-2 flex items-center gap-2 text-white">
              <Calendar size={16} className="text-blue-400" />
              Select Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 focus:border-cyan-400 focus:outline-none text-white transition-colors"
            />
          </div>

          {/* Time */}
          <div>
            <label className="text-sm font-semibold mb-2 flex items-center gap-2 text-white">
              <Clock size={16} className="text-blue-400" />
              Select Time
            </label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 focus:border-cyan-400 focus:outline-none text-white transition-colors"
            >
              <option value="">Choose time slot</option>
              {Array.from({ length: 12 }, (_, i) => {
                const hour = 9 + i
                return (
                  <option key={hour} value={`${String(hour).padStart(2, '0')}:00`}>
                    {String(hour).padStart(2, '0')}:00 - {String(hour + 1).padStart(2, '0')}:00
                  </option>
                )
              })}
            </select>
          </div>

          {/* Duration */}
          <div>
            <label className="text-sm font-semibold mb-2 flex items-center gap-2 text-white">
              <Users size={16} className="text-blue-400" />
              Duration
            </label>
            <select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 focus:border-cyan-400 focus:outline-none text-white transition-colors"
            >
              <option value="1">1 Hour - $1,500</option>
              <option value="2">2 Hours - $2,800</option>
              <option value="3">3 Hours - $4,000</option>
              <option value="4">4 Hours - $5,000</option>
            </select>
          </div>

          {/* Name */}
          {!user && (
            <>
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 focus:border-cyan-400 focus:outline-none text-white placeholder-gray-500 transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+880 1234 567890"
                  className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 focus:border-cyan-400 focus:outline-none text-white placeholder-gray-500 transition-colors"
                />
              </div>
            </>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-linear-to-r from-cyan-500 to-purple-500 text-white font-bold hover:shadow-lg transition-all duration-300 transform cursor-pointer"
          >
            {user ? 'Continue to Booking' : 'Create Account & Book'}
          </button>

          {/* Info */}
          <p className="text-center text-gray-400 text-sm">
            {user ? (
              <>Youre logged in as <span className="text-cyan-400 font-semibold">{user.name}</span></>
            ) : (
              <>Need an account? <Link href="/auth/register" className="text-cyan-400 hover:text-cyan-300">Register here</Link></>
            )}
          </p>
        </motion.form>
      </div>
    </section>
  )
}