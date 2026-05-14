'use client'

import { motion } from 'framer-motion'
import { Download, Edit, Eye, Filter, Search, Trash2 } from 'lucide-react';
import { useState } from 'react';
const BookingList = () => {
   const [bookings] = useState([
    {
      id: 'BK001',
      user: 'Ahmed Hassan',
      date: '2024-01-20',
      time: '14:00 - 15:00',
      package: 'Starter Ride',
      amount: '1,500 ৳',
      status: 'booked',
      payment: 'paid',
    },
    {
      id: 'BK002',
      user: 'Fatima Khan',
      date: '2024-01-22',
      time: '10:00 - 12:00',
      package: 'Street Racer',
      amount: '2,800 ৳',
      status: 'pending',
      payment: 'pending',
    },
    {
      id: 'BK003',
      user: 'Karim Ahmed',
      date: '2024-01-25',
      time: '16:00 - 20:00',
      package: 'Pro Driver',
      amount: '5,000 ৳',
      status: 'booked',
      payment: 'paid',
    },
    {
      id: 'BK004',
      user: 'Nadia Iqbal',
      date: '2024-02-01',
      time: '09:00 - 10:00',
      package: 'Starter Ride',
      amount: '1,500 ৳',
      status: 'completed',
      payment: 'paid',
    },
  ])

  const [searchTerm, setSearchTerm] = useState('')

  const filteredBookings = bookings.filter(
    (b) =>
      b.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.user.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header with Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search size={20} className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search by ID or customer name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
          />
        </div>
        <button className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-semibold flex items-center gap-2 transition-all">
          <Filter size={20} />
          Filter
        </button>
        <button className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-semibold flex items-center gap-2 transition-all">
          <Download size={20} />
          Export
        </button>
      </div>

      {/* Bookings Table */}
      <div className="overflow-x-auto rounded-lg bg-linear-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700/50 bg-slate-800/30">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Booking ID</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Customer</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Date & Time</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Package</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Payment</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((booking, index) => (
              <motion.tr
                key={booking.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-slate-700/30 hover:bg-slate-800/50 transition-colors"
              >
                <td className="px-6 py-4">
                  <span className="font-semibold text-cyan-400">{booking.id}</span>
                </td>
                <td className="px-6 py-4">
                  <p className="font-semibold">{booking.user}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-gray-400">{booking.date}</p>
                  <p className="text-sm font-semibold">{booking.time}</p>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm">{booking.package}</span>
                </td>
                <td className="px-6 py-4">
                  <StatusBadge status={booking.status} />
                </td>
                <td className="px-6 py-4">
                  <PaymentBadge payment={booking.payment} />
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-cyan-400 transition-all" title="View">
                      <Eye size={16} />
                    </button>
                    <button className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-purple-400 transition-all" title="Edit">
                      <Edit size={16} />
                    </button>
                    <button className="p-2 rounded-lg bg-slate-700 hover:bg-red-600 text-red-400 transition-all" title="Delete">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between">
        <p className="text-gray-400 text-sm">Showing {filteredBookings.length} of {bookings.length} bookings</p>
        <div className="flex gap-2">
          <button className="px-3 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold transition-all">
            Previous
          </button>
          <button className="px-3 py-2 rounded-lg bg-cyan-500/20 border border-cyan-500 text-cyan-400 text-sm font-semibold">
            1
          </button>
          <button className="px-3 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold transition-all">
            2
          </button>
          <button className="px-3 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold transition-all">
            Next
          </button>
        </div>
      </div>
    </motion.div>
  )
};

export default BookingList;

function PaymentBadge({ payment }: { payment: string }) {
  const config = payment === 'paid'
    ? { bg: 'bg-green-500/20', text: 'text-green-400' }
    : { bg: 'bg-yellow-500/20', text: 'text-yellow-400' }

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${config.bg} ${config.text}`}>
      {payment === 'paid' ? 'Paid' : 'Pending'}
    </span>
  )
}

function StatusBadge({ status }: { status: string }) {
  const statusConfig: Record<string, { bg: string; text: string;}> = {
    booked: { bg: 'bg-green-500/20', text: 'text-green-400' },
    pending: { bg: 'bg-yellow-500/20', text: 'text-yellow-400' },
    completed: { bg: 'bg-blue-500/20', text: 'text-blue-400' },
    cancelled: { bg: 'bg-red-500/20', text: 'text-red-400' },
  }

  const config = statusConfig[status] || statusConfig.pending

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${config.bg} ${config.text}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  )
}

