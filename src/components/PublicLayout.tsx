"use client";

import React from 'react';
import { redirect } from 'next/navigation';
import { useMe } from '../hooks/useMe';
import SidebarNavItem from './dashboardComp/SidbarNavItem';
import HeaderItems from './dashboardComp/HeardItems';

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    const { data, isLoading } = useMe();
    console.log('public layout',data)

      if (!data) {
        redirect('/signin')
         
    };

    if (isLoading) return <p>Loading...user public layout</p>;
  
    return (
        <div className="flex h-screen">
            <SidebarNavItem />
            <div className="flex-1 flex flex-col">
                <HeaderItems />
                <main className="p-4 overflow-y-auto">{children}</main>
            </div>
        </div>
    );
};

export default PublicLayout;