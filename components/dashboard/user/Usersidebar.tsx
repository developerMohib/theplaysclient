'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Calendar,
  User,
} from 'lucide-react'

const menu = [
  { name: 'Overview', path: '/dashboard/user', icon: LayoutDashboard },
  { name: 'Bookings', path: '/dashboard/mybookings', icon: Calendar },
  { name: 'Profile', path: '/dashboard/profile', icon: User },
]

export default function Usersidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 fixed left-0 top-0 h-full bg-slate-900 border-r border-slate-800 p-4">
      <h1 className="text-xl font-bold mb-6 text-cyan-400">
        User Panel
      </h1>

      <nav className="space-y-2">
        {menu.map((item) => {
          const Icon = item.icon
          const active = pathname === item.path

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                active
                  ? 'bg-cyan-500/20 text-cyan-400'
                  : 'hover:bg-slate-800 text-gray-300'
              }`}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}