import {
    FaReact,
    FaNodeJs,
    FaPhp,
    FaWordpress,
    FaDatabase,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiTailwindcss, SiExpress } from "react-icons/si";

const Technologies = () => {
    const techs = [
        { name: "React", icon: <FaReact size={42} /> },
        { name: "Node.js", icon: <FaNodeJs size={42} /> },
        { name: "MongoDB", icon: <SiMongodb size={42} /> },
        { name: "PHP", icon: <FaPhp size={42} /> },
        { name: "WordPress", icon: <FaWordpress size={42} /> },
        { name: "MySQL", icon: <SiMysql size={42} /> },
        { name: "Express", icon: <SiExpress size={42} /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss size={42} /> },
    ];

    return (
        <section id="technologies" className="bg-black py-10 md:py-15">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Custom web <span className="text-primary">technologies</span> we work with
                    </h2>
                    <p className="mt-6 text-zinc-400 leading-relaxed">
                        Our team works with modern, proven technologies to build secure,
                        scalable, and high-performance digital solutions tailored to your
                        business needs.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border border-zinc-800">
                    {techs.map((tech, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center gap-4 py-14 border-r border-b border-zinc-800 last:border-r-0 sm:nth-[3n]:border-r-0 lg:nth-[4n]:border-r-0 hover:bg-white/5 transition"
                        >
                            <div className="text-primary">
                                {tech.icon}
                            </div>
                            <span className="text-white font-medium">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Technologies
