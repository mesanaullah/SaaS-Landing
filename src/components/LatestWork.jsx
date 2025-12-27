import React from 'react'
import klyve from '../IMG/klyve-banner.png';
import ummeed from '../IMG/ummeed.png';
import imsanaullah from '../IMG/imsanaullah.png';

const LatestWork = () => {
    const works = [
        {
            title: "E-Commerce Platform",
            description:
                "Full-featured e-commerce platform with user authentication and payment gateway.",
            image: klyve,
            link: "https://klyve-frontend.vercel.app/",
        },
        {
            title: "NGO Website",
            description:
                "A MERN-based application portal with secure Razorpay payment integration, real-time admin dashboard, application tracking, and receipt generation. Features JWT authentication, Cloud",
            image: ummeed,
            link: "https://www.ummeedindia.com/",
        },
        {
            title: "Porfolio Website",
            description:
                "A clean and modern portfolio designed to showcase projects, skills, and real-world solutions.",
            image: imsanaullah,
            link: "https://imsanaullah.vercel.app/",
        },
    ];

    return (
        <section id="our-work" className="bg-black py-10 md:py-15">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Our  <span className="text-primary">Latest Work</span>
                    </h2>
                    <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
                        A selection of recent projects showcasing our expertise in web
                        development, AI integration, and digital experiences.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {works.map((work, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 hover:border-zinc-600 transition"
                        >
                            {/* Banner */}
                            <div className="relative h-52 overflow-hidden">
                                <img
                                    src={work.image}
                                    alt={work.title}
                                    className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white">
                                    {work.title}
                                </h3>

                                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                                    {work.description}
                                </p>

                                <a
                                    href={work.link}
                                    className="inline-flex items-center mt-6 text-sm font-medium text-white hover:underline"
                                >
                                    View Project →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LatestWork
