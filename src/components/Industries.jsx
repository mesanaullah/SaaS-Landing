import {
    FaHeartbeat,
    FaShoppingCart,
    FaUsers,
    FaGraduationCap,
    FaDumbbell,
    FaSpa,
    FaUtensils,
    FaBuilding,
    FaTruck,
    FaFilm,
} from "react-icons/fa";

const Industries = () => {

    const industries = [
        { name: "Healthcare", icon: <FaHeartbeat size={36} /> },
        { name: "Shopping", icon: <FaShoppingCart size={36} /> },
        { name: "Social Networking", icon: <FaUsers size={36} /> },
        { name: "Education", icon: <FaGraduationCap size={36} /> },
        { name: "Fitness & Gym", icon: <FaDumbbell size={36} /> },
        { name: "Beauty & Wellness", icon: <FaSpa size={36} /> },
        { name: "Restaurant", icon: <FaUtensils size={36} /> },
        { name: "Real Estate", icon: <FaBuilding size={36} /> },
        { name: "Logistics", icon: <FaTruck size={36} /> },
        { name: "Entertainment", icon: <FaFilm size={36} /> },
    ];

    return (
        <section className="py-10 md:py-15 bg-black text-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        <span className="text-primary">Industries</span> we serve
                    </h2>
                    <p className="mt-4 text-center text-zinc-600">
                        We provide services for diverse industries, including
                    </p>
                </div>

                {/* Grid */}
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl border border-zinc-800 text-white p-8 flex flex-col items-center justify-center text-center hover:shadow-lg transition"
                        >
                            <div className="mb-5 text-primary group-hover:scale-110 transition">
                                {industry.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-white">
                                {industry.name}
                            </h3>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Industries
