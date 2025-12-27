import { useState } from "react";
import { FaPaperclip } from "react-icons/fa";

const ContactForm = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        skype: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <section
            id="contact"
            className="bg-black text-white py-10 md:py-15"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* SECTION HEADER */}
                <div className="text-center mb-14 md:mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        <span className="text-primary">Contact</span> Us
                    </h2>
                    <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
                        Tell us about your requirements and our team will get back to you
                        with the right solution.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">

                    {/* LEFT CONTENT */}
                    <div>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                            Looking for a Website <br className="hidden sm:block" />
                            Maintenance services?
                        </h3>

                        <p className="mt-6 text-base sm:text-lg text-zinc-500">
                            Get a free consultation now.
                        </p>

                        <p className="mt-10 text-zinc-500">
                            Please fill the form or send us an email
                        </p>

                        <a
                            href="mailto:mdsanaullah1227@gmail.com"
                            className="mt-2 block text-primary font-medium break-all"
                        >
                            mdsanaullah1227@gmail.com
                        </a>
                    </div>

                    {/* RIGHT FORM */}
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        {/* ROW 1 */}
                        <div className="grid gap-6 md:grid-cols-2">
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-zinc-800 px-5 py-4 bg-black text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />

                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-zinc-800 px-5 py-4 bg-black text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />
                        </div>

                        {/* ROW 2 */}
                        <div className="grid gap-6 md:grid-cols-2">
                            <input
                                type="text"
                                name="phone"
                                required
                                placeholder="Phone number"
                                value={form.phone}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-zinc-800 px-5 py-4 bg-black text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />

                            <input
                                type="text"
                                name="skype"
                                placeholder="WhatsApp no."
                                value={form.skype}
                                onChange={handleChange}
                                className="w-full rounded-xl border border-zinc-800 px-5 py-4 bg-black text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />
                        </div>

                        {/* MESSAGE */}
                        <textarea
                            name="message"
                            rows="6"
                            required
                            placeholder="Tell us briefly about your needs..."
                            value={form.message}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-zinc-800 px-5 py-4 bg-black text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                        />

                        {/* FILE UPLOAD */}
                        <div className="flex items-center gap-3 text-zinc-400 cursor-pointer">
                            <FaPaperclip />
                            <span className="text-sm font-medium">Add files</span>
                        </div>

                        {/* SUBMIT */}
                        <button
                            type="submit"
                            className="w-full sm:w-auto bg-primary text-black px-10 py-4 rounded-xl font-medium hover:bg-primaryHover transition"
                        >
                            Submit
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default ContactForm;
