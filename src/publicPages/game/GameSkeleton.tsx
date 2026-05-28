import React from 'react';

const GameSkeleton = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {Array.from({ length: 6 }).map((_, index) => (
    <div
      key={index}
      className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl animate-pulse"
    >
      {/* Image Skeleton */}
      <div className="relative h-80 w-full bg-gray-900">
        {/* Genre badge */}
        <div className="absolute top-4 left-4 h-6 w-20 rounded-full bg-gray-800" />

        {/* dark overlay effect */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4">
        {/* Title */}
        <div className="h-7 w-3/4 rounded bg-gray-800" />

        {/* bottom row */}
        <div className="flex items-center justify-between">
          <div className="h-5 w-24 rounded bg-gray-800" />

          <div className="h-9 w-24 rounded-xl bg-gray-800" />
        </div>
      </div>
    </div>
  ))}
</div>
    );
};

export default GameSkeleton;