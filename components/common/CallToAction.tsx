'use client'
import { motion } from 'framer-motion'

const CallToAction = () => {
    return (
        <section className="py-20 px-4 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Be Part of Our Story
                    </h2>
                    <p className="text-gray-400 text-lg mb-8">
                        Join thousands of gamers who have experienced the premium driving simulator at The Plays
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/auth/register"
                            className="px-8 py-4 rounded-lg bg-linear-to-r from-cyan-500 to-purple-500 text-white font-bold text-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105"
                        >
                            Book Your Slot Now
                        </a>
                        <a
                            href="/contact"
                            className="px-8 py-4 rounded-lg border-2 border-cyan-400/50 text-cyan-400 font-bold text-lg hover:bg-cyan-400/10 transition-all duration-300"
                        >
                            Get In Touch
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToAction;