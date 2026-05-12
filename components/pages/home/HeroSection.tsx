'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-12 md:py-20">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full object-cover w-full"
      >
        <source
          src="https://res.cloudinary.com/dnfjdkspi/video/upload/v1778445011/car_driving_ycpbv1.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-1" />


      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/30 bg-white/5 backdrop-blur-md text-cyan-300 text-sm font-semibold mb-6 shadow-lg shadow-cyan-500/10">
            🏁 Premium Driving Experience
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tight"
        >
          Feel The{" "}
          <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Ultimate
          </span>
          <br />
          <span className="text-white">
            Racing Simulator
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Experience next-level racing with professional steering wheels,
          immersive 3D visuals, realistic physics, and adrenaline-pumping
          gameplay designed for true driving enthusiasts.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5 justify-center mb-14"
        >
          <Link
            href="/auth/register"
            className="group relative px-8 py-4 rounded-2xl bg-linear-to-r from-red-600 to-transparent text-white font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">Book Your Ride</span>
          </Link>

          <a
            href="#how-it-works"
            className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-lg text-white font-bold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            Explore Packages
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto pb-6"
        >
          {[
            { number: "10K+", label: "Happy Drivers" },
            { number: "500+", label: "Hours Booked" },
            { number: "4.9★", label: "Customer Rating" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl"
            >
              <div className="text-3xl md:text-4xl font-extrabold bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {stat.number}
              </div>

              <div className="text-gray-300 text-sm mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="p-2 rounded-full border border-cyan-400/30 bg-white/5 backdrop-blur-md">
          <ChevronDown size={28} className="text-cyan-300" />
        </div>
      </motion.div>
    </section>
  )
}