import React from 'react';
import Image from 'next/image';

export default function EffortlessManagement() {
    return (
        <section className="bg-[#F4F6DE] py-16 lg:py-24 overflow-hidden">
            <div className="max-w-scaled mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Content */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A8A] mb-4">
                            Effortless Timetable Management for Higher Education
                        </h2>

                        <p className="text-[#3B82F6] font-medium text-lg mb-6">
                            No More Scheduling Chaos! Our smart scheduling system dynamically manages:
                        </p>

                        <ul className="space-y-3 mb-10">
                            {[
                                "Faculty-wise, course-wise, and batch-wise scheduling",
                                "Automatic conflict resolution & real-time updates",
                                "Elective courses, lab sessions, and internship programs",
                                "Integration with academic calendars & LMS"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-slate-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-slate-800">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-xl md:text-2xl font-bold text-[#1E3A8A] mb-6">
                            Advanced Features That Transform Your Institution
                        </h3>

                        <ul className="space-y-4">
                            {[
                                { title: "Live Tracking & Alerts", desc: "Get real-time attendance updates for students & faculty." },
                                { title: "Automated Reports", desc: "Export detailed analytics for compliance, accreditation, and audits." },
                                { title: "Instant Notifications", desc: "Alerts for absenteeism, low attendance, and schedule changes." },
                                { title: "Cloud-Based Access", desc: "Manage attendance & schedules from anywhere, anytime." }
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-800 flex-shrink-0" />
                                    <p className="text-slate-800">
                                        <span className="font-semibold">{item.title} –</span> {item.desc}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full min-h-scaled-lg">
                        {/* 
                            Styling Note: 
                            "one side cornerd and one side curve also"
                            Using rounded-tl-[100px] (Top-Left Curve) and standard corners elsewhere, 
                            or rounded-tl-[100px] and rounded-br-[100px] (Diagonal).
                            Based on "cone seide 90% corner is set on screen right side border", 
                            I will align it to the right and use a distinct border radius.
                        */}
                        <div className="relative w-full h-full rounded-tl-[80px] rounded-br-[80px] overflow-hidden shadow-xl">
                            <Image
                                src="/assets/effortless_timetable.png"
                                alt="Effortless Timetable Management"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
