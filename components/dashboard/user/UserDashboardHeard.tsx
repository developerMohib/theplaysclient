"use client"
import Image from 'next/image';
import { motion } from 'framer-motion'
import { IUser } from './UserDashboard';

const UserDashboardHeader = ({ user }: { user: IUser }) => {
    return (
        <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 flex items-center justify-between"
    >
      <div>
        <h1 className="text-3xl font-bold text-white">
          Welcome, {user.name}
        </h1>
        <p className="text-gray-400">Manage your bookings</p>
      </div>

      <Image
        src={user?.image || 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61'}
        alt="user"
        width={48}
        height={48}
        className="rounded-full"
      />
    </motion.div>
    );
};

export default UserDashboardHeader;