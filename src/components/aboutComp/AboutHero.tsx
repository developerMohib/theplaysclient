const AboutHero = () => {
  return (
    <section className="relative py-20 px-4 bg-black text-white">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About The Plays
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-4">
            Revolutionizing the Driving Simulation Experience
          </p>

          <p className="text-gray-400 max-w-2xl mx-auto">
            From our passion for racing to creating Bangladesh&apos;s premier driving simulator facility,
            we have been setting the standard for immersive entertainment and competitive gaming.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          
          <div className="p-6 rounded-lg bg-slate-900 border border-cyan-500/20 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">
              15+
            </div>
            <div className="text-gray-400 text-sm">
              Years Experience
            </div>
          </div>

          <div className="p-6 rounded-lg bg-slate-900 border border-cyan-500/20 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">
              10K+
            </div>
            <div className="text-gray-400 text-sm">
              Happy Gamers
            </div>
          </div>

          <div className="p-6 rounded-lg bg-slate-900 border border-cyan-500/20 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">
              #1
            </div>
            <div className="text-gray-400 text-sm">
              In Bangladesh
            </div>
          </div>

          <div className="p-6 rounded-lg bg-slate-900 border border-cyan-500/20 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">
              4.9★
            </div>
            <div className="text-gray-400 text-sm">
              Average Rating
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutHero