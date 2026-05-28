const team = [
  {
    name: 'Avishak',
    role: 'Founder & CEO',
    image: '👨‍💼',
    bio: 'Leads vision and business strategy for the platform',
    specialties: ['Strategic Planning', 'Gaming Tech', 'Business Development'],
  },
  {
    name: 'Emon',
    role: 'Technical Director',
    image: '👨‍💻',
    bio: 'Handles simulator systems and technical architecture',
    specialties: ['VR Technology', 'System Design', 'Hardware'],
  },
  {
    name: 'Anik',
    role: 'Operations Manager',
    image: '👨‍🔧',
    bio: 'Ensures smooth daily operations and maintenance',
    specialties: ['Facility Management', 'Quality Control', 'Team Leadership'],
  },
  {
    name: 'Bijoy',
    role: 'Customer Experience Lead',
    image: '👨‍💼',
    bio: 'Focuses on customer satisfaction and service quality',
    specialties: ['Customer Service', 'Event Management', 'Community Building'],
  },
]

export default function TeamSquad() {
  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Team Squad
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate professionals dedicated to delivering the best gaming experience
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 transition"
            >

              {/* Avatar */}
              <div className="text-5xl mb-4">
                {member.image}
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold mb-1">
                {member.name}
              </h3>

              <p className="text-cyan-400 font-semibold mb-3">
                {member.role}
              </p>

              <p className="text-gray-400 text-sm mb-4">
                {member.bio}
              </p>

              {/* Specialties */}
              <div className="flex flex-wrap gap-2">
                {member.specialties.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mt-16 p-8 rounded-xl bg-slate-900 border border-slate-800">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Team Values
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">

            <div>
              <div className="text-4xl mb-2">💡</div>
              <h4 className="font-bold">Innovation</h4>
              <p className="text-gray-400 text-sm">Always pushing boundaries</p>
            </div>

            <div>
              <div className="text-4xl mb-2">🤝</div>
              <h4 className="font-bold">Teamwork</h4>
              <p className="text-gray-400 text-sm">Together we achieve more</p>
            </div>

            <div>
              <div className="text-4xl mb-2">🎯</div>
              <h4 className="font-bold">Excellence</h4>
              <p className="text-gray-400 text-sm">Best quality always</p>
            </div>

            <div>
              <div className="text-4xl mb-2">❤️</div>
              <h4 className="font-bold">Passion</h4>
              <p className="text-gray-400 text-sm">Love what we do</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}