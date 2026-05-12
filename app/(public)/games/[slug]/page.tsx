import { notFound } from "next/navigation"
import Image from "next/image"
import { games } from "@/components/data/games"
import { Metadata } from "next"
import { use } from "react"


export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    const resolvedParams = await params
    const game = games.find(
        (item) => item.slug === resolvedParams.slug
    )

    return {
        title: game?.name,
        description: game?.description,
    }
}

interface Props {
    params: Promise<{
        slug: string
    }>
}

export default function GameDetailsPage({ params }: Props) {
    const resolvedParams = use(params)
    const game = games.find(
        (item) => item.slug === resolvedParams.slug
    )

    if (!game) {
        return notFound()
    }

    return (
        <section className="bg-slate-950 text-white">
            {/* Hero */}
            <div className="relative h-[70vh]">
                <Image
                    src={game.banner}
                    alt={game.name}
                    fill
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/60" />

                <div className="absolute bottom-10 left-10 z-10">
                    <span
                        className={`inline-block px-4 py-2 rounded-full bg-linear-to-r ${game.color} text-sm font-bold mb-4`}
                    >
                        {game.genre}
                    </span>

                    <h1 className="text-6xl font-black mb-4">
                        {game.name}
                    </h1>

                    <p className="text-gray-300 max-w-2xl text-lg">
                        {game.description}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* LEFT SIDE */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold mb-6 text-white">
                            About The Game
                        </h2>

                        <p className="text-gray-400 leading-relaxed">
                            {game.description}
                        </p>

                        {/* Features */}
                        <div className="mt-12">
                            <h3 className="text-2xl font-bold mb-5 text-white">
                                Features
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {game.features.map((feature) => (
                                    <span
                                        key={feature}
                                        className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-white"
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="lg:col-span-1">
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl sticky top-24">

                            <h3 className="text-2xl font-bold mb-6 text-white">
                                Game Info
                            </h3>

                            <div className="space-y-4 text-white">
                                <Info label="Name" value={game.name} />
                                <Info label="Publisher" value={game.publisher} />
                                <Info label="Version" value={game.version} />
                                <Info label="Genre" value={game.genre} />
                                <Info label="Rating" value={`${game.rating} ★`} />
                                <Info label="Category" value={game.category} />
                            </div>

                            <button
                                className={`w-full mt-8 py-4 rounded-2xl bg-linear-to-r ${game.color} font-bold text-lg hover:scale-105 transition-transform`}
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Info({
    label,
    value,
}: {
    label: string
    value: string
}) {
    return (
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-gray-400">{label}</span>

            <span className="font-semibold">{value}</span>
        </div>
    )
}