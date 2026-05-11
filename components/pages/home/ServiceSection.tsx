'use client'

import { motion } from 'framer-motion'
import { Gamepad2, Users, Trophy, Zap, Joystick, Clock } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: Gamepad2,
      title: '3D Driving Simulator',
      description: 'Experience hyper-realistic driving with cutting-edge graphics and physics',
    },
    {
      icon: Trophy,
      title: 'Racing Competition',
      description: 'Compete with friends and climb the leaderboard rankings',
    },
    {
      icon: Joystick,
      title: 'Real Steering Wheel',
      description: 'Professional-grade equipment with true-to-life feedback and controls',
    },
    {
      icon: Users,
      title: 'Multiplayer Racing',
      description: 'Race against others in real-time multiplayer sessions',
    },
    {
      icon: Zap,
      title: 'Gaming Lounge',
      description: 'Relax in our premium lounge with refreshments and amenities',
    },
    {
      icon: Clock,
      title: 'Hourly Rental',
      description: 'Flexible booking options from 1 to 4 hour sessions',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-purple-500/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Premium Services
          </h2>
          <p className="text-black text-lg">
            Everything you need for an unforgettable driving experience
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative border border-gray-300 rounded-xl bg-linear-to-br hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
              >
                <div className="absolute inset-0 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />

                <div className="relative p-8 rounded-xl group-hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm">
                  {/* Icon */}
                  <div className="mb-6 w-14 h-14 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} className="text-orange-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="leading-relaxed">{service.description}</p>

              
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}