"use client";

import Image from "next/image";
import useGames from "@/src/hooks/useGames";
import GameSkeleton from "./GameSkeleton";

const Gamepage = () => {
  const { isPending, error, data, refetch } = useGames();

  if (isPending) {
    return (
      <GameSkeleton />
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold text-red-500">
          Failed to load games
        </h2>

        <button
          onClick={() => refetch()}
          className="px-5 py-2 rounded-lg bg-black text-white hover:opacity-80 transition"
        >
          Try Again
        </button>
      </div>
    );
  }

  const games = data?.data || [];

  return (
    <section className="text-white px-6 py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-4xl md:text-5xl font-bold">
          Explore Games
        </h1>

        <p className="text-gray-400 mt-3 max-w-2xl">
          Discover trending and featured games with immersive
          gameplay and stunning visuals.
        </p>
      </div>

      {/* Empty State */}
      {games.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold">
            No Games Found
          </h2>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <div
              key={game.slug}
              className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition duration-300 group"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={game.image}
                  alt={game.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

                {game.featured && (
                  <span className="absolute top-4 left-4 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">
                    {game.name}
                  </h2>

                  <span className="text-yellow-400 font-semibold">
                    ⭐ {game.rating}
                  </span>
                </div>

                <p className="text-sm text-gray-400">
                  {game.shortDescription}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {game.tags?.map((tag: string) => (
                    <span
                      key={tag}
                      className="text-xs bg-zinc-800 px-3 py-1 rounded-full text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3">
                  <div>
                    <p className="text-2xl font-bold">
                      ${game.price}
                    </p>

                    {game.discount > 0 && (
                      <p className="text-green-400 text-sm">
                        {game.discount}% OFF
                      </p>
                    )}
                  </div>

                  <button className="px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition">
                    View Game
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Gamepage;