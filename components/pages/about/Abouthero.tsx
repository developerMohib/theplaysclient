'use client'

import { motion } from 'framer-motion'


const Abouthero = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden bg-black">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About The Plays
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            Revolutionizing the Driving Simulation Experience
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From our passion for racing to creating Bangladeshs premier driving simulator facility,
            weve been setting the standard for immersive entertainment and competitive gaming.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          {[
            { number: '15+', label: 'Years Experience' },
            { number: '10K+', label: 'Happy Gamers' },
            { number: '#1', label: 'In Bangladesh' },
            { number: '4.9★', label: 'Average Rating' },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-lg bg-linear-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 text-center"
            >
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Abouthero;