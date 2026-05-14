'use client'

import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] =
        useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener(
            'scroll',
            toggleVisibility
        )

        return () =>
            window.removeEventListener(
                'scroll',
                toggleVisibility
            )
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{
                        opacity: 0,
                        y: 100,
                        scale: 0.8,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                    }}
                    exit={{
                        opacity: 0,
                        y: 100,
                        scale: 0.8,
                    }}
                    transition={{
                        duration: 0.3,
                    }}
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500 text-black shadow-lg shadow-cyan-500/30 backdrop-blur-xl transition hover:scale-110 hover:bg-cyan-400"
                >
                    <ChevronUp size={28} />
                </motion.button>
            )}
        </AnimatePresence>
    )
}

export default ScrollToTopButton