"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import {
   ChevronDown,
   LayoutDashboard,
   LogOut,
   Menu,
   X,
} from 'lucide-react';

import { publicNavItems } from '../utilitis/data';
import { IUser } from '../utilitis/all.types';

import { useLogout, useMe } from '../hooks/useMe';

import { Logo } from './Logo';
import { usePathname } from 'next/navigation';
import NavbarSkeleton from './NavbarSkeleton';

const Navbar = () => {
   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
   const { data, isLoading } = useMe();
   const { mutate: logout } = useLogout();
   const user = data?.data;
   const pathname = usePathname();

   const handleOpenDrawer = () => {
      setIsDrawerOpen(true);
   };
   const handleCloseDrawer = () => {
      setIsDrawerOpen(false);
   };
   const handleLogout = () => {
      logout();
      setIsDrawerOpen(false);
   };
   return (
      <>
         <nav className="sticky top-0 z-30 w-full text-white shadow">
            <div className="container mx-auto flex h-16 items-center justify-between backdrop-blur-lg">
               <Logo />

               {/* DESKTOP NAV */}
               <div className="hidden gap-6 md:flex">
                  {publicNavItems.map(item => (
                     <Link
                        key={item.href}
                        href={item.href}
                        className={`${pathname === item.href ? 'border-b border-red-500' : ' '} text-sm pb-1 hover:text-gray-300 hover:border-b hover:border-red-500`}
                     >
                        {item.label}
                     </Link>
                  ))}
               </div>

               {/* DESKTOP RIGHT */}
               <div className="hidden items-center gap-4 md:flex">
                  {isLoading ? (
                     <NavbarSkeleton />
                  ) : user ? (
                     <UserDropdown
                        user={user}
                        logout={logout}
                     />
                  ) : (
                     <GuestActions />
                  )}
               </div>

               {/* MOBILE MENU BUTTON */}
               <button
                  onClick={handleOpenDrawer}
                  className="rounded-lg p-2 transition-colors hover:bg-gray-900 md:hidden"
                  aria-label="Open menu"
               >
                  <Menu size={24} />
               </button>
            </div>
         </nav>

         {/* OVERLAY */}
         {isDrawerOpen && (
            <div
               className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
               onClick={handleCloseDrawer}
            />
         )}

         {/* MOBILE DRAWER */}
         <MobileDrawer
            user={user}
            isLoading={isLoading}
            isDrawerOpen={isDrawerOpen}
            handleCloseDrawer={handleCloseDrawer}
            handleLogout={handleLogout}
         />
      </>
   );
};

function GuestActions() {
   return (
      <div className="flex items-center gap-3">
         <Link
            href="/take-a-slot"
            className="group relative inline-flex items-center justify-start overflow-hidden rounded py-3 pl-4 pr-12 text-sm transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6"
         >
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
               →
            </span>

            <span className="absolute left-0 -translate-x-12 pl-2.5 duration-200 ease-out group-hover:translate-x-0">
               →
            </span>

            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
               Take A Slot
            </span>
         </Link>

         <Link
            href="/signin"
            className="rounded border border-gray-700 px-3 py-1.5 text-sm transition-colors hover:bg-gray-900"
         >
            Sign In
         </Link>
      </div>
   );
}

