'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

import Link from 'next/link'

type ActiveTab = 'bookings' | 'profile'

type User = {
    name: string
    email: string
    role: string
    image?: string
    phone?: string
}

export default function UserDashboard() {
    const user: User | null = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'user',
        image: '👤',
    }

    const [activeTab, setActiveTab] =
        useState<ActiveTab>('bookings')

    if (!user) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-black px-4 pt-24 text-white">
                <div className="text-center">
                    <h1 className="mb-3 text-3xl font-bold">
                        Please Log In
                    </h1>
                    <p className="mb-6 text-gray-400">
                        You need login to access dashboard
                    </p>

                    <Link
                        href="/login"
                        className="rounded-xl bg-white px-6 py-3 font-bold text-black"
                    >
                        Go to Login
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-black px-4 pt-24 pb-20 text-white">
            <div className="mx-auto max-w-7xl">
                <DashboardHeader user={user} />

                <NavigationTabs
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />

                <div className="mt-8">
                    {activeTab === 'bookings' && (
                        <BookingsTab />
                    )}
                    {activeTab === 'profile' && (
                        <ProfileTab user={user} />
                    )}
                </div>
            </div>
        </div>
    )
}

/* ================= HEADER ================= */

function DashboardHeader({ user }: { user: User }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
        >
            <h1 className="text-4xl font-bold">
                Welcome, {user.name}
            </h1>
            <p className="text-gray-400">
                Manage your bookings
            </p>
        </motion.div>
    )
}

/* ================= TABS ================= */

function NavigationTabs({
    activeTab,
    setActiveTab,
}: {
    activeTab: ActiveTab
    setActiveTab: (tab: ActiveTab) => void
}) {
    const tabs = [
        { id: 'bookings', label: 'Bookings' },
        { id: 'profile', label: 'Profile' },
    ] as const

    return (
        <div className="flex gap-3 border-b border-white/10 pb-3">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() =>
                        setActiveTab(tab.id)
                    }
                    className={`rounded-xl px-5 py-2 font-semibold transition ${
                        activeTab === tab.id
                            ? 'bg-white text-black'
                            : 'text-white hover:bg-white/10'
                    }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    )
}

/* ================= BOOKINGS (TABLE VERSION) ================= */

function BookingsTab() {
    const bookings = [
        {
            id: '1',
            game: 'FC26',
            date: '2026-05-20',
            time: '10 AM - 11 AM',
            price: 150,
            status: 'confirmed',
        },
        {
            id: '2',
            game: 'GTA V',
            date: '2026-05-25',
            time: '2 PM - 3 PM',
            price: 200,
            status: 'pending',
        },
    ]

    const columns = [
        { key: 'game', header: 'Game' },
        {
            key: 'date',
            header: 'Date',
            render: (item: any) =>
                new Date(item.date).toLocaleDateString(),
        },
        { key: 'time', header: 'Time' },
        {
            key: 'status',
            header: 'Status',
            render: (item: any) => (
                <span
                    className={`rounded-full px-3 py-1 text-xs ${
                        item.status === 'confirmed'
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-yellow-500/20 text-yellow-400'
                    }`}
                >
                    {item.status}
                </span>
            ),
        },
        {
            key: 'price',
            header: 'Price',
            render: (item: any) =>
                `${item.price} BDT`,
        },
    ]

    return (
            <div className="mb-5 ">
              
            <Table data={bookings} columns={columns} />
        </div>
    )
}

/* ================= PROFILE ================= */

function ProfileTab({ user }: { user: User }) {
    const [form, setForm] = useState({
        name: user.name,
        email: user.email,
        phone: user.phone || '',
    })

    return (
        <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 p-6">
                <h3 className="mb-4 text-xl font-bold">
                    Profile
                </h3>

                <input
                    className="mb-3 w-full rounded-xl border border-white/10 bg-black px-4 py-3"
                    value={form.name}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            name: e.target.value,
                        })
                    }
                />

                <input
                    className="mb-3 w-full rounded-xl border border-white/10 bg-black px-4 py-3"
                    value={form.email}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            email: e.target.value,
                        })
                    }
                />

                <input
                    className="w-full rounded-xl border border-white/10 bg-black px-4 py-3"
                    value={form.phone}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            phone: e.target.value,
                        })
                    }
                />

                <button className="mt-4 rounded-xl bg-white px-6 py-3 font-bold text-black">
                    Save
                </button>
            </div>
        </div>
    )
}

import { ReactNode } from 'react'

type Column<T> = {
    key: string
    header: string
    render?: (item: T) => ReactNode
}

type TableProps<T> = {
    data: T[]
    columns: Column<T>[]
}

export function Table<T extends { id: string | number }>({
    data,
    columns,
}: TableProps<T>) {
    return (
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-black">
            <table className="w-full text-left text-white">
                <thead className="border-b border-white/10 bg-white/5">
                    <tr>
                        {columns.map((col) => (
                            <th
                                key={col.key}
                                className="px-4 py-3 text-sm font-semibold text-gray-300"
                            >
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.map((item) => (
                        <tr
                            key={item.id}
                            className="border-b border-white/5 hover:bg-white/5"
                        >
                            {columns.map((col) => (
                                <td
                                    key={col.key}
                                    className="px-4 py-3 text-sm text-white"
                                >
                                    {col.render
                                        ? col.render(item)
                                        : (item as any)[col.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}