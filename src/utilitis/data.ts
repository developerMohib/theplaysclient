import {
  Calendar,
  CheckCircle,
  Clock,
  CreditCard,
  Gamepad2,
  Joystick,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import { NavItem } from "./all.types";

export const publicNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Games", href: "/games" },
  { label: "Packages", href: "/packages" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const userPrivateNavItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "My Games", href: "/my-games" },
  { label: "Profile", href: "/profile" },
  { label: "My Bookings", href: "/bookings" },
];
export const adminPrivateNavItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Users", href: "/users" },
  { label: "All Bookings", href: "/bookings" },
  { label: "Profile", href: "/profile" },
];

export const steps = [
  {
    icon: Calendar,
    number: 1,
    title: "Select Date",
    description: "Choose your preferred date from our interactive calendar",
  },
  {
    icon: Clock,
    number: 2,
    title: "Choose Time",
    description: "Pick available time slots that suit your schedule",
  },
  {
    icon: Zap,
    number: 3,
    title: "Select Duration",
    description: "Pick between 1-4 hour sessions based on your needs",
  },
  {
    icon: CreditCard,
    number: 4,
    title: "Secure Payment",
    description: "Complete your booking with secure online payment",
  },
  {
    icon: CheckCircle,
    number: 5,
    title: "Get Confirmation",
    description: "Receive instant confirmation and booking details",
  },
];

export const services = [
  {
    icon: Gamepad2,
    title: "3D Driving Simulator",
    description:
      "Experience hyper-realistic driving with cutting-edge graphics and physics",
  },
  {
    icon: Trophy,
    title: "Racing Competition",
    description: "Compete with friends and climb the leaderboard rankings",
  },
  {
    icon: Joystick,
    title: "Real Steering Wheel",
    description:
      "Professional-grade equipment with true-to-life feedback and controls",
  },
  {
    icon: Users,
    title: "Multiplayer Racing",
    description: "Race against others in real-time multiplayer sessions",
  },
  {
    icon: Zap,
    title: "Gaming Lounge",
    description: "Relax in our premium lounge with refreshments and amenities",
  },
  {
    icon: Clock,
    title: "Hourly Rental",
    description: "Flexible booking options from 1 to 4 hour sessions",
  },
];

export const reviews = [
  {
    name: "Ahmed Hassan",
    image: "👨‍💼",
    rating: 5,
    text: "Absolutely amazing experience! The simulator is so realistic and the staff is incredibly friendly. Highly recommend!",
  },
  {
    name: "Fatima Khan",
    image: "👩‍💼",
    rating: 5,
    text: "Best driving experience I've ever had. The graphics are stunning and the steering wheel feels authentic.",
  },
  {
    name: "Karim Ahmed",
    image: "👨‍🎓",
    rating: 5,
    text: "Perfect for practice before real driving. Very professional setup and competitive atmosphere.",
  },
  {
    name: "Nadia Iqbal",
    image: "👩‍🎓",
    rating: 5,
    text: "Had a blast with my friends here! Great value for money and amazing customer service.",
  },
];

export const packages = [
  {
    name: "Starter Ride",
    duration: "1 Hour",
    price: 100,
    originalPrice: 150,
    features: [
      "Access to 3D Simulator",
      "Professional Steering Wheel",
      "Single Player Mode",
      "Basic Analytics",
      "Refreshment Included",
    ],
    popular: false,
  },
  {
    name: "Street Racer",
    duration: "1 Hour",
    price: 100,
    originalPrice: 150,
    features: [
      "Everything in Starter",
      "Multiplayer Racing",
      "Advanced Analytics",
      "Friend Invite",
      "Premium Support",
      "Recording & Export",
    ],
    popular: true,
  },
  {
    name: "Pro Driver",
    duration: "1 Hour",
    price: 100,
    originalPrice: 150,
    features: [
      "Everything in Street Racer",
      "Priority Booking",
      "Leaderboard Access",
      "Coach Session (10 min)",
      "Exclusive Events",
      "VIP Lounge Access",
      "Premium Merchandise",
    ],
    popular: false,
  },
];

// import { NextRequest, NextResponse } from 'next/server';

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get('token')?.value;

//   if (request.nextUrl.pathname.startsWith('/dashboard') && !token) {
//     return NextResponse.redirect(new URL('/signin', request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/dashboard/:path*', '/admin/:path*'], // Protected routes
// };

// middleware.ts

export const memberships = [
  {
    name: "Silver Membership",
    price: 1999,
    duration: 20,
    benefits: [
      "10% Discount on Packages",
      "Priority Booking",
      "Monthly Free Session",
    ],
  },
  {
    name: "Gold Membership",
    price: 1799,
    duration: 30,
    benefits: [
      "20% Discount on Packages",
      "VIP Lounge Access",
      "Exclusive Tournaments",
      "Free Merchandise",
    ],
  },
];
