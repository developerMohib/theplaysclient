'use client'

import Link from 'next/link'
import {ChevronDown } from 'lucide-react'
import LinkButton from '../LinkButton';
const HeroBanner = () => {
    return (
        <section className="relative overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
            >
                <source
                    src="https://res.cloudinary.com/dnfjdkspi/video/upload/v1778445011/car_driving_ycpbv1.mp4"
                    type="video/mp4"
                />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Content */}
            <div className="relative z-10 mx-auto flex flex-col items-center justify-center px-4 text-center py-28">
                <span className="mb-5 rounded-full border border-cyan-400/30 bg-white/10 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur">
                    🏁 Premium Driving Experience
                </span>

                <h1 className="mb-6 text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    Feel The{' '}
                    <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        Ultimate
                    </span>
                    <br />
                    Racing Simulator
                </h1>

                <p className="mb-10 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
                    Experience next-level racing with professional steering wheels,
                    immersive visuals, realistic physics, and adrenaline-pumping gameplay.
                </p>

                {/* Buttons */}
                <div className="mb-14 flex flex-col gap-4 sm:flex-row">
                    <LinkButton href='/book-now' text="Take Your Slot" />

                    <Link
                        href="#how-it-works"
                        className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-lg font-semibold text-white backdrop-blur transition hover:bg-white/20"
                    >
                        Explore Packages
                    </Link>
                </div>

                {/* Stats */}
                <div className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
                    {[
                        { number: '10K+', label: 'Happy Drivers' },
                        { number: '500+', label: 'Hours Booked' },
                        { number: '4.9★', label: 'Customer Rating' },
                    ].map((stat, i) => (
                        <div
                            key={i}
                            className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur"
                        >
                            <h3 className="text-3xl font-bold text-cyan-400">
                                {stat.number}
                            </h3>

                            <p className="mt-2 text-sm text-gray-300">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Scroll Icon */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                    <div className="rounded-full border border-cyan-400/30 bg-white/10 p-2 backdrop-blur animate-bounce">
                        <ChevronDown className="text-cyan-300" size={28} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;