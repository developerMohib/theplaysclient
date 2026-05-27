"use client"

import { steps } from '@/src/utilitis/data';


const Howtobooks = () => {
    return (
        <section id="how-it-works" className="py-20 px-4">
  <div>

    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
        How Booking Works
      </h2>
      <p className="text-gray-400 text-base md:text-lg">
        Simple and fast booking in 5 steps
      </p>
    </div>

    {/* Steps */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {steps.map((step, index) => {
        const Icon = step.icon

        return (
          <div
            key={index}
            className="border border-gray-800 rounded-xl p-6 bg-gray-900"
          >
            <Icon className="text-white mb-4" size={28} />

            <h3 className="text-white font-semibold mb-2">
              {step.title}
            </h3>

            <p className="text-gray-400 text-sm">
              {step.description}
            </p>
          </div>
        )
      })}
    </div>
  </div>
</section>
    );
};

export default Howtobooks;