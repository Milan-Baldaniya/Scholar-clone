import React from 'react';
import Image from 'next/image';

export default function TrustSystem() {
    return (
        <section className="bg-[#F4F6DE] py-16 lg:py-24">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-8">

                {/* Section Header */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center text-[#1E8A55] mb-16 max-w-4xl mx-auto">
                    Why Universities & Colleges Trust Our System?
                </h2>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto mb-20 relative">

                    {/* Item 1 */}
                    <div className="flex gap-4">
                        <div className="w-[2px] bg-slate-400 h-full min-h-[60px]"></div>
                        <div>
                            <h3 className="text-[#335CAB] text-xl font-medium mb-1">
                                Built for Higher Education
                            </h3>
                            <p className="text-slate-500 text-base">
                                Tailored specifically for universities & colleges.
                            </p>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex gap-4">
                        <div className="w-[2px] bg-slate-400 h-full min-h-[60px]"></div>
                        <div>
                            <h3 className="text-[#335CAB] text-xl font-medium mb-1">
                                100% Secure & Compliant
                            </h3>
                            <p className="text-slate-500 text-base">
                                Protects alumni records with high-end security measures.
                            </p>
                        </div>
                    </div>

                    {/* Item 3 (Indented on desktop for staggered look) */}
                    <div className="flex gap-4 md:pl-12">
                        <div className="w-[2px] bg-slate-400 h-full min-h-[60px]"></div>
                        <div>
                            <h3 className="text-[#335CAB] text-xl font-medium mb-1">
                                Scalable & Future-Ready
                            </h3>
                            <p className="text-slate-500 text-base">
                                Handles growing alumni networks effortlessly.
                            </p>
                        </div>
                    </div>

                    {/* Item 4 (Indented on desktop for staggered look) */}
                    <div className="flex gap-4 md:pl-12">
                        <div className="w-[2px] bg-slate-400 h-full min-h-[60px]"></div>
                        <div>
                            <h3 className="text-[#335CAB] text-xl font-medium mb-1">
                                User-Friendly Interface
                            </h3>
                            <p className="text-slate-500 text-base">
                                Easy for staff to manage, update, and retrieve alumni details.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Bottom Image */}
                <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-[40px] overflow-hidden shadow-sm">
                    <Image
                        src="/assets/Trust_alumni.png"
                        alt="Why Universities Trust Scholar Clone"
                        fill
                        className="object-cover"
                    />
                </div>

            </div>
        </section>
    );
}
