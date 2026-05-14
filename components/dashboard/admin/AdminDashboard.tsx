'use client'

import Link from 'next/link'
import Userlist from './Userlist'
import BookingList from './BookingList'
import Reviews from './Reviews'

export default function AdminDashboard() {
    const user = {
        name: 'John Doe',
        email: 'ha@gami.com',
        role: 'admin',
    }

    // Redirect if not admin
    if (!user || user.role !== 'admin') {
        return (
            <div className="min-h-screen bg-linear-to-b from-slate-950 to-slate-900 flex items-center justify-center pt-24">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-white mb-4">Access Denied</h1>
                    <p className="text-gray-400 mb-6">You need admin privileges to access this dashboard</p>
                    <Link
                        href="/"
                        className="px-6 py-3 rounded-lg bg-linear-to-r from-cyan-500 to-purple-500 text-white font-bold hover:shadow-lg hover:shadow-cyan-400/50 transition-all"
                    >
                        Go to Home
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div >
            <BookingList />
            <Userlist />
            <Reviews />
        </div>
    )
}
