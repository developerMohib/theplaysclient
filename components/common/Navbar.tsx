'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, LayoutDashboard, LogOut } from 'lucide-react'

type NavItem = {
    label: string
    href: string
}

const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Reviews', href: '/#reviews' },
    { label: 'Contact', href: '/contact' },
]

const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    image: 'https://loremflickr.com/g/200/200/girl',
    role: 'user',
}

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const closeMobileMenu = () => {
        setIsMenuOpen(false)
        document.body.style.overflow = 'auto'
    }

    const toggleMobileMenu = () => {
        const next = !isMenuOpen

        setIsMenuOpen(next)
        document.body.style.overflow = next ? 'hidden' : 'auto'
    }

    const logout = () => {
        console.log('Logging out...')
    }

    useEffect(() => {
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

    return (
        <nav className="sticky top-0 left-0 z-50 w-full shadow-[0_4px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl bg-black/75">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Logo />

                <DesktopNav />

                <div className="hidden items-center gap-4 md:flex">
                    <UserDropdown logout={logout} />
                </div>

                <MobileMenuButton
                    isOpen={isMenuOpen}
                    onClick={toggleMobileMenu}
                />
            </div>

            <MobileDrawer
                isOpen={isMenuOpen}
                closeMenu={closeMobileMenu}
                logout={logout}
            />
        </nav>
    )
}

/* -------------------------------------------------------------------------- */
/*                                   LOGO                                     */
/* -------------------------------------------------------------------------- */

export function Logo() {
    return (
        <Link href="/" className="group z-60 flex items-center gap-2">
            <div className="flex items-center justify-center rounded-xl">
                <Image
                    width={40}
                    height={40}
                    src="/logo-the-plays.png"
                    alt="The Plays Logo"
                />
            </div>

            <span className="hidden bg-linear-to-r from-red-500 via-orange-400 to-pink-400 bg-clip-text text-xl font-bold text-transparent sm:inline">
                The Plays
            </span>
        </Link>
    )
}

/* -------------------------------------------------------------------------- */
/*                              DESKTOP NAVBAR                                */
/* -------------------------------------------------------------------------- */

function DesktopNav() {
    return (
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 shadow-[0_4px_12px_rgba(0,0,0,0.15)] backdrop-blur-xl lg:flex lg:px-7">
            {navItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className="relative rounded-full px-7 py-1 text-sm font-medium text-gray-300 transition-all duration-300 hover:text-cyan-400"
                >
                    {item.label}

                    <span className="mt-1 block h-0.5 w-0 rounded-full bg-linear-to-r from-cyan-400 to-purple-400 transition-all duration-300 hover:w-full" />
                </Link>
            ))}
        </div>
    )
}

/* -------------------------------------------------------------------------- */
/*                              USER DROPDOWN                                 */
/* -------------------------------------------------------------------------- */

function UserDropdown({ logout }: { logout: () => void }) {
    const [open, setOpen] = useState(false)

    return (
        <div className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2"
            >
                <div className="h-10 w-10 overflow-hidden rounded-full ring-2 ring-gray-700">
                    <Image
                        width={40}
                        height={40}
                        src={user.image}
                        alt={user.name}
                        className="h-full w-full object-cover"
                    />
                </div>

                <ChevronDown
                    size={18}
                    className={`text-gray-300 transition-transform duration-300 ${open ? 'rotate-180' : ''
                        }`}
                />
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 top-14 w-64 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 p-2 shadow-2xl backdrop-blur-2xl"
                    >
                        <div className="border-b border-white/10 px-4 py-3">
                            <p className="font-medium text-white">
                                {user.name}
                            </p>

                            <p className="truncate text-sm text-gray-400">
                                {user.email}
                            </p>
                        </div>

                        <div className="mt-2 space-y-1">
                            <DropdownItem
                                href={`/dashboard/${user.role}`}
                                icon={<LayoutDashboard size={18} />}
                                label="Dashboard"
                            />

                            <button
                                onClick={logout}
                                className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-gray-300 transition-all duration-300 hover:bg-red-500/10 hover:text-red-400"
                            >
                                <LogOut size={18} />
                                Logout
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

function DropdownItem({
    href,
    icon,
    label,
}: {
    href: string
    icon: React.ReactNode
    label: string
}) {
    return (
        <Link
            href={href}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-300 transition-all duration-300 hover:bg-cyan-500/10 hover:text-cyan-400"
        >
            {icon}
            {label}
        </Link>
    )
}

/* -------------------------------------------------------------------------- */
/*                            MOBILE MENU BUTTON                              */
/* -------------------------------------------------------------------------- */

function MobileMenuButton({
    isOpen,
    onClick,
}: {
    isOpen: boolean
    onClick: () => void
}) {
    return (
        <button
            onClick={onClick}
            className="z-60 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-slate-900/70 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-slate-800 md:hidden"
        >
            <div className="relative h-5 w-5">
                <span
                    className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''
                        }`}
                />

                <span
                    className={`absolute left-0 top-2 h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''
                        }`}
                />

                <span
                    className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''
                        }`}
                />
            </div>
        </button>
    )
}

/* -------------------------------------------------------------------------- */
/*                               MOBILE DRAWER                                */
/* -------------------------------------------------------------------------- */

function MobileDrawer({
    isOpen,
    closeMenu,
    logout,
}: {
    isOpen: boolean
    closeMenu: () => void
    logout: () => void
}) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={closeMenu}
                        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
                    />

                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{
                            type: 'spring',
                            damping: 24,
                            stiffness: 220,
                        }}
                        className="fixed top-0 right-0 z-50 h-screen w-[85%] max-w-sm overflow-y-auto border-l border-cyan-500/10 bg-slate-950/95 p-6 backdrop-blur-2xl md:hidden"
                    >
                        <div className="mt-10 flex flex-col gap-3">
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
                                        onClick={closeMenu}
                                        className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/3 px-4 py-3 text-gray-300 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
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
                                <div className="mb-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <div className="h-12 w-12 overflow-hidden rounded-full">
                                        <Image
                                            width={48}
                                            height={48}
                                            src={user.image}
                                            alt={user.name}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>

                                    <div>
                                        <h4 className="font-medium text-white">
                                            {user.name}
                                        </h4>

                                        <p className="text-sm text-gray-400">
                                            {user.email}
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <Link
                                      href={`/dashboard/${user.role}`}
                                        onClick={closeMenu}
                                        className="block rounded-2xl bg-cyan-500/10 px-5 py-4 text-center font-medium text-cyan-400 transition-all duration-300 hover:bg-cyan-500/20"
                                    >
                                        Dashboard
                                    </Link>

                                    <button
                                        onClick={() => {
                                            logout()
                                            closeMenu()
                                        }}
                                        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-cyan-500 to-purple-500 px-5 py-4 font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-400/20"
                                    >
                                        <LogOut size={18} />
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}