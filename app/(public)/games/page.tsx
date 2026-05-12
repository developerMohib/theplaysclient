import { games } from '@/components/data/games';
import Link from 'next/dist/client/link';
import Image from 'next/image';

const page = () => {
    return (
       <section className="min-h-screen bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-black text-white mb-14">
          Popular Games
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games?.map((game) => (
            <Link
              key={game.id}
              href={`/games/${game?.slug}`}
              className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5"
            >
              <div className="relative h-80">
                <Image
                  src={game.image}
                  alt={game.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-white">
                  {game.name}
                </h2>

                <p className="text-gray-400 mt-2">
                  {game.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    );
};

export default page;