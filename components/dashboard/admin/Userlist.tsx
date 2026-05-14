'use client'
import { motion } from 'framer-motion'
import { AlertCircle, Edit, Eye, Filter, Search } from 'lucide-react';
import { useState } from 'react';

const Userlist = () => {
  const [users] = useState([
    {
      id: 'U001',
      name: 'Ahmed Hassan',
      email: 'ahmed@example.com',
      phone: '+880 1234 567890',
      joined: '2024-01-05',
      bookings: 8,
      status: 'active',
    },
    {
      id: 'U002',
      name: 'Fatima Khan',
      email: 'fatima@example.com',
      phone: '+880 9876 543210',
      joined: '2024-01-10',
      bookings: 3,
      status: 'active',
    },
    {
      id: 'U003',
      name: 'Karim Ahmed',
      email: 'karim@example.com',
      phone: '+880 5555 666666',
      joined: '2023-12-20',
      bookings: 12,
      status: 'active',
    },
    {
      id: 'U004',
      name: 'Nadia Iqbal',
      email: 'nadia@example.com',
      phone: '+880 7777 888888',
      joined: '2023-11-15',
      bookings: 5,
      status: 'blocked',
    },
  ])

  const [searchTerm, setSearchTerm] = useState('')

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header with Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 overflow-x-auto">
        <div className="flex-1 relative">
          <Search size={20} className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
          />
        </div>
        <button className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-semibold flex items-center gap-2 transition-all">
          <Filter size={20} />
          Filter
        </button>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto rounded-lg bg-linear-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-700/50 bg-slate-800/30">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">User ID</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Email</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Phone</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Bookings</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-slate-700/30 hover:bg-slate-800/50 transition-colors"
              >
                <td className="px-6 py-4">
                  <span className="font-semibold text-cyan-400">{user.id}</span>
                </td>
                <td className="px-6 py-4">
                  <p className="font-semibold">{user.name}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-gray-400">{user.email}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm">{user.phone}</p>
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-semibold">
                    {user.bookings}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {user.status === 'active' ? (
                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold">
                      Active
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm font-semibold">
                      Blocked
                    </span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-cyan-400 transition-all" title="View">
                      <Eye size={16} />
                    </button>
                    <button className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-purple-400 transition-all" title="Edit">
                      <Edit size={16} />
                    </button>
                    <button className="p-2 rounded-lg bg-slate-700 hover:bg-red-600 text-red-400 transition-all" title="Block/Unblock">
                      <AlertCircle size={16} />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="my-4 flex items-center justify-between">
        <p className="text-gray-400 text-sm">Showing {filteredUsers.length} of {users.length} users</p>
        <div className="flex gap-2">
          <button className="px-3 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold transition-all">
            Previous
          </button>
          <button className="px-3 py-2 rounded-lg bg-cyan-500/20 border border-cyan-500 text-cyan-400 text-sm font-semibold">
            1
          </button>
          <button className="px-3 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold transition-all">
            Next
          </button>
        </div>
      </div>
    </motion.div>
  )
};

export default Userlist;