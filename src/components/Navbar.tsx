"use client";
import Link from 'next/link';
import { publicNavItems } from '../utilitis/data';
import { useLogout, useMe } from '../hooks/useMe';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, LayoutDashboard, LogOut, Menu, X } from 'lucide-react';
import { IUser } from '../utilitis/all.types';
import { Logo } from './Logo';

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const { data, isLoading } = useMe()
    const { mutate: logout } = useLogout()
    const user = data?.data
    const handleLogout = () => {
        logout()
        setIsDrawerOpen(false)
    }

    return (
        <>
            <nav className="w-full shadow text-white sticky top-0 z-30">
                <div className="container mx-auto flex h-16 items-center justify-between backdrop-blur-lg">

                    {/* LOGO */}
                    <Logo />

                    {/* DESKTOP NAV */}
                    <div className="hidden gap-6 md:flex">
                        {publicNavItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm transition-colors hover:text-gray-300"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* RIGHT SIDE - DESKTOP */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* LOADING STATE */}
                        {isLoading ? (
                            <p className="text-sm text-gray-400">Loading...</p>
                        ) : user ? (
                            <UserDropdown user={user} logout={logout} />
                        ) : (
                            <div className="flex items-center gap-3">
                                <Link href="/book-now" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 group text-sm">
                                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </span>
                                    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </span>
                                    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Take A Slot</span>
                                </Link>

                                <Link href="/signin" className="text-sm px-3 py-1.5 rounded border border-gray-700 transition-colors hover:bg-gray-900">
                                    Sign In
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        onClick={() => setIsDrawerOpen(true)}
                        className="md:hidden p-2 hover:bg-gray-900 rounded-lg transition-colors"
                        aria-label="Open menu"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </nav>

            {/* DRAWER OVERLAY */}
            {isDrawerOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
                    onClick={() => setIsDrawerOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* DRAWER */}
            <div
                className={`fixed top-0 right-0 h-full w-80 bg-black border-l border-gray-800 shadow-2xl z-50 md:hidden transition-transform duration-300 ease-out overflow-y-auto ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* DRAWER HEADER */}
                <div className="flex items-center justify-between h-16 px-4 border-b border-gray-800">
                    <div className='flex items-center justify-start'>
                        <Logo />
                        <span className="bg-linear-to-r from-red-500 via-orange-400 to-pink-400 bg-clip-text text-xl font-bold text-transparent sm:inline">
                            The Plays
                        </span>
                    </div>

                    <button
                        onClick={() => setIsDrawerOpen(false)}
                        className="p-2 hover:bg-gray-900 rounded-lg transition-colors"
                        aria-label="Close menu"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* DRAWER CONTENT */}
                <div className="p-4 space-y-1">
                    {/* NAV ITEMS */}
                    <div className="space-y-2 pb-4 border-b border-gray-800">
                        {publicNavItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsDrawerOpen(false)}
                                className="block px-3 py-2.5 rounded text-sm transition-colors hover:bg-gray-900"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* USER SECTION */}
                    <div className="pt-4 space-y-2">
                        {isLoading ? (
                            <p className="px-3 py-2.5 text-sm text-gray-400">Loading...</p>
                        ) : user ? (
                            <>
                                {/* USER INFO */}
                                <div className="px-3 py-3 rounded bg-gray-900/50 border border-gray-800 mb-3">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Image
                                            src={user.image || "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"}
                                            alt={user.name}
                                            width={40}
                                            height={40}
                                            className="rounded-full"
                                        />
                                        <div className="min-w-0">
                                            <p className="text-sm font-medium truncate">{user.name}</p>
                                            <p className="text-xs text-gray-400 truncate">{user.email}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* USER ACTIONS */}
                                <Link
                                    href={`/dashboard`}
                                    onClick={() => setIsDrawerOpen(false)}
                                    className="flex items-center gap-3 px-3 py-2.5 rounded text-sm transition-colors hover:bg-gray-900"
                                >
                                    <LayoutDashboard size={18} />
                                    Dashboard
                                </Link>

                                <button
                                    onClick={handleLogout}
                                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded text-sm transition-colors hover:bg-gray-900 text-red-400 hover:text-red-300"
                                >
                                    <LogOut size={18} />
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/signin"
                                    onClick={() => setIsDrawerOpen(false)}
                                    className="block px-3 py-2.5 rounded text-sm transition-colors hover:bg-gray-900"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    href="/register"
                                    onClick={() => setIsDrawerOpen(false)}
                                    className="block px-3 py-2.5 rounded text-sm bg-gray-900 transition-colors hover:bg-gray-800"
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

/* USER DROPDOWN (DESKTOP ONLY) */
function UserDropdown({
    user,
    logout,
}: {
    user: IUser
    logout: () => void
}) {
    const [open, setOpen] = useState(false)

    return (
        <div className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-900 transition-colors"
            >
                <Image
                    src={user.image || "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"}
                    alt={user.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                />
                <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-56 border border-gray-800 bg-black rounded-lg shadow-xl p-3 space-y-2">
                    <div className="px-3 py-2 rounded bg-gray-900/50 border border-gray-800 mb-2">
                        <p className="text-sm font-medium">{user.name}</p>
                        <p className="text-xs text-gray-400">{user.email}</p>
                    </div>

                    <Link
                        href={`/dashboard`}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 px-3 py-2 rounded text-sm transition-colors hover:bg-gray-900"
                    >
                        <LayoutDashboard size={16} />
                        Dashboard
                    </Link>

                    <button
                        onClick={() => {
                            logout()
                            setOpen(false)
                        }}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded text-sm transition-colors hover:bg-gray-900 text-red-400 hover:text-red-300"
                    >
                        <LogOut size={16} />
                        Logout
                    </button>
                </div>
            )}
        </div>
    )
};

export default Navbar;