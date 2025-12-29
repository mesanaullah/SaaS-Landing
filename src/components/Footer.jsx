import {
    FaTwitter,
    FaLinkedinIn,
    FaGithub,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-zinc-400">

            {/* Top Footer */}
            <div className="max-w-7xl mx-auto px-6 py-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

                {/* Brand */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                        DigitalWebify
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-400">
                        We build intelligent, scalable, and high-performance digital
                        experiences powered by modern web technologies and AI.
                    </p>

                    {/* Socials */}
                    <div className="flex gap-4 mt-6">
                        <a className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition">
                            <FaTwitter />
                        </a>
                        <a className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition">
                            <FaLinkedinIn />
                        </a>
                        <a className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition">
                            <FaGithub />
                        </a>
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Services</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="hover:text-white transition cursor-pointer">
                            Website Development
                        </li>
                        <li className="hover:text-white transition cursor-pointer">
                            AI Integration
                        </li>
                        <li className="hover:text-white transition cursor-pointer">
                            Maintenance & Support
                        </li>
                        <li className="hover:text-white transition cursor-pointer">
                            Performance Optimization
                        </li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Company</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="hover:text-white transition cursor-pointer">
                            About Us
                        </li>
                        <li className="hover:text-white transition cursor-pointer">
                            <a href="#services">Services</a>
                        </li>
                        <li className="hover:text-white transition cursor-pointer">
                            <a href="#our-work">Our Work</a>
                        </li>
                        <li className="hover:text-white transition cursor-pointer">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Contact</h4>
                    <p className="text-sm">digitalwebify7u@gmail.com</p>
                    <p className="text-sm mt-2">India</p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-zinc-800">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm">
                    <p>© 2025 YourBrand. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <span className="hover:text-white transition cursor-pointer">
                            Privacy Policy
                        </span>
                        <span className="hover:text-white transition cursor-pointer">
                            Terms of Service
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
