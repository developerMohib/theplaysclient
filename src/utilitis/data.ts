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
import { IGame, NavItem } from "./all.types";

export const publicNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Games", href: "/games" },
  { label: "Pricing", href: "/pricing" },
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

export const games: IGame[] = [
  {
    id: 1,
    name: "FC26",
    slug: "fc26",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop",
    banner:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1400&auto=format&fit=crop",
    genre: "Football Simulation",
    category: "Sports",
    description:
      "Experience the thrill of football with realistic gameplay, stunning graphics, and immersive stadium atmospheres in FC26.",
    shortDescription: "Next-gen football simulation with realistic gameplay.",
    version: "1.0.0",
    publisher: "Electronic Arts",
    releaseDate: "2026-01-15",
    multiplayer: true,
    rating: 4.9,
    features: [
      "Realistic Physics",
      "Ultimate Team",
      "Career Mode",
      "Online Multiplayer",
      "4K Graphics",
    ],
    tags: ["Football", "Sports", "Multiplayer", "Competitive"],
    available: true,
    trending: true,
    featured: true,
    price: 59.99,
    discount: 15,
    currency: "USD",
  },

  {
    id: 2,
    name: "Forza Horizon 5",
    slug: "forza-horizon-5",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    banner:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1400&auto=format&fit=crop",
    genre: "Open World Racing",
    category: "Racing",
    description:
      "Explore breathtaking open-world racing environments with hundreds of customizable cars and dynamic weather systems.",
    shortDescription: "Open-world racing adventure with realistic driving.",
    version: "2.5.1",
    publisher: "Xbox Game Studios",
    releaseDate: "2025-11-09",
    multiplayer: true,
    rating: 4.8,
    features: [
      "Dynamic Seasons",
      "Realistic Cars",
      "Online Races",
      "Open World",
      "Photo Mode",
    ],
    tags: ["Cars", "Racing", "Open World", "Driving"],
    available: true,
    trending: true,
    featured: true,
    price: 69.99,
    discount: 10,
    currency: "USD",
  },

  {
    id: 3,
    name: "WWE 2026",
    slug: "wwe-2026",
    image:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=1200&auto=format&fit=crop",
    banner:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1400&auto=format&fit=crop",
    genre: "Sports Fighting",
    category: "Fighting",
    description:
      "Step into the ring with legendary superstars, cinematic entrances, and action-packed wrestling gameplay.",
    shortDescription: "Ultimate wrestling action with WWE superstars.",
    version: "1.2.0",
    publisher: "2K",
    releaseDate: "2026-03-20",
    multiplayer: true,
    rating: 4.6,
    features: [
      "Career Mode",
      "Tag Team Battles",
      "Custom Wrestlers",
      "Online Arena",
    ],
    tags: ["Wrestling", "Action", "Sports", "Multiplayer"],
    available: true,
    trending: false,
    featured: true,
    price: 49.99,
    discount: 20,
    currency: "USD",
  },

  {
    id: 4,
    name: "GTA-V",
    slug: "gta-v",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
    banner:
      "https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?q=80&w=1400&auto=format&fit=crop",
    genre: "Open World Action",
    category: "Adventure",
    description:
      "Enter the chaotic open world of Los Santos with thrilling missions, action-packed gameplay, and endless exploration.",
    shortDescription: "Massive open-world crime adventure experience.",
    version: "3.0.0",
    publisher: "Rockstar",
    releaseDate: "2025-08-10",
    multiplayer: true,
    rating: 4.9,
    features: [
      "Open World",
      "Online Multiplayer",
      "Heists",
      "Vehicle Customization",
    ],
    tags: ["Open World", "Action", "Adventure", "Crime"],
    available: true,
    trending: true,
    featured: true,
    price: 39.99,
    discount: 35,
    currency: "USD",
  },

  {
    id: 5,
    name: "Ghost Of Yotei",
    slug: "ghost-of-yotei",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
    banner:
      "https://images.unsplash.com/photo-1520034475321-cbe63696469a?q=80&w=1400&auto=format&fit=crop",
    genre: "Samurai Adventure",
    category: "Adventure",
    description:
      "Embark on an epic samurai journey filled with sword combat, stealth missions, and breathtaking landscapes.",
    shortDescription: "Epic samurai adventure with cinematic combat.",
    version: "1.0.5",
    publisher: "Sony Interactive",
    releaseDate: "2026-06-01",
    multiplayer: false,
    rating: 4.8,
    features: ["Open World", "Stealth Combat", "Story Mode", "Dynamic Weather"],
    tags: ["Samurai", "Adventure", "Story Rich", "Single Player"],
    available: true,
    trending: true,
    featured: false,
    price: 69.99,
    discount: 5,
    currency: "USD",
  },

  {
    id: 6,
    name: "Spiderman 2",
    slug: "spiderman-2",
    image:
      "https://images.unsplash.com/photo-1608889175123-8ee362201f81?q=80&w=1200&auto=format&fit=crop",
    banner:
      "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1400&auto=format&fit=crop",
    genre: "Superhero Action",
    category: "Action",
    description:
      "Swing through New York City with breathtaking visuals, fast-paced combat, and cinematic superhero storytelling.",
    shortDescription: "Action-packed superhero experience in NYC.",
    version: "2.0.0",
    publisher: "Sony Interactive",
    multiplayer: false,
    releaseDate: "2025-12-12",
    rating: 4.9,
    features: ["Open World", "Story Mode", "Advanced Combat", "4K Graphics"],
    tags: ["Marvel", "Superhero", "Action", "Story Rich"],
    available: true,
    trending: true,
    featured: true,
    price: 59.99,
    discount: 12,
    currency: "USD",
  },
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
    price: 1500,
    originalPrice: 2000,
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
    duration: "2 Hours",
    price: 2800,
    originalPrice: 4000,
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
    duration: "4 Hours",
    price: 5000,
    originalPrice: 8000,
    features: [
      "Everything in Street Racer",
      "Priority Booking",
      "Leaderboard Access",
      "Coach Session (30 min)",
      "Exclusive Events",
      "VIP Lounge Access",
      "Premium Merchandise",
    ],
    popular: false,
  },
];
