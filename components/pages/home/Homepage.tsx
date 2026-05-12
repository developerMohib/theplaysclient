"use client"

import { motion } from 'framer-motion'
import Link from "next/link";
import BookingSection from "./Bookingsection";
import HeroSection from "./HeroSection";
import HowItWorks from "./Howtowork";
import PricingSection from "./Pricingsection";
import ReviewsSection from "./ReviewSection";
import ServicesSection from "./ServiceSection";
import AdvancedBookingSection from './SlotBooking';
import GameListSection from './GameListSection';

const Homepage = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Game List Section */}
      <GameListSection />

      {/* Advanced Booking Section */}
      <AdvancedBookingSection />

      {/* How Booking Works */}
      <HowItWorks />

      {/* Services Section */}
      <ServicesSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Booking Section */}
      <BookingSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  )
};
function CTASection() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com'
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-black">
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Feel the Rush?
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Join thousands of drivers whove experienced the ultimate driving simulator
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {user ? (
              <Link
                href="/dashboard/user"
                className="px-8 py-3 rounded-lg bg-linear-to-r from-cyan-500 to-purple-500 text-white font-semibold transition-all duration-300"
              >
                Go to Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href="/auth/register"
                  className="px-8 py-3 rounded-lg bg-linear-to-r from-cyan-500 to-purple-500 text-white font-semibold transition-all duration-300"
                >
                  Start Booking Now
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3 rounded-lg border border-cyan-400/50 text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Homepage;