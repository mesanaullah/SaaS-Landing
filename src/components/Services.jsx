import {
    FaCode,
    FaRobot,
    FaTools,
    FaTachometerAlt,
} from "react-icons/fa";

// import { motion } from "framer-motion";

const Services = () => {

    const services = [
        {
            title: "Website Development",
            desc: "We build fast, scalable, and conversion-focused websites using modern frameworks and best practices.",
            icon: <FaCode size={26} />,
        },
        {
            title: "AI Integration",
            desc: "Integrate AI-driven features like chatbots, automation, and intelligent workflows into your product.",
            icon: <FaRobot size={26} />,
        },
        {
            title: "Maintenance & Support",
            desc: "Ongoing monitoring, updates, and security to keep your platform stable, fast, and reliable.",
            icon: <FaTools size={26} />,
        },
        {
            title: "Performance Optimization",
            desc: "We optimize speed, SEO, and Core Web Vitals to ensure maximum performance and user engagement.",
            icon: <FaTachometerAlt size={26} />,
        },
    ];

    return (
        <section id="services" className="relative bg-black py-10 md:py-15 overflow-hidden">

            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-linear-to-b from-black via-zinc-950 to-black opacity-80" />

            <div className="relative max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        What We <span className="text-primary">Specialize In</span>
                    </h2>
                    <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
                        Our expertise spans modern web development, AI-powered solutions,
                        and performance-driven digital experiences.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl border border-zinc-800 bg-zinc-950 p-8 hover:border-zinc-600 transition-all duration-300"
                        >
                            {/* Hover glow */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-linear-to-br from-white/5 to-transparent" />

                            {/* Content */}
                            <div className="relative">
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-white">
                                    {service.icon}
                                </div>

                                <h3 className="text-xl font-semibold text-white">
                                    {service.title}
                                </h3>

                                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
