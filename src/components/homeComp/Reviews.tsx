"use client"

import { reviews } from "@/src/utilitis/data";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

const Reviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextReview = () => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }

    const prevReview = () => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
    }
    return (
        <section
            id="reviews"
            className="py-20 px-4"
        >
            <div>
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        What Our Drivers Say
                    </h2>

                    <p className="text-gray-400 text-lg">
                        Join thousands of satisfied customers
                    </p>
                </div>

                {/* Review Card */}
                <div className="rounded-2xl border border-gray-800 bg-zinc-900 p-8 md:p-12">
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                        {Array(reviews[currentIndex].rating)
                            .fill(0)
                            .map((_, i) => (
                                <Star
                                    key={i}
                                    size={20}
                                    className="fill-yellow-400 text-yellow-400"
                                />
                            ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-lg md:text-xl text-gray-300 italic mb-6">
                        {reviews[currentIndex].text}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                        <div className="text-4xl">
                            {reviews[currentIndex].image}
                        </div>

                        <div>
                            <h4 className="text-white font-semibold">
                                {reviews[currentIndex].name}
                            </h4>

                            <p className="text-gray-400 text-sm">
                                Verified Driver
                            </p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-4 mt-8">
                        <button
                            onClick={prevReview}
                            className="p-3 rounded-lg border border-cyan-500/30 bg-zinc-800 hover:bg-zinc-700 transition"
                        >
                            <ChevronLeft
                                size={20}
                                className="text-cyan-400"
                            />
                        </button>

                        <button
                            onClick={nextReview}
                            className="p-3 rounded-lg border border-cyan-500/30 bg-zinc-800 hover:bg-zinc-700 transition"
                        >
                            <ChevronRight
                                size={20}
                                className="text-cyan-400"
                            />
                        </button>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 text-center">
                    {[
                        { number: "10K+", label: "Happy Drivers" },
                        { number: "4.9★", label: "Average Rating" },
                        { number: "98%", label: "Satisfaction" },
                    ].map((stat, i) => (
                        <div key={i}>
                            <h3 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                                {stat.number}
                            </h3>

                            <p className="text-gray-400 text-sm">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;