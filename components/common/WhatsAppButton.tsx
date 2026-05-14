'use client'

import Link from 'next/link'
import { MessageCircleCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const WhatsAppButton = () => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                x: -100,
            }}
            animate={{
                opacity: 1,
                x: 0,
            }}
            transition={{
                duration: 0.5,
            }}
            className="fixed bottom-6 left-6 z-50"
        >
            <Link
                href="https://wa.me/8801706439736"
                target="_blank"
                className="group flex items-center gap-3 rounded-full border border-green-400/20 bg-green-500 px-5 py-3 font-semibold text-black shadow-lg shadow-green-500/30 transition hover:scale-105 hover:bg-green-400"
            >
                <MessageCircleCheck size={24}
                    className="transition group-hover:rotate-12"
                />

                <span className="hidden sm:block">
                    Chat on WhatsApp
                </span>
            </Link>

            {/* PING ANIMATION */}

            <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-green-400 opacity-20" />
        </motion.div>
    )
}

export default WhatsAppButton