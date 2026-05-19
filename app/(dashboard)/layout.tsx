import React from 'react';
import PublicLayout from '@/src/components/PublicLayout';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Slide, ToastContainer } from 'react-toastify';

const layoutDashboard = async ({ children }: { children: React.ReactNode }) => {

const token  = ((await cookies()).get("token"))
console.log(token)
if(!token){
    redirect('/signin')
}
    return (
        <PublicLayout>
            {children}
            <ToastContainer transition={Slide} autoClose={2500} hideProgressBar />
        </PublicLayout>
    );
};

export default layoutDashboard;