"use client"
import { packages } from '@/src/utilitis/data';
import { Check } from 'lucide-react';
import Link from 'next/link';

const Pricing = () => {
    return (
        <section
            id="pricing"
            className="py-20 px-4"
        >
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Simple, Transparent Pricing
                    </h2>

                    <p className="text-gray-400 text-lg">
                        Choose the perfect package for your driving experience
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className="relative rounded-2xl border border-gray-800 bg-zinc-900 p-8 flex flex-col"
                        >
                            {/* Popular Badge */}
                            {pkg.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                                    MOST POPULAR
                                </div>
                            )}

                            {/* Package Info */}
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {pkg.name}
                                </h3>

                                <p className="text-gray-400">
                                    {pkg.duration}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="mb-6">
                                <div className="flex items-end gap-2">
                                    <span className="text-4xl font-bold text-cyan-400">
                                        ${pkg.price}
                                    </span>

                                    <span className="text-gray-500 line-through">
                                        ${pkg.originalPrice}
                                    </span>
                                </div>

                                <p className="text-sm text-gray-400 mt-1">
                                    Save{" "}
                                    {Math.round(
                                        (1 - pkg.price / pkg.originalPrice) * 100
                                    )}
                                    %
                                </p>
                            </div>

                            {/* Features */}
                            <div className="space-y-3 flex-1 mb-8">
                                {pkg.features.map((feature, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3"
                                    >
                                        <Check
                                            size={18}
                                            className="text-cyan-400 shrink-0"
                                        />

                                        <span className="text-gray-300 text-sm">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Button */}
                            <Link
                                href="/auth/register"
                                className={`w-full text-center py-3 rounded-lg font-semibold transition ${pkg.popular
                                        ? "bg-cyan-500 hover:bg-cyan-600 text-white"
                                        : "border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
                                    }`}
                            >
                                Book Now
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;