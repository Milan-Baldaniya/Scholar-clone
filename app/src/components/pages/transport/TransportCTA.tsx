"use client";

import Link from "next/link";

export default function TransportCTA() {
    return (
        <section className="bg-[#5B7C99] py-16 px-4">
            <div className="container mx-auto text-center space-y-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white flex flex-col md:flex-row items-center justify-center gap-3">
                    <span className="text-3xl md:text-4xl">🚀</span>
                    Transform your student experience today.
                </h2>

                <p className="text-xl md:text-2xl text-white/90 flex flex-col md:flex-row items-center justify-center gap-3">
                    <span className="text-2xl">📞</span>
                    Schedule a Free Demo of the Lifecycle Suite!
                </p>

                <div className="pt-4">
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-[#E6F4F1] text-[#0A8940] px-8 py-3 rounded-md font-medium hover:bg-white transition-colors duration-300"
                    >
                        Get Your Free Demo <span className="text-lg">›</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
