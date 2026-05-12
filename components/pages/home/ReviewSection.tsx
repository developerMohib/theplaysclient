// components/home/ReviewsSection.tsx
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const reviews = [
    {
      name: 'Ahmed Hassan',
      image: '👨‍💼',
      rating: 5,
      text: 'Absolutely amazing experience! The simulator is so realistic and the staff is incredibly friendly. Highly recommend!',
    },
    {
      name: 'Fatima Khan',
      image: '👩‍💼',
      rating: 5,
      text: 'Best driving experience I\'ve ever had. The graphics are stunning and the steering wheel feels authentic.',
    },
    {
      name: 'Karim Ahmed',
      image: '👨‍🎓',
      rating: 5,
      text: 'Perfect for practice before real driving. Very professional setup and competitive atmosphere.',
    },
    {
      name: 'Nadia Iqbal',
      image: '👩‍🎓',
      rating: 5,
      text: 'Had a blast with my friends here! Great value for money and amazing customer service.',
    },
  ]

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section id="reviews" className="py-20 px-4 relative overflow-hidden bg-black">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-200">
            What Our Drivers Say
          </h2>
          <p className="text-gray-300 text-lg">
            Join thousands of satisfied customers
          </p>
        </motion.div>

        {/* Reviews Carousel */}
        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 md:p-12 rounded-2xl bg-linear-to-br from-slate-800/80 to-slate-900/80 border border-cyan-500/20 backdrop-blur-sm"
          >
            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {Array(reviews[currentIndex].rating)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
            </div>

            {/* Review Text */}
            <p className="text-xl text-gray-300 mb-6 italic">
              {reviews[currentIndex].text}
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="text-4xl">{reviews[currentIndex].image}</div>
              <div>
                <p className="font-bold text-white">{reviews[currentIndex].name}</p>
                <p className="text-gray-400 text-sm">Verified Driver</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-end mt-6 gap-x-5">
            <button
              onClick={prevReview}
              className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 group"
            >
              <ChevronLeft size={20} className="text-cyan-400 group-hover:text-cyan-300" />
            </button>

            <button
              onClick={nextReview}
              className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 border border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 group"
            >
              <ChevronRight size={20} className="text-cyan-400 group-hover:text-cyan-300" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-3 gap-4 md:gap-8"
        >
          {[
            { number: '10K+', label: 'Happy Drivers' },
            { number: '4.9★', label: 'Average Rating' },
            { number: '98%', label: 'Satisfaction' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                {stat.number}
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}