'use client'

import { motion } from 'framer-motion'
import { Award, Users, Zap, Trophy, CheckCircle, Star } from 'lucide-react'

const facilities = [
  {
    icon: <Zap size={40} />,
    title: 'Professional Simulators',
    description: 'High-end 3D racing simulators with ultra-realistic graphics and physics',
    features: ['4K Resolution', 'Real-time Physics', 'Multiple Tracks'],
  },
  {
    icon: <Trophy size={40} />,
    title: 'Gaming Lounge',
    description: 'Comfortable premium lounge with refreshments and social space',
    features: ['Free WiFi', 'Complimentary Drinks', 'Lounge Seating'],
  },
  {
    icon: <Users size={40} />,
    title: 'Multiplayer Arena',
    description: 'Compete with friends in real-time multiplayer racing sessions',
    features: ['Up to 8 Players', 'Live Leaderboard', 'Tournament Ready'],
  },
  {
    icon: <Award size={40} />,
    title: 'Pro Training Center',
    description: 'Dedicated coaching area for professional racing training',
    features: ['Expert Coaches', 'Performance Analysis', 'Race Strategy'],
  },
  {
    icon: <Star size={40} />,
    title: 'Premium Audio System',
    description: 'Immersive surround sound for ultimate gaming experience',
    features: ['7.1 Surround', 'Engine Sound', 'Spatial Audio'],
  },
  {
    icon: <CheckCircle size={40} />,
    title: 'VR Integration',
    description: 'Latest virtual reality technology for next-level immersion',
    features: ['360° View', 'Motion Tracking', 'Full Immersion'],
  },
]
const Facilities = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            World-Class Facilities
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need for an unforgettable driving experience
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-linear-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />

              {/* Card */}
              <div className="relative p-8 rounded-xl bg-linear-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm h-full">
                {/* Icon */}
                <div className="mb-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                  {facility.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2">{facility.title}</h3>

                {/* Description */}
                <p className="text-gray-400 mb-6">{facility.description}</p>

                {/* Features */}
                <div className="space-y-2">
                  {facility.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-cyan-400" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Facility Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-xl bg-linear-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Facility Specifications</h3>
              <ul className="space-y-3">
                {[
                  '8 Premium Racing Simulators with 4K displays',
                  'Multi-track game library with 200+ tracks',
                  'Real-time leaderboard and statistics',
                  'Professional-grade steering wheel equipment',
                  'Climate-controlled comfort area',
                  'Food & beverage service',
                  'Free parking available',
                  'Open 24/7 (by appointment)',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-cyan-400 shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </ul>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-lg border border-cyan-500/20 text-center">
              <div className="text-6xl mb-4">🏢</div>
              <p className="text-gray-300 mb-4">
                <span className="text-2xl font-bold text-cyan-400">5,000 sq ft</span>
                <br />
                State-of-the-art gaming facility
              </p>
              <p className="text-gray-400 text-sm">
                Designed specifically for professional and casual gamers alike
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Facilities;