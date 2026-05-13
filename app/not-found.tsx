"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Gamepad2, Home, RotateCcw } from 'lucide-react'

const NotFoundPage = () => {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 text-white">
            {/* BACKGROUND GLOW */}

            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                    }}
                    className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-3xl"
                />
            </div>

            {/* CONTENT */}

            <div className="relative z-10 mx-auto max-w-2xl text-center">
                {/* ICON */}

                <motion.div
                    initial={{
                        scale: 0,
                        rotate: -180,
                    }}
                    animate={{
                        scale: 1,
                        rotate: 0,
                    }}
                    transition={{
                        duration: 0.8,
                        type: 'spring',
                    }}
                    className="mb-8 flex justify-center"
                >
                    <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-xl">
                        <Gamepad2 className="h-14 w-14 text-cyan-400" />
                    </div>
                </motion.div>

                {/* 404 */}

                <motion.h1
                    initial={{
                        opacity: 0,
                        y: -50,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 0.2,
                        duration: 0.7,
                    }}
                    className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-8xl font-black text-transparent md:text-[10rem]"
                >
                    404
                </motion.h1>

                {/* TITLE */}

                <motion.h2
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 0.4,
                        duration: 0.7,
                    }}
                    className="mt-4 text-3xl font-bold md:text-5xl"
                >
                    Game Over!
                </motion.h2>

                {/* DESCRIPTION */}

                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0.6,
                        duration: 0.8,
                    }}
                    className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-400"
                >
                    The page you&apos;re looking for
                    doesn&apos;t exist or may have been
                    moved to another server.
                </motion.p>

                {/* BUTTONS */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 0.8,
                        duration: 0.7,
                    }}
                    className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <Link
                        href="/"
                        className="flex items-center gap-2 rounded-2xl bg-cyan-500 px-6 py-4 font-bold text-black transition hover:bg-cyan-400"
                    >
                        <Home size={20} />
                        Back Home
                    </Link>

                    <button
                        onClick={() =>
                            window.history.back()
                        }
                        className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-bold transition hover:bg-white/10"
                    >
                        <RotateCcw size={20} />
                        Go Back
                    </button>
                </motion.div>

                {/* FLOATING PARTICLES */}

                <motion.div
                    animate={{
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                    }}
                    className="absolute -left-10 top-10 h-4 w-4 rounded-full bg-cyan-400"
                />

                <motion.div
                    animate={{
                        y: [0, 20, 0],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                    }}
                    className="absolute -right-5 bottom-20 h-6 w-6 rounded-full bg-blue-500"
                />
            </div>
        </section>
    )
}

export default NotFoundPage