'use client'

import { motion } from 'framer-motion'
const team = [
  {
    name: 'Ahmed Hassan',
    role: 'Founder & CEO',
    image: '👨‍💼',
    bio: '15+ years in gaming industry, visionary leader',
    specialties: ['Strategic Planning', 'Gaming Tech', 'Business Development'],
  },
  {
    name: 'Fatima Khan',
    role: 'Technical Director',
    image: '👩‍💻',
    bio: 'Expert in simulator technology and VR integration',
    specialties: ['VR Technology', 'System Design', 'Hardware'],
  },
  {
    name: 'Karim Ahmed',
    role: 'Operations Manager',
    image: '👨‍🔧',
    bio: 'Ensures smooth daily operations and maintenance',
    specialties: ['Facility Management', 'Quality Control', 'Team Leadership'],
  },
  {
    name: 'Nadia Iqbal',
    role: 'Customer Experience Lead',
    image: '👩‍💼',
    bio: 'Dedicated to exceptional customer service',
    specialties: ['Customer Service', 'Event Management', 'Community Building'],
  },
  {
    name: 'Rashid Mohammed',
    role: 'Gaming Coach',
    image: '🏆',
    bio: 'Professional racing coach and tournament organizer',
    specialties: ['Race Training', 'Coaching', 'Tournament Management'],
  },
  {
    name: 'Maliha Begum',
    role: 'Marketing Manager',
    image: '📱',
    bio: 'Promotes our brand and engages the community',
    specialties: ['Digital Marketing', 'Social Media', 'Community Engagement'],
  },
]

const TeamSquad = () => {
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
            Our Team Squad
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate professionals dedicated to delivering the best gaming experience
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card */}
              <div className="p-6 rounded-xl bg-linear-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm">
                {/* Avatar */}
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {member.image}
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-cyan-400 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4">{member.bio}</p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-xl bg-linear-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Team Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: '💡', title: 'Innovation', desc: 'Always pushing boundaries' },
              { icon: '🤝', title: 'Teamwork', desc: 'Together we achieve more' },
              { icon: '🎯', title: 'Excellence', desc: 'Best quality always' },
              { icon: '❤️', title: 'Passion', desc: 'Love what we do' },
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-3">{value.icon}</div>
                <h4 className="font-bold mb-2">{value.title}</h4>
                <p className="text-gray-400 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSquad;