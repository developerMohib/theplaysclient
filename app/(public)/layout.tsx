import Footer from '@/src/components/Footer';
import Navbar from '@/src/components/Navbar';
import React from 'react';
import { Slide, ToastContainer } from 'react-toastify';

const layoutPublic = async ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="container mx-auto px-4">
            <Navbar />
            <main className='px-2'>
                {children}
            </main>
            <Footer />
            <ToastContainer transition={Slide} autoClose={2500} hideProgressBar />
        </section>
    );
};

export default layoutPublic;