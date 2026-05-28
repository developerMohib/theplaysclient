"use client"
import { services } from '@/src/utilitis/data';
import React from 'react';

const ServicesSection = () => {
  return (
    <section className="py-20 px-4">
      <div>

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
            Our Premium Services
          </h2>

          <p className="text-gray-400 text-base md:text-lg">
            Everything you need for an unforgettable driving experience
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <div
                key={index}
                className="border border-gray-800 rounded-xl p-6 bg-gray-900"
              >
                {/* Icon */}
                <div className="mb-4 text-orange-500">
                  <Icon size={28} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;