"use client"

import Link from "next/link";

const CalltoAction = () => {
    const user = null

    return (
        <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    <span className="bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Ready to Feel the Rush?
                    </span>
                </h2>

                {/* Description */}
                <p className="text-gray-400 text-lg mb-8">
                    Join thousands of drivers who&apos;ve experienced the ultimate
                    driving simulator
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    {user ? (
                        <Link
                            href="/dashboard/user"
                            className="px-8 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition"
                        >
                            Go to Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href="/auth/register"
                                className="px-8 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition"
                            >
                                Start Booking Now
                            </Link>

                            <Link
                                href="/contact"
                                className="px-8 py-3 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-semibold transition"
                            >
                                Contact Us
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CalltoAction;