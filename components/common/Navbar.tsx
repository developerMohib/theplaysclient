'use client'

import Link from 'next/link'
import { useState } from 'react'
import { LogOut } from 'lucide-react'
import { AnimatePresence, motion } from "framer-motion"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    //   const { user, logout } = useAuth()

    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com'
    }
    const logout = () => {
        console.log('Logging out...')
    }

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Reviews', href: '/#reviews' },
        { label: 'Contact', href: '/contact' },
    ]

    return (
        <nav className="fixed top-0 left-0 w-full z-50 shadow-[0_4px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group z-60">
                        <div className="w-8 h-8 rounded-xl bg-linear-to-br from-cyan-400 to-purple-500 flex items-center justify-center font-bold text-slate-950 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-400/40">
                            ▶
                        </div>

                        <span className="hidden sm:inline text-xl font-bold bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            The Plays
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 lg:px-7 px-3 py-2 shadow-[0_4px_12px_rgba(0,0,0,0.15)] backdrop-blur-xl">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="relative text-sm font-medium text-gray-300 transition-all duration-300 hover:text-cyan-400 px-7 py-1 rounded-full"
                            >
                                {item.label}

                                <span className="mt-1 block h-0.5 w-0 rounded-full bg-linear-to-r from-cyan-400 to-purple-400 transition-all duration-300 hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Auth */}
                    <div className="hidden md:flex items-center gap-4">
                        {user ? (
                            <>
                                <Link
                                    href="/dashboard/user"
                                    className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                                >
                                    {user.name}
                                </Link>

                                <button
                                    onClick={logout}
                                    className="flex items-center gap-2 rounded-xl bg-linear-to-r from-cyan-500 to-purple-500 px-4 py-2 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/30"
                                >
                                    <LogOut size={16} />
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/auth/login"
                                    className="text-sm font-medium text-gray-300 transition-colors hover:text-cyan-400"
                                >
                                    Login
                                </Link>

                                <Link
                                    href="/auth/register"
                                    className="rounded-xl bg-linear-to-r from-cyan-500 to-purple-500 px-4 py-2 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/30"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => {
                            setIsOpen(!isOpen)

                            if (!isOpen) {
                                document.body.style.overflow = "hidden"
                            } else {
                                document.body.style.overflow = "auto"
                            }
                        }}
                        className="md:hidden z-60 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-900/70 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-slate-800"
                    >
                        <div className="relative h-5 w-5">
                            <span
                                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""
                                    }`}
                            />

                            <span
                                className={`absolute left-0 top-2 h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""
                                    }`}
                            />

                            <span
                                className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""
                                    }`}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={() => {
                                setIsOpen(false)
                                document.body.style.overflow = "auto"
                            }}
                            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                type: "spring",
                                damping: 24,
                                stiffness: 220,
                            }}
                            className="fixed top-0 right-0 z-50 h-screen w-[85%] max-w-sm overflow-y-auto border-l border-cyan-500/10 bg-slate-950/95 p-6 backdrop-blur-2xl md:hidden"
                        >
                            <div className="mt-20 flex flex-col gap-3">
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, x: 40 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: index * 0.06,
                                        }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => {
                                                setIsOpen(false)
                                                document.body.style.overflow = "auto"
                                            }}
                                            className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/3 px-5 py-4 text-gray-300 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
                                        >
                                            <span className="font-medium">
                                                {item.label}
                                            </span>

                                            <span className="translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                                                →
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}

                                <div className="mt-4 border-t border-white/10 pt-5">
                                    {user ? (
                                        <div className="space-y-3">
                                            <Link
                                                href="/dashboard/user"
                                                onClick={() => {
                                                    setIsOpen(false)
                                                    document.body.style.overflow = "auto"
                                                }}
                                                className="block rounded-2xl bg-cyan-500/10 px-5 py-4 text-center font-medium text-cyan-400 transition-all duration-300 hover:bg-cyan-500/20"
                                            >
                                                Dashboard
                                            </Link>

                                            <button
                                                onClick={() => {
                                                    logout()
                                                    setIsOpen(false)
                                                    document.body.style.overflow = "auto"
                                                }}
                                                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-cyan-500 to-purple-500 px-5 py-4 font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-400/20"
                                            >
                                                <LogOut size={18} />
                                                Logout
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="space-y-3">
                                            <Link
                                                href="/auth/login"
                                                onClick={() => {
                                                    setIsOpen(false)
                                                    document.body.style.overflow = "auto"
                                                }}
                                                className="block rounded-2xl border border-white/10 bg-white/3 px-5 py-4 text-center text-gray-300 transition-all duration-300 hover:border-cyan-400/30 hover:text-cyan-400"
                                            >
                                                Login
                                            </Link>

                                            <Link
                                                href="/auth/register"
                                                onClick={() => {
                                                    setIsOpen(false)
                                                    document.body.style.overflow = "auto"
                                                }}
                                                className="block rounded-2xl bg-linear-to-r from-cyan-500 to-purple-500 px-5 py-4 text-center font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-400/20"
                                            >
                                                Register
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    )
}