function MobileDrawer({
   user,
   isLoading,
   isDrawerOpen,
   handleCloseDrawer,
   handleLogout,
}: {
   user?: IUser;
   isLoading: boolean;
   isDrawerOpen: boolean;
   handleCloseDrawer: () => void;
   handleLogout: () => void;
}) {
   return (
      <div
         className={`fixed right-0 top-0 z-50 h-full w-80 overflow-y-auto border-l border-gray-800 bg-black shadow-2xl transition-transform duration-300 ease-out md:hidden ${
            isDrawerOpen
               ? 'translate-x-0'
               : 'translate-x-full'
         }`}
      >
         {/* HEADER */}
         <div className="flex h-16 items-center justify-between border-b border-gray-800 px-4">
            <div className="flex items-center gap-2">
               <Logo />

               <span className="bg-linear-to-r from-red-500 via-orange-400 to-pink-400 bg-clip-text text-xl font-bold text-transparent">
                  The Plays
               </span>
            </div>

            <button
               onClick={handleCloseDrawer}
               className="rounded-lg p-2 transition-colors hover:bg-gray-900"
            >
               <X size={24} />
            </button>
         </div>

         {/* CONTENT */}
         <div className="space-y-1 p-4">

            {/* NAV ITEMS */}
            <div className="space-y-2 border-b border-gray-800 pb-4">
               {publicNavItems.map(item => (
                  <Link
                     key={item.href}
                     href={item.href}
                     onClick={handleCloseDrawer}
                     className="block rounded px-3 py-2.5 text-sm transition-colors hover:bg-gray-900"
                  >
                     {item.label}
                  </Link>
               ))}
            </div>

            {/* USER SECTION */}
            <div className="space-y-2 pt-4">
               {isLoading ? (
                  <p className="px-3 py-2.5 text-sm text-gray-400">
                     Loading...nav user
                  </p>
               ) : user ? (
                  <>
                     <div className="mb-3 rounded border border-gray-800 px-3 py-3">
                        <div className="flex items-center gap-3">
                           <Image
                              src={user.image?.trim()||'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61'}
                              alt={user.name}
                              width={40}
                              height={40}
                              className="rounded-full"
                           />

                           <div className="min-w-0">
                              <p className="truncate text-sm font-medium">
                                 {user.name}
                              </p>

                              <p className="truncate text-xs text-gray-400">
                                 {user.email}
                              </p>
                           </div>
                        </div>
                     </div>

                     <Link
                        href="/dashboard"
                        onClick={handleCloseDrawer}
                        className="flex items-center gap-3 rounded px-3 py-2.5 text-sm transition-colors hover:bg-gray-900"
                     >
                        <LayoutDashboard size={18} />
                        Dashboard
                     </Link>

                     <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 rounded px-3 py-2.5 text-sm text-red-400 transition-colors hover:bg-gray-900 hover:text-red-300"
                     >
                        <LogOut size={18} />
                        Logout
                     </button>
                  </>
               ) : (
                  <>
                     <Link
                        href="/signin"
                        onClick={handleCloseDrawer}
                        className="block rounded px-3 py-2.5 text-sm transition-colors hover:bg-gray-900"
                     >
                        Sign In
                     </Link>

                     <Link
                        href="/register"
                        onClick={handleCloseDrawer}
                        className="block rounded bg-gray-900 px-3 py-2.5 text-sm transition-colors hover:bg-gray-800"
                     >
                        Sign Up
                     </Link>
                  </>
               )}
            </div>
         </div>
      </div>
   );
}

function UserDropdown({
   user,
   logout,
}: {
   user: IUser;
   logout: () => void;
}) {
   const [open, setOpen] = useState(false);

   return (
      <div className="relative">
         <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 p-1.5"
         >
            <Image src={user.image?.trim() ||'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61'}
               alt={user.name}
               width={32}
               height={32}
               className="rounded-full"
            />

            <ChevronDown
               size={16}
               className={`transition-transform ${
                  open ? 'rotate-180' : ''
               }`}
            />
         </button>

         {open && (
            <div className="absolute right-0 mt-2 w-56 space-y-2 rounded-lg border border-gray-800 bg-black p-3 shadow-xl">
               <div className="mb-2 rounded border border-gray-800 bg-gray-900/50 px-3 py-2">
                  <p className="text-sm font-medium">
                     {user.name}
                  </p>

                  <p className="text-xs text-gray-400">
                     {user.email}
                  </p>
               </div>

               <Link
                  href="/dashboard"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded px-3 py-2 text-sm transition-colors hover:bg-gray-900"
               >
                  <LayoutDashboard size={16} />
                  Dashboard
               </Link>

               <button
                  onClick={() => {
                     logout();
                     setOpen(false);
                  }}
                  className="flex w-full items-center gap-3 rounded px-3 py-2 text-sm text-red-400 transition-colors hover:bg-gray-900 hover:text-red-300"
               >
                  <LogOut size={16} />
                  Logout
               </button>
            </div>
         )}
      </div>
   );
}

export default Navbar;