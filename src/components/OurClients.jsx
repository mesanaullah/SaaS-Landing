import React from 'react'

const OurClients = () => {
    const clients = [
        "Scale",
        "Google",
        "Shopify",
        "Accenture",
        "GIPHY",
        "Webflow",
        "Alloy",
        "OpenAI",
        "Microsoft",
        "Luma",
        "Meta",
        "Snapchat",
        "Forbes",
        "Siemens",
        "Burton",
    ];

    return (
        <section className="bg-black py-10 md:py-15">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <p className="text-center text-zinc-400 text-lg font-medium tracking-wide mb-14">
                    Empowering individuals and teams at world's leading organizations
                </p>

                {/* Logos Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-10 gap-y-12 items-center">
                    {clients.map((client, i) => (
                        <div
                            key={i}
                            className="flex justify-center items-center text-zinc-400 text-2xl font-semibold tracking-wide hover:text-white transition"
                        >
                            {client}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurClients
