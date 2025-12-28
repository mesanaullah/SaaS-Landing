import { useState } from "react";
import { FaPaperclip } from "react-icons/fa";

const FORM_ENDPOINT = "https://formspree.io/f/xzdbvgyv";

const ContactForm = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        skype: "",
        message: "",
    });

    const [status, setStatus] = useState("idle");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const formData = new FormData(e.target);

            const response = await fetch(FORM_ENDPOINT, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            const result = await response.json();

            if (result.ok) {
                setStatus("success");

                // ✅ RESET REACT STATE
                setForm({
                    name: "",
                    email: "",
                    phone: "",
                    skype: "",
                    message: "",
                });

                // ✅ RESET HTML FORM
                e.target.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Form error:", error);
            setStatus("error");
        }
    };


    return (
        <section id="contact" className="bg-black text-white py-10 md:py-15">
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
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Honeypot (spam protection) */}
                        <input type="text" name="_gotcha" className="hidden" />

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

                        {/* SUBMIT */}
                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="w-full sm:w-auto bg-primary text-black px-10 py-4 rounded-xl font-medium hover:bg-primaryHover transition disabled:opacity-60"
                        >
                            {status === "sending" ? "Sending..." : "Submit"}
                        </button>

                        {/* STATUS */}
                        {status === "success" && (
                            <p className="text-green-400 text-sm">
                                Thanks! Your message has been sent.
                            </p>
                        )}

                        {status === "error" && (
                            <p className="text-red-400 text-sm">
                                Something went wrong. Please try again.
                            </p>
                        )}

                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
