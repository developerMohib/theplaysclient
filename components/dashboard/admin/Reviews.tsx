'use client'
import { motion } from 'framer-motion'
import { useState } from 'react';

const Reviews = () => {
  const [reviews] = useState([
    {
      id: 'REV001',
      user: 'Ahmed Hassan',
      rating: 5,
      comment: 'Amazing experience! Highly recommended.',
      status: 'approved',
      date: '2024-01-20',
    },
    {
      id: 'REV002',
      user: 'Fatima Khan',
      rating: 4,
      comment: 'Great service but needed better ambience.',
      status: 'pending',
      date: '2024-01-22',
    },
    {
      id: 'REV003',
      user: 'Karim Ahmed',
      rating: 3,
      comment: 'Good but could improve the equipment.',
      status: 'approved',
      date: '2024-01-23',
    },
  ])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-4">
        {reviews.map((review, i) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-lg bg-linear-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-bold mb-1">{review.user}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-1">
                    {Array(review.rating)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          ⭐
                        </span>
                      ))}
                  </div>
                  <span className="text-sm text-gray-400">{review.date}</span>
                </div>
              </div>
              {review.status === 'pending' ? (
                <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-semibold">
                  Pending
                </span>
              ) : (
                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold">
                  Approved
                </span>
              )}
            </div>

            <p className="text-gray-300 mb-4">{review.comment}</p>

            <div className="flex gap-2">
              {review.status === 'pending' && (
                <>
                  <button className="px-4 py-2 rounded-lg bg-green-500/20 hover:bg-green-500/30 text-green-400 font-semibold border border-green-500/30 transition-all">
                    Approve
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-400 font-semibold border border-red-500/30 transition-all">
                    Reject
                  </button>
                </>
              )}
              <button className="px-4 py-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-400 font-semibold border border-red-500/30 transition-all">
                Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
};

export default Reviews;