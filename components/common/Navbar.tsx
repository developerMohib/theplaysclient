'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, LayoutDashboard, LogOut } from 'lucide-react'

type NavItem = {
    label: string
    href: string
}

type User = {
    name: string
    email: string
    image: string
    role: string
}

// Navigation items for all users (public)
const publicNavItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Games', href: '/games' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
]

// Navigation items for logged-in users
const privateNavItems: NavItem[] = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'My Games', href: '/my-games' },
    { label: 'Profile', href: '/profile' },
    { label: 'Settings', href: '/settings' },
]

// Mock user state - replace with your actual auth logic
const user: User | null = null // Change to object to test logged-in state
// const user: User | null = {
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     image: 'https://loremflickr.com/g/200/200/girl',
//     role: 'admin',
// }

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const logout = () => {
        console.log('Logging out...')
        // Add your logout logic here
    }

    const closeMobileMenu = () => {
        setIsMenuOpen(false)
    }

    const toggleMobileMenu = () => {
        setIsMenuOpen((prev) => !prev)
    }

    // Determine which nav items to show based on user login state
    const navItems = user ? privateNavItems : publicNavItems

    return (
        <nav className="sticky top-0 left-0 z-50 w-full shadow-[0_4px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl bg-black/75">
            <div className="mx-auto flex h-16 items-center justify-between px-4 container">
                <Logo />

                <DesktopNav navItems={navItems} />

                <div className="hidden items-center gap-4 md:flex">
                    {user ? (
                        <UserDropdown user={user} logout={logout} />
                    ) : (
                        <div className="flex gap-3">
                            <Link
                                href="/signin"
                                className="rounded-full border px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105"
                            >
                                Sign In
                            </Link>
                            <Link
                                href="/register"
                                className="rounded-full border border-cyan-500/50 px-5 py-2 text-sm font-medium text-cyan-400 transition-all duration-300 hover:bg-cyan-500/10 hover:scale-105"
                            >
                                Sign Up
                            </Link>
                        </div>
                    )}
                </div>

                <MobileMenuButton
                    isOpen={isMenuOpen}
                    onClick={toggleMobileMenu}
                />
            </div>

            <MobileDrawer
                isOpen={isMenuOpen}
                closeMenu={closeMobileMenu}
                user={user}
                logout={logout}
                navItems={navItems}
            />
        </nav>
    )
}

// Logo Component - can be used in both desktop and mobile navbars
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

// Desktop Navigation Links - visible on larger screens
function DesktopNav({ navItems }: { navItems: NavItem[] }) {
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

// User Dropdown Menu - visible when user is logged in
function UserDropdown({ user, logout }: { user: User; logout: () => void }) {
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

// Dropdown item component used in the user dropdown menu
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

// Mobile Menu Button - visible on smaller screens
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

// Mobile Drawer Menu - slides in from the right on smaller screens
function MobileDrawer({
    isOpen,
    closeMenu,
    user,
    logout,
    navItems,
}: {
    isOpen: boolean
    closeMenu: () => void
    user: User | null
    logout: () => void
    navItems: NavItem[]
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
                                {user ? (
                                    // Logged-in user view
                                    <>
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
                                                className="block rounded-2xl bg-cyan-500/10 px-5 py-4 text-center font-medium text-cyan-400"
                                            >
                                                Dashboard
                                            </Link>

                                            <button
                                                onClick={() => {
                                                    logout()
                                                    closeMenu()
                                                }}
                                                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-red-500 to-red-600 px-5 py-4 font-medium text-white"
                                            >
                                                <LogOut size={18} />
                                                Logout
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    // Guest user view
                                    <div className="space-y-3">
                                        <Link
                                            href="/signin"
                                            onClick={closeMenu}
                                            className="block rounded-2xl border border-cyan-500/50 px-5 py-4 text-center font-medium text-cyan-400 transition-all duration-300 hover:bg-cyan-500/10 hover:scale-[1.02]"
                                        >
                                            Sign In
                                        </Link>
                                        
                                        <Link
                                            href="/register"
                                            onClick={closeMenu}
                                            className="block rounded-2xl border border-cyan-500/50 px-5 py-4 text-center font-medium text-cyan-400 transition-all duration-300 hover:bg-cyan-500/10 hover:scale-[1.02]"
                                        >
                                            Sign Up
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}