import { motion } from "framer-motion";
import Sparkles from "./Sparkles";

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden"
        >
            {/* Sparkles background */}
            <Sparkles />

            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl px-6">
                {/* Heading */}
                {/* <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight"
                >
                    The all-in-one platform
                    <span className="block mt-3">
                        for{" "}
                        <span className="text-primary">Web & AI</span>{" "}
                        Solutions
                    </span>
                </motion.h1> */}
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className=" text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.05]"
                >
                    The all-in-one platform
                    <span className="block mt-3">
                        for <span className="text-primary">Web & AI</span> Solutions
                    </span>
                </motion.h1>


                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mt-6 text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed"
                >
                    We build intelligent, scalable, and high-performance digital
                    experiences powered by modern web technologies and AI.
                </motion.p>

                {/* Glowing horizon line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    className="mx-auto mt-10 h-px w-64 sm:w-80 bg-linear-to-r from-transparent via-blue-500 to-transparent"
                />
            </div>
        </section>
    );
};

export default Hero;
