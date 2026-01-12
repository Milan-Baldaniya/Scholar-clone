"use client";

import Image from "next/image";

export default function TransportWhyChooseUs() {
    const benefits = [
        "End-to-End Visibility: Track student progress from admission to alumni.",
        "Unified Data: Eliminate silos with a single source of truth.",
        "Seamless Integration: Connects with Finance, Library, and HR modules.",
        "Student Centric: Enhances experience with mobile apps and portals.",
        "Regulatory Compliance: Automated reporting for NAAC/NBA/NIRF.",
    ];

    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#0A8940] mb-12 md:mb-16">
                    Why Choose Our Student Lifecycle System?
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left Column - Image */}
                    <div className="relative w-full aspect-[4/3] max-w-[600px] mx-auto lg:mx-0">
                        <div className="relative h-full w-full rounded-2xl overflow-hidden border border-gray-200/50 shadow-sm">
                            <Image
                                src="/assets/student_life.png"
                                alt="Students walking near a yellow school bus"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                priority
                            />
                        </div>
                        {/* Background decorative elements could be added here if needed */}
                    </div>

                    {/* Right Column - Benefits List */}
                    <div className="space-y-6 md:space-y-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-4 group">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-6 h-6 rounded bg-[#25D366] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        <svg
                                            width="14"
                                            height="10"
                                            viewBox="0 0 14 10"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12.3333 1L5 8.33333L1.66667 5"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-gray-800 text-lg md:text-xl font-medium leading-relaxed">
                                    {benefit}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
