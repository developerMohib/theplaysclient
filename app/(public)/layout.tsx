
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import ScrollToTopButton from '@/components/common/ScrollToTop';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import React from 'react';

const layoutPublic = async ({ children }: { children: React.ReactNode }) => {


    return (
        <section className='bg-black'>
            <Navbar />
            <main className="container mx-auto">
                {children}
            </main>
            <WhatsAppButton />
            <ScrollToTopButton />

            <Footer />
        </section>
    );
};

export default layoutPublic;