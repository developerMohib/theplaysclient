import { axiosInstance } from "@/src/hooks/axiosInstance";
import Image from "next/image";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function GameDetailsPage({ params }: PageProps) {
    const { slug } = await params;
    const res = await axiosInstance.get(`/game/my/${slug}`);
    const game = res.data.data;

    return (
        <div className="text-white">
            {/* Banner */}
            <div className="relative h-100">
                <Image
                    src={game.banner}
                    alt={game.name}
                    fill
                    className=""
                />

                <div className="absolute inset-0 bg-black/70" />

                <div className="absolute inset-0 flex items-end">
                    <div className="max-w-7xl mx-auto w-full px-6 pb-10">
                        <h1 className="text-5xl font-bold">{game.name}</h1>
                        <p className="text-gray-300 mt-2">
                            {game.shortDescription}
                        </p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-3 gap-10">
                {/* Left Side */}
                <div className="lg:col-span-2">
                    <div className="relative h-112 rounded-xl overflow-hidden">
                        <Image
                            src={game.image}
                            alt={game.name}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="mt-8">
                        <h2 className="text-2xl font-bold mb-4">
                            About This Game
                        </h2>

                        <p className="text-gray-300 leading-8">
                            {game.description}
                        </p>
                    </div>

                    {/* Features */}
                    <div className="mt-10">
                        <h2 className="text-2xl font-bold mb-4">
                            Features
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {game.features.map(
                                (feature: string, index: number) => (
                                    <div
                                        key={index}
                                        className="bg-slate-900 border border-slate-800 rounded-lg p-4"
                                    >
                                        ✅ {feature}
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="mt-10">
                        <h2 className="text-2xl font-bold mb-4">
                            Tags
                        </h2>

                        <div className="flex flex-wrap gap-3">
                            {game.tags.map((tag: string, index: number) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-slate-800 rounded-full text-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div>
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 sticky top-6">
                        <div className="flex items-center justify-between">
                            <span className="bg-red-500 px-3 py-1 rounded text-sm">
                                -{game.discount}%
                            </span>

                            <span className="text-yellow-400 font-semibold">
                                ⭐ {game.rating}
                            </span>
                        </div>

                        <div className="mt-6">
                            <p className="text-gray-400">
                                ${game.price}
                            </p>
                        </div>

                        <button className="w-full mt-6 bg-red-600 hover:bg-red-700 transition py-3 rounded-lg font-semibold">
                            Buy Now
                        </button>

                        <div className="mt-8 space-y-4 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-400">
                                    Publisher
                                </span>
                                <span>{game.publisher}</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-400">
                                    Genre
                                </span>
                                <span>{game.genre}</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-400">
                                    Category
                                </span>
                                <span>{game.category}</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-400">
                                    Multiplayer
                                </span>
                                <span>
                                    {game.multiplayer ? "Yes" : "No"}
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-400">
                                    Version
                                </span>
                                <span>{game.version}</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-400">
                                    Released
                                </span>
                                <span>
                                    {new Date(
                                        game.releaseDate
                                    ).toLocaleDateString()}
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-400">
                                    Available
                                </span>
                                <span
                                    className={
                                        game.available
                                            ? "text-green-400"
                                            : "text-red-400"
                                    }
                                >
                                    {game.available
                                        ? "In Stock"
                                        : "Out of Stock"}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}