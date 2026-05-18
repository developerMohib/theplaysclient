'use client'

import Link from 'next/link'
import { useMe } from '@/src/hooks/useMe'
import UserDashboardHeader from './UserDashboardHeard'
export interface IUser{
  name: string;
  email: string;
  role: string;
  image?: string | null;
}
export default function UserDashboard() {
  const user: IUser = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'user',
    image:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61',
  }

  const { data } = useMe()
  console.log('User Data:', data)

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Please Log In</h1>
          <p className="mt-2 text-gray-400">
            You need to login to access dashboard
          </p>

          <Link
            href="/signin"
            className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-bold text-black"
          >
            Go to Login
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4">
      <UserDashboardHeader user={user} />
      <BookingsTable />
    </div>
  )
}


/* ================= TABLE ================= */

function BookingsTable() {
  const bookings = [
    {
      id: 1,
      game: 'FC26',
      date: '2026-05-20',
      time: '10 AM - 11 AM',
      price: 150,
      status: 'confirmed',
    },
    {
      id: 2,
      game: 'GTA V',
      date: '2026-05-25',
      time: '2 PM - 3 PM',
      price: 200,
      status: 'pending',
    },
  ]

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <table className="w-full text-left text-white">
        <thead className="bg-white/5 text-gray-300">
          <tr>
            <th className="p-4">Game</th>
            <th className="p-4">Date</th>
            <th className="p-4">Time</th>
            <th className="p-4">Status</th>
            <th className="p-4">Price</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((b) => (
            <tr
              key={b.id}
              className="border-t border-white/10 hover:bg-white/5"
            >
              <td className="p-4">{b.game}</td>
              <td className="p-4">
                {new Date(b.date).toLocaleDateString()}
              </td>
              <td className="p-4">{b.time}</td>
              <td className="p-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs ${
                    b.status === 'confirmed'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}
                >
                  {b.status}
                </span>
              </td>
              <td className="p-4">{b.price} BDT</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}