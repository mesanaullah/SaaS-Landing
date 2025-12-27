import React from 'react'

const Features = () => {
    return (
        <section className="py-10 md:py-15 bg-zinc-950 text-white">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
                <div>
                    <h3 className="text-xl font-semibold">AI-Enhanced Experiences</h3>
                    <p className="mt-3 text-zinc-400">
                        Smart automation that improves efficiency and engagement.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold">Enterprise-Grade Security</h3>
                    <p className="mt-3 text-zinc-400">
                        Secure, stable, and reliable infrastructure from day one.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold">Built to Scale</h3>
                    <p className="mt-3 text-zinc-400">
                        Designed to grow from hundreds to millions of users.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Features
