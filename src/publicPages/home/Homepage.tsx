"use client"
import BoookingSlot from '@/src/components/homeComp/BookingSlot';
import CalltoAction from '@/src/components/homeComp/CalltoAction';
import HeroBanner from '@/src/components/homeComp/HeroBanner';
import Howtobooks from '@/src/components/homeComp/Howtobooks';
import Populargames from '@/src/components/homeComp/Populargames';
import Pricing from '@/src/components/homeComp/Pricing';
import Reviews from '@/src/components/homeComp/Reviews';
import ServicesSection from '@/src/components/homeComp/ServicesSection';

const Homepage = () => {
    return (
        <main>
            <HeroBanner />
            <Populargames />
            <BoookingSlot />
            <Howtobooks />
            <ServicesSection />
            <Pricing />
            <Reviews />
            <CalltoAction />
        </main>
    );
};

export default Homepage;