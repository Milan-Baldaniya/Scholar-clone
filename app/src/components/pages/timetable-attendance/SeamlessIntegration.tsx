import React from 'react';
import Image from 'next/image';

export default function SeamlessIntegration() {
    return (
        <section className="bg-[#5373A3] py-16 lg:py-24 overflow-hidden text-white">
            <div className="max-w-scaled mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Image */}
                    <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full min-h-scaled-lg">
                        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                            <Image
                                src="/assets/Seamless_timetable.png"
                                alt="Seamless Integration with Existing Systems"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Seamless Integration with Your Existing Systems
                        </h2>

                        <p className="text-[#E0E7FF] font-medium text-lg mb-8">
                            Our Timetable & Attendance Module integrates effortlessly with:
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                { title: "Learning Management System (LMS)", desc: "Sync attendance with online courses." },
                                { title: "HR & Payroll Systems", desc: "Track faculty working hours & automate payroll." },
                                { title: "Student Information System (SIS)", desc: "Centralized student records for efficient administration." }
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded bg-[#22C55E] flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-white text-lg">
                                        <span className="font-semibold">{item.title} –</span> {item.desc}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-xl md:text-2xl font-bold mb-6">
                            Boost Institutional Efficiency & Compliance
                        </h3>

                        <ul className="space-y-4">
                            {[
                                "Higher education institutes face challenges in UGC, NAAC, NBA compliance regarding attendance tracking. Our module ensures full regulatory adherence while improving student engagement & faculty efficiency."
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                                    <p className="text-[#E0E7FF] text-lg leading-relaxed">
                                        {item}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
