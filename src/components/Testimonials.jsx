import { FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "Rahul Sharma",
        role: "Founder, StartupX",
        feedback:
            "The team delivered a high-performance website with seamless AI integration. Communication and execution were top-notch.",
    },
    {
        name: "Ananya Verma",
        role: "Product Manager, SaaSify",
        feedback:
            "Exceptional work quality and attention to detail. Our platform performance improved significantly after launch.",
    },
    {
        name: "Amit Patel",
        role: "CEO, DigitalCraft",
        feedback:
            "From concept to deployment, everything was handled professionally. Highly recommended for modern web solutions.",
    },
];

const Testimonials = () => {
    return (
        <section className="bg-black text-white py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Header */}
                <div className="text-center mb-14 md:mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        What Our <span className="text-primary">Clients Say</span>
                    </h2>
                    <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
                        Trusted by startups and growing businesses worldwide.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="relative rounded-2xl border border-zinc-800 bg-zinc-950 p-8 hover:border-primary/40 transition"
                        >
                            {/* Glow on hover */}
                            <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 hover:opacity-100 transition pointer-events-none" />

                            {/* Stars */}
                            {/* <div className="relative flex gap-1 text-primary mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} size={14} />
                                ))}
                            </div> */}

                            {/* Feedback */}
                            <p className="relative text-zinc-400 leading-relaxed">
                                “{item.feedback}”
                            </p>

                            {/* Client Info */}
                            <div className="relative mt-6">
                                <p className="font-semibold">{item.name}</p>
                                <p className="text-sm text-zinc-500">{item.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
