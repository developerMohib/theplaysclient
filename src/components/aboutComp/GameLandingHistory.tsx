import React from 'react';

const GameLandingHistory = () => {
    return (
            <section className="py-20 px-4  text-white">
      <div className="o">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            First in Sunamganj
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Pioneering the premium driving simulator experience
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">

          {achievements.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-lg bg-slate-900 border border-slate-800 hover:border-yellow-500/50 transition"
            >
              <h3 className="text-lg font-bold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm mb-3">
                {item.description}
              </p>

              <span className="inline-block px-3 py-1 text-xs rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400">
                Since {item.year}
              </span>
            </div>
          ))}

        </div>

        {/* Why We're First */}
        <div className="p-8 rounded-xl bg-slate-900 border border-slate-800">
          <h3 className="text-2xl font-bold mb-8 text-center">
            What Makes Us #1
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {categories.map((cat) => (
              <div
                key={cat.title}
                className="p-6 rounded-lg bg-black border border-slate-800"
              >
                <div className="text-4xl mb-4">{cat.icon}</div>

                <h4 className="font-bold text-lg mb-4">
                  {cat.title}
                </h4>

                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-gray-300 text-sm"
                    >
                      <CheckCircle size={14} className="text-yellow-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
    );
};

export default GameLandingHistory;

import { CheckCircle } from 'lucide-react'

const achievements = [
  {
    title: '🥇 First Premium Simulator Facility',
    description:
      "Bangladesh's first professional-grade 3D driving simulator facility with international-standard equipment",
    year: '2009',
  },
  {
    title: '🎮 First VR Racing Integration',
    description:
      'First facility to introduce virtual reality racing experience in the country',
    year: '2021',
  },
  {
    title: '🏆 First National E-Racing Championship',
    description:
      "Organized Bangladesh's first ever national esports racing championship",
    year: '2015',
  },
  {
    title: '📱 First Online Booking Platform',
    description:
      'First driving simulator facility to offer mobile app for convenient bookings',
    year: '2024',
  },
  {
    title: '👥 First Professional Gaming League',
    description:
      "Founded Bangladesh's first professional gaming league with regular tournaments",
    year: '2018',
  },
  {
    title: '🌐 First International Connections',
    description:
      'First facility to connect Bangladesh gamers with international tournaments',
    year: '2019',
  },
]

const categories = [
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
    items: ['10K+ active members', 'Regular tournaments', 'Gaming events'],
  },
  {
    icon: '⭐',
    title: 'Excellence',
    items: ['Premium experience', '4.9★ rating', 'Award-winning service'],
  },
]