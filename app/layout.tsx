import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import QueryProvider from "@/src/provider/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Plays | Premium Racing Wheel Rental & Gaming",
  description: "Online Car Racing Game Booking System - Rent premium racing wheels and gaming setups for an immersive driving experience. Book now for thrilling virtual races!",
  icons: {
    icon: '/logo-the-plays.png',
    apple: '/logo-the-plays.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <main>
          <QueryProvider>
            {children}
          </QueryProvider>
          <Toaster
            theme="dark"
            position="top-right"
            toastOptions={{
              style: {
                background: "#ffffff",
                color: "#000000",
                border: "1px solid #0f0f0f",
              },
            }}
          />
        </main>
      </body>
    </html>
  );
}
