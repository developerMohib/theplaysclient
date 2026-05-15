import { games } from "@/components/data/games"
import Image from "next/image"
import Link from "next/link"

export default function GameListSection() {
    return (
        <section className="relative py-24 overflow-hidden container mx-auto">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 text-cyan-300 text-sm font-semibold mb-5">
                        🎮 Popular Games
                    </span>

                    <h2 className="text-4xl md:text-6xl font-black text-white mb-5">
                        Choose Your{" "}
                        <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            Favorite Game
                        </span>
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Experience next-generation gaming with ultra graphics,
                        realistic controls, and immersive gameplay.
                    </p>
                </div>

                {/* Game Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {games?.map((game, index) => (                       
                        <div
                            key={index}
                            className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Image */}
                            <Link href={`/games/${game.slug}`} className="relative block h-80">
                            <div className="relative h-105 overflow-hidden">
                                <Image
                                    src={game.image}
                                    alt={game.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

                                {/* Genre Badge */}
                                <div
                                    className={`absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-semibold text-white bg-linear-to-r ${game.color}`}
                                >
                                    {game.genre}
                                </div>
                            </div>
                            </Link>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-3xl font-black text-white mb-3">
                                    {game.name}
                                </h3>

                                <div className="flex items-center justify-between">
                                    <span className="text-gray-300 text-sm">
                                        Available Now
                                    </span>

                                    <button
                                        className={`px-5 py-2 rounded-xl bg-linear-to-r ${game.color} text-white font-semibold hover:scale-105 transition-transform duration-300`}
                                    >
                                     Take your slot
                                    </button>
                                </div>
                            </div>

                            {/* Hover Glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-cyan-500/5 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}