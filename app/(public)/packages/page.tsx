import { memberships, packages } from '@/src/utilitis/data';
import React from 'react';

const page = () => {
    return (
        <section className="py-16 px-4 bg-black text-white">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">
                        Racing Packages
                    </h2>

                    <p className="text-gray-400">
                        Choose your perfect driving experience
                    </p>
                </div>

                {/* Packages */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    {packages.map((singlePackage) => {
                        const discountPercentage = Math.round(
                            ((singlePackage.originalPrice -
                                singlePackage.price) /
                                singlePackage.originalPrice) *
                            100
                        )

                        return (
                            <div
                                key={singlePackage.name}
                                className={`border rounded-2xl p-6 relative ${singlePackage.popular
                                        ? 'border-red-500'
                                        : 'border-gray-800'
                                    }`}
                            >
                                {singlePackage.popular && (
                                    <div className="absolute top-4 right-4 bg-red-500 text-sm px-3 py-1 rounded-full">
                                        Popular
                                    </div>
                                )}

                                <h3 className="text-2xl font-semibold mb-2">
                                    {singlePackage.name}
                                </h3>

                                <p className="text-gray-400 mb-4">
                                    {singlePackage.duration}
                                </p>

                                <div className="mb-6">
                                    <div className="flex items-center gap-3">
                                        <span className="text-4xl font-bold">
                                            ৳{singlePackage.price}
                                        </span>

                                        <span className="line-through text-gray-500">
                                            ৳{singlePackage.originalPrice}
                                        </span>
                                    </div>

                                    <p className="text-green-400 mt-1">
                                        Save {discountPercentage}%
                                    </p>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {singlePackage.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="text-gray-300"
                                        >
                                            • {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className="w-full bg-white text-black py-3 rounded-xl font-medium hover:bg-gray-200 transition">
                                    Book Now
                                </button>
                            </div>
                        )
                    })}
                </div>

                {/* Membership Section */}
                <div>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4">
                            Membership Plans
                        </h2>

                        <p className="text-gray-400">
                            Get extra benefits and exclusive access
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {memberships.map((membership) => (
                            <div
                                key={membership.name}
                                className="border border-gray-800 rounded-2xl p-6"
                            >
                                <h3 className="text-2xl font-semibold mb-4">
                                    {membership.name}
                                </h3>

                                <div className="text-4xl font-bold mb-6">
                                    ৳{membership.price} / <span className='text-orange-500 text-sm'>{membership.duration} days</span>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {membership.benefits.map((benefit) => (
                                        <li
                                            key={benefit}
                                            className="text-gray-300"
                                        >
                                            • {benefit}
                                        </li>
                                    ))}
                                </ul>

                                <button className="w-full border border-white py-3 rounded-xl hover:bg-white hover:text-black transition">
                                    Join Membership
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default page;