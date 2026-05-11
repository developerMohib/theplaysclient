// components/home/PricingSection.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check } from 'lucide-react'

export default function PricingSection() {
  const packages = [
    {
      name: 'Starter Ride',
      duration: '1 Hour',
      price: 1500,
      originalPrice: 2000,
      features: [
        'Access to 3D Simulator',
        'Professional Steering Wheel',
        'Single Player Mode',
        'Basic Analytics',
        'Refreshment Included',
      ],
      popular: false,
    },
    {
      name: 'Street Racer',
      duration: '2 Hours',
      price: 2800,
      originalPrice: 4000,
      features: [
        'Everything in Starter',
        'Multiplayer Racing',
        'Advanced Analytics',
        'Friend Invite',
        'Premium Support',
        'Recording & Export',
      ],
      popular: true,
    },
    {
      name: 'Pro Driver',
      duration: '4 Hours',
      price: 5000,
      originalPrice: 8000,
      features: [
        'Everything in Street Racer',
        'Priority Booking',
        'Leaderboard Access',
        'Coach Session (30 min)',
        'Exclusive Events',
        'VIP Lounge Access',
        'Premium Merchandise',
      ],
      popular: false,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="pricing" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-cyan-500/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 text-lg">
            Choose the perfect package for your driving experience
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              {/* Card */}
              <div className={`relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 h-full flex flex-col border border-gray-200 bg-linear-to-br hover:shadow-lg`}>
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-linear-to-r from-cyan-500 to-purple-500 text-white text-sm font-bold rounded-full">
                    MOST POPULAR
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-black">{pkg.duration}</p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-blue-600">${pkg.price}</span>
                    <span className="text-orange-500 line-through">${pkg.originalPrice}</span>
                  </div>
                  <p className="text-sm text-gray-800 mt-1">Save {Math.round((1 - pkg.price / pkg.originalPrice) * 100)}%</p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check size={20} className="text-blue-600 shrink-0" />
                      <span className="text-gray-800 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <Link
                  href="/auth/register"
                  className={`w-full py-3 rounded-lg font-bold transition-all duration-300 text-center ${
                    pkg.popular
                      ? 'bg-linear-to-r from-cyan-500 to-purple-500 text-white'
                      : 'border border-cyan-400/50 text-cyan-400'
                  }`}
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Discount Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 p-6 rounded-xl bg-linear-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-center"
        >
          <p className="text-gray-800">
            🎉 <span className="font-bold">Bundle Discount!</span> Book 3+ sessions and save an additional 15%
          </p>
        </motion.div>
      </div>
    </section>
  )
}