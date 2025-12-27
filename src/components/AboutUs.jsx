import React from 'react'

const AboutUs = () => {
    return (
        <section id="about" className="bg-black text-white py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Header */}
                <div className="text-center mb-14 md:mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        About <span className="text-primary">Us</span>
                    </h2>
                    <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
                        We are a technology-driven team focused on building reliable,
                        scalable, and future-ready digital solutions.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-semibold leading-tight">
                            Building Digital Experiences That Drive Growth
                        </h3>

                        <p className="mt-6 text-zinc-400 leading-relaxed">
                            We specialize in creating modern websites, web applications, and
                            AI-powered solutions that help businesses scale efficiently.
                            Our approach combines clean design, strong engineering, and
                            performance-focused development.
                        </p>

                        <p className="mt-4 text-zinc-400 leading-relaxed">
                            From startups to growing enterprises, we partner closely with
                            our clients to understand their goals and deliver solutions
                            that create real impact.
                        </p>
                    </div>

                    {/* RIGHT STATS / HIGHLIGHTS */}
                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
                            <h4 className="text-3xl font-bold text-primary">50+</h4>
                            <p className="mt-2 text-zinc-400">
                                Projects Delivered
                            </p>
                        </div>

                        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
                            <h4 className="text-3xl font-bold text-primary">3+</h4>
                            <p className="mt-2 text-zinc-400">
                                Years of Experience
                            </p>
                        </div>

                        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
                            <h4 className="text-3xl font-bold text-primary">100%</h4>
                            <p className="mt-2 text-zinc-400">
                                Client Satisfaction
                            </p>
                        </div>

                        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8">
                            <h4 className="text-3xl font-bold text-primary">24/7</h4>
                            <p className="mt-2 text-zinc-400">
                                Support & Maintenance
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutUs
