'use client';

interface FeatureCard {
    id: number;
    title: string;
    description: string;
    image: string;
}

interface UniversityFeaturesProps {
    featuredCards: FeatureCard[];
    loading: boolean;
}

export default function AdministrativeFeatures({ featuredCards, loading }: UniversityFeaturesProps) {
    return (
        <section className="w-full py-16 lg:py-24 mt-16 lg:mt-[50px]">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-12 lg:gap-16 justify-start items-center">

                    {/* Section Header */}
                    <div className="w-full lg:w-[60%] flex flex-col gap-4 lg:gap-6 justify-start items-center text-center">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-center font-['Corbel']">
                            <span className="text-[#007f5f] block mb-2">Streamlined Operations &</span>
                            <span className="text-[#007f5f] font-bold">Regulatory Compliance</span>
                        </h2>

                        <p className="text-base sm:text-lg lg:text-xl font-normal text-[#546e7a] font-['Hind_Guntur']">
                            Core institutional modules working in perfect sync—from audit readiness to resource optimization.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">

                        {/* First Feature Card - Image + Text */}
                        <div className="flex flex-col rounded-3xl overflow-hidden border border-gray-200 shadow-xl bg-[#fcfbf9]">
                            <div className="relative h-[220px] bg-gray-100">
                                {loading ? (
                                    <div className="w-full h-full bg-gray-200 animate-pulse" />
                                ) : (
                                    <img
                                        src="/assets/AI-Powered Analytics.png"
                                        alt="AI-Powered Analytics"
                                        className="w-full h-full object-cover"
                                    />
                                )}
                                <div className="absolute bottom-4 left-4 w-10 h-10 bg-black rounded-full flex items-center justify-center">
                                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                                        <path d="M10.5 7L1.5 12.1962L1.5 1.80385L10.5 7Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col gap-3">
                                <h3 className="text-xl font-bold text-[#1a237e] leading-tight font-['Mukta']">
                                    Governance & Compliance
                                </h3>
                                <p className="text-base text-[#37474f] leading-relaxed font-['Mukta']">
                                    Automated readiness for NAAC, NBA, and NIRF with centralized data evidence, accreditation tracking, and committee workflows.
                                </p>
                            </div>
                        </div>

                        {/* Second Feature Card - Solid Grey Background */}
                        <div className="flex flex-col rounded-3xl p-8 bg-[#90a4ae] justify-center h-[380px] border border-gray-200 shadow-xl">
                            <h3 className="text-xl font-bold text-[#1a237e] mb-4 leading-tight font-['Mukta']">
                                Operations & <br />Logistics Management
                            </h3>
                            <p className="text-base text-[#263238] leading-relaxed font-['Mukta']">
                                Optimize transport routing, maintain inventory stock levels, handle guest bookings, and secure campus entry points with integrated visitor management.
                            </p>
                        </div>

                        {/* Third Feature Card - Image Overlay */}
                        <div className="relative rounded-3xl overflow-hidden min-h-[400px] mt-0 lg:mt-24 border border-gray-200 shadow-xl">
                            {loading ? (
                                <div className="w-full h-full bg-gray-200 animate-pulse" />
                            ) : (
                                <img
                                    src="/assets/Next-Gen Learning.png"
                                    alt="Next-Gen Learning"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            )}
                            <div className="absolute inset-0 bg-white/60 p-8 flex flex-col justify-center backdrop-blur-[2px]">
                                <h3 className="text-xl font-bold text-[#1a237e] mb-4 leading-tight font-['Mukta']">
                                    Stakeholder Engagement & Website
                                </h3>
                                <p className="text-base text-[#1a237e] leading-relaxed font-['Mukta']">
                                    Enhance community relations with 360° feedback systems, grievance redressal, alumni networking, and a centrally managed institutional website.
                                </p>
                            </div>
                        </div>

                        {/* Fourth Feature Card - Light Beige Background */}
                        <div className="flex flex-col rounded-3xl p-8 bg-[#f1f8e9] justify-center mt-0 lg:mt-24 h-[380px] border border-gray-200 shadow-xl">
                            <h3 className="text-xl font-bold text-black mb-4 leading-tight font-['Mukta']">
                                Academic Administration
                            </h3>
                            <p className="text-base text-[#455a64] leading-relaxed font-['Mukta']">
                                Streamline timetables, attendance tracking, convocation management, and document journeys. Ensure zero lapses in crucial academic processes.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
