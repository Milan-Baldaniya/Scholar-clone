import React from 'react';

export function HomeStudentLifecycle() {
    return (
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#F4F6DC] to-[#EEF4C6]">
            {/* Background Vector Design */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 1920 1340"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0 1340 C 400 0 1520 1340 1920 0 V 1340 H 0 Z"
                        fill="url(#vector-gradient)"
                    />
                    <defs>
                        <linearGradient id="vector-gradient" x1="0" y1="1340" x2="1920" y2="0" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#D1D3B6" stopOpacity="1" />
                            <stop offset="0.52" stopColor="#E5E8C2" stopOpacity="0.8" />
                            <stop offset="1" stopColor="#D1D3B6" stopOpacity="1" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Bottom Gradient Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[#E5E8C2]/60 to-transparent pointer-events-none z-0" />
            <div className="relative z-10 mx-auto max-w-[1600px] px-6 lg:px-8">
                <div className="grid gap-8">

                    {/* First Card */}
                    <div className="relative overflow-hidden bg-[#1E4584] p-10 text-white">

                        {/* Quarter Circle */}
                        <div className="absolute top-0 right-0 h-full aspect-square bg-[#001F3F] rounded-tl-full" />

                        {/* Content */}
                        <div className="relative z-10 max-w-3xl">
                            <h3 className="text-2xl font-semibold mb-4">
                                Student Lifecycle Management
                            </h3>

                            <p className="text-sm text-blue-100 mb-5">
                                Manage the entire student journey from admission to alumni engagement with an automated, structured approach.
                            </p>

                            <ul className="space-y-2 text-sm">
                                <span className="text-green-400 font-medium block mb-1">
                                    Admissions & Enrollment:
                                </span>
                                <p className="mb-2 text-slate-200">
                                    Our automated admission system reduces processing time by 70% and minimizes errors by 95%.
                                </p>
                                <ul className="list-disc pl-4 space-y-1 text-slate-300 text-xs">
                                    <li>Online application forms with instant validation</li>
                                    <li>Document verification with AI-powered checks</li>
                                    <li>Automated fee payment integration</li>
                                    <li>Real-time application status tracking</li>
                                </ul>
                                <li>
                                    <span className="text-green-400 font-medium">
                                        Student Information System (SIS):
                                    </span>{" "}
                                    Track attendance, academic progress, and performance in real time.
                                </li>
                                <li>
                                    <span className="text-green-400 font-medium">
                                        Examination & Assessment:
                                    </span>{" "}
                                    Online and offline exam management with result automation and analytics.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Middle Row: Two Columns */}
                    <div className="grid lg:grid-cols-2 gap-8">

                        {/* Card 2: LMS */}
                        <div className="bg-[#1E4584] p-8 shadow-lg text-white flex flex-col justify-between min-h-[305px]">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Learning Management System (LMS)</h3>
                                <p className="text-slate-200 mb-6 text-sm">
                                    Enhance the teaching and learning experience with a digital-first approach.
                                </p>
                                <ul className="space-y-1 text-xs lg:text-sm">
                                    <li className="text-slate-200">
                                        <span className="text-[#22C55E] font-bold">Personalized Learning Paths:</span> Adaptive learning based on individual student progress.
                                    </li>
                                    <li className="text-slate-200">
                                        <span className="text-[#22C55E] font-bold">AI-Powered Analytics:</span> Insights into student engagement, performance trends, and learning patterns.
                                    </li>
                                    <li className="text-slate-200">
                                        <span className="text-[#22C55E] font-bold">Seamless Content Delivery:</span> Faculty can create, share, and assess course materials effortlessly.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Card 3: Campus Management */}
                        <div className="bg-[#1E4584] p-8 shadow-lg text-white flex flex-col justify-between min-h-[305px]">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Campus Management & Administration</h3>
                                <p className="text-slate-200 mb-6 text-sm">
                                    A unified system for efficient resource management and campus operations.
                                </p>
                                <ul className="space-y-1 text-xs lg:text-sm">
                                    <li className="text-slate-200">
                                        <span className="text-[#22C55E] font-bold">Timetable & Scheduling:</span> Automated scheduling for classes, exams, and faculty workload.
                                    </li>
                                    <li className="text-slate-200">
                                        <span className="text-[#22C55E] font-bold">Finance & Fees:</span> Transparent fee collection, grants, and scholarship management.
                                    </li>
                                    <li className="text-slate-200">
                                        <span className="text-[#22C55E] font-bold">Hostel & Transport:</span> End-to-end management of student accommodations and travel logistics.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Full Width - Career Development */}
                    <div className="w-full bg-[#1E4584] p-8 shadow-lg text-white">
                        <h3 className="text-2xl font-bold mb-4">Career Development & Placement</h3>
                        <p className="text-slate-200 mb-6 max-w-3xl text-sm">
                            Equip students with the right tools for career readiness and success.
                        </p>
                        <ul className="space-y-1 text-xs lg:text-sm">
                            <li className="flex gap-2 text-slate-200">
                                <span className="text-[#22C55E] font-bold">Career Counseling:</span>
                                <span>AI-driven insights to align students' strengths with suitable career paths.</span>
                            </li>
                            <li className="flex gap-2 text-slate-200">
                                <span className="text-[#22C55E] font-bold">Placement Assistance:</span>
                                <span>Job portal integration, resume building, and mock interview preparation.</span>
                            </li>
                            <li className="flex gap-2 text-slate-200">
                                <span className="text-[#22C55E] font-bold">Industry Collaboration:</span>
                                <span>Internships, skill-based training, and corporate tie-ups.</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
