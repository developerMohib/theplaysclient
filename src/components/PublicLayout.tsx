"use client";

import React from 'react';
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';

import { useMe } from '../hooks/useMe';

import SidebarNavItem from './dashboardComp/SidbarNavItem';
import HeaderItems from './dashboardComp/HeardItems';

const PublicLayout = ({
   children,
}: {
   children: React.ReactNode;
}) => {
   // const router = useRouter();

   const { data, isLoading } = useMe();

   // wait until request finishes
   // useEffect(() => {
   //    if (!isLoading && !data?.success) {
   //       router.push('/signin');
   //    }
   // }, [data, isLoading, router]);

   if (isLoading) {
      return <p>Loading...public layout</p>;
   }

   // prevent layout flicker
   if (!data?.success) {
      return null;
   }

   return (
      <div className="flex h-screen">
         <SidebarNavItem />

         <div className="flex flex-1 flex-col">
            <HeaderItems />

            <main className="overflow-y-auto p-4">
               {children}
            </main>
         </div>
      </div>
   );
};

export default PublicLayout;