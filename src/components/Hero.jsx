import React from 'react'
import { motion } from "framer-motion";


const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen bg-black overflow-hidden text-white">

            {/* Spline 3D Background */}
            <iframe
                src="https://my.spline.design/saashero-abc123"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
            />

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40 text-center">

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="text-4xl md:text-6xl font-bold leading-tight"
                >
                    The all-in-one platform
                    <span className="block mt-3">for Web & AI Solutions</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 text-lg text-zinc-300 max-w-2xl mx-auto"
                >
                    We build intelligent, scalable, and high-performance digital experiences
                    powered by modern web technologies and AI.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-10 flex justify-center gap-4"
                >
                    <button className="px-8 py-4 bg-brand rounded-xl font-medium">
                        Get Started
                    </button>
                    <button className="px-8 py-4 border border-zinc-700 rounded-xl">
                        View Services
                    </button>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
