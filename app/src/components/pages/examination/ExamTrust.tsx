import React from 'react';
import Image from 'next/image';

export default function ExamTrust() {
    return (
        <section className="bg-[#F4F6DE] py-16 lg:py-24">
            <div className="max-w-scaled mx-auto px-6 lg:px-8">

                {/* Section Header */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center text-[#1E8A55] mb-16 max-w-4xl mx-auto">
                    Why Institutions Trust Our Exam System?
                </h2>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto mb-20 relative">

                    {/* Item 1 */}
                    <div className="flex gap-4">
                        <div className="w-[2px] bg-slate-400 h-full min-h-[60px]"></div>
                        <div>
                            <h3 className="text-[#335CAB] text-xl font-medium mb-1">
                                Regulatory Compliance
                            </h3>
                            <p className="text-slate-500 text-base">
                                Adheres to UGC, AICTE, and NAAC accreditation standards.
                            </p>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex gap-4">
                        <div className="w-[2px] bg-slate-400 h-full min-h-[60px]"></div>
                        <div>
                            <h3 className="text-[#335CAB] text-xl font-medium mb-1">
                                Zero-Error Processing
                            </h3>
                            <p className="text-slate-500 text-base">
                                Automated totaling and validation eliminates calculation errors.
                            </p>
                        </div>
                    </div>

                    {/* Item 3 (Indented on desktop for staggered look) */}
                    <div className="flex gap-4 md:pl-12">
                        <div className="w-[2px] bg-slate-400 h-full min-h-[60px]"></div>
                        <div>
                            <h3 className="text-[#335CAB] text-xl font-medium mb-1">
                                High-Scale Concurrency
                            </h3>
                            <p className="text-slate-500 text-base">
                                Supports thousands of simultaneous exams without downtime.
                            </p>
                        </div>
                    </div>

                    {/* Item 4 (Indented on desktop for staggered look) */}
                    <div className="flex gap-4 md:pl-12">
                        <div className="w-[2px] bg-slate-400 h-full min-h-[60px]"></div>
                        <div>
                            <h3 className="text-[#335CAB] text-xl font-medium mb-1">
                                Bank-Grade Security
                            </h3>
                            <p className="text-slate-500 text-base">
                                Encrypted databases and secure role-based access control.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Bottom Image */}
                <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-scaled-xl overflow-hidden shadow-sm">
                    <Image
                        src="/assets/institution4_inventory.png"
                        alt="Examination Analytics Dashboard"
                        fill
                        className="object-cover"
                    />
                </div>

            </div>
        </section>
    );
}
