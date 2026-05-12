'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const milestones = [
  {
    year: '2009',
    title: 'The Beginning',
    description: 'Founded with a vision to bring professional-grade racing simulation to Bangladesh. Started small with basic simulators but big dreams.',
    icon: '🎮',
  },
  {
    year: '2012',
    title: 'Major Upgrade',
    description: 'Invested in state-of-the-art simulation technology. Upgraded to realistic steering wheels and motion platforms.',
    icon: '⚡',
  },
  {
    year: '2015',
    title: 'National Championship',
    description: 'Hosted first national e-racing championship. Became recognized as the authority in competitive gaming.',
    icon: '🏆',
  },
  {
    year: '2018',
    title: 'International Expansion',
    description: 'Featured in international gaming tournaments. Our players started competing globally and winning.',
    icon: '🌍',
  },
  {
    year: '2021',
    title: 'Premium Facility Launch',
    description: 'Opened flagship location with cutting-edge VR integration and professional esports setup.',
    icon: '🎯',
  },
  {
    year: '2024',
    title: 'Digital Platform',
    description: 'Launched online booking platform and expanded to multiple locations across Bangladesh.',
    icon: '🚀',
  },
]
const GamingHistory = () => {
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
            Our Gaming History
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            15+ years of passionate gaming, innovation, and leadership in the simulation industry
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-cyan-500 via-purple-500 to-pink-500" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <div className="w-1/2 px-8">
                  <div className={`p-6 rounded-lg bg-linear-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 ${index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}>
                    <div className="text-3xl mb-3">{milestone.icon}</div>
                    <div className="text-cyan-400 font-bold text-lg mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-400">{milestone.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="w-0 flex justify-center">
                  <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50 absolute top-0" />
                </div>

                {/* Empty space */}
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* History Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-xl bg-linear-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20"
        >
          <h3 className="text-2xl font-bold mb-6">Gaming Legacy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: '500+', subtitle: 'Gaming Sessions Monthly' },
              { title: '1000+', subtitle: 'Professional Players Trained' },
              { title: '50+', subtitle: 'Gaming Tournaments Hosted' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{item.title}</div>
                <p className="text-gray-400">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>


      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              First in Sunamganj
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Pioneering the premium driving simulator experience
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[
            {
              title: '🥇 First Premium Simulator Facility',
              description: 'Bangladesh\'s first professional-grade 3D driving simulator facility with international-standard equipment',
              year: '2009',
            },
            {
              title: '🎮 First VR Racing Integration',
              description: 'First facility to introduce virtual reality racing experience in the country',
              year: '2021',
            },
            {
              title: '🏆 First National E-Racing Championship',
              description: 'Organized Bangladesh\'s first ever national esports racing championship',
              year: '2015',
            },
            {
              title: '📱 First Online Booking Platform',
              description: 'First driving simulator facility to offer mobile app for convenient bookings',
              year: '2024',
            },
            {
              title: '👥 First Professional Gaming League',
              description: 'Founded Bangladesh\'s first professional gaming league with regular tournaments',
              year: '2018',
            },
            {
              title: '🌐 First International Connections',
              description: 'First facility to connect Bangladesh gamers with international tournaments',
              year: '2019',
            },
          ].map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="p-6 rounded-lg bg-linear-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 group-hover:border-yellow-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-3xl shrink-0">{achievement.title.split(' ')[0]}</div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-2 text-lg">{achievement.title.substring(3)}</h3>
                    <p className="text-gray-400 text-sm mb-3">{achievement.description}</p>
                    <span className="inline-block px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold">
                      Since {achievement.year}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why We're First */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="p-8 rounded-xl bg-linear-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">What Makes Us #1</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🎯',
                title: 'Innovation',
                items: [
                  'Latest gaming technology',
                  'Continuous upgrades',
                  'Research & development',
                ],
              },
              {
                icon: '👥',
                title: 'Community',
                items: [
                  '10K+ active members',
                  'Regular tournaments',
                  'Gaming events',
                ],
              },
              {
                icon: '⭐',
                title: 'Excellence',
                items: [
                  'Premium experience',
                  '4.9★ rating',
                  'Award-winning service',
                ],
              },
            ].map((category, i) => (
              <div key={i} className="p-6 rounded-lg bg-slate-800/50 border border-slate-700/50">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h4 className="font-bold mb-4 text-lg">{category.title}</h4>
                <ul className="space-y-2">
                  {category.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle size={14} className="text-yellow-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

  );
};

export default GamingHistory;