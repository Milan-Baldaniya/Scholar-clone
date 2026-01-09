import React from 'react';

export default function SmartAttendance() {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Section Header */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#15803d] mb-12 lg:mb-16">
                    Smart Attendance Technologies for Higher Education
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mx-auto">

                    {/* Card 1: RFID Attendance */}
                    <div className="bg-[#2A3E5C] rounded-3xl p-8 lg:p-12 relative overflow-hidden min-h-[350px] flex flex-col justify-center">
                        {/* Vector Background */}
                        <div className="absolute inset-0 pointer-events-none">
                            <svg className="w-full h-full" viewBox="0 0 600 400" preserveAspectRatio="none">
                                <path
                                    d="M550 -50 C 450 50, 450 200, 550 300 C 600 350, 650 350, 700 300 V -50 Z"
                                    fill="none"
                                    stroke="#5373A3"
                                    strokeWidth="40"
                                />
                                <path
                                    d="M-50 250 C 50 250, 150 300, 200 450"
                                    fill="none"
                                    stroke="#5373A3"
                                    strokeWidth="40"
                                />
                            </svg>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold text-[#F4F6DE] mb-6">
                                RFID Attendance
                            </h3>
                            <p className="text-[#F4F6DE] text-lg leading-relaxed mb-6 opacity-90">
                                Students use RFID-enabled ID cards to tap at classroom or
                                campus entry points, marking attendance instantly.
                            </p>
                            <p className="text-[#F4F6DE] text-lg leading-relaxed opacity-90">
                                Ideal for large campuses—fast, contactless, and highly reliable.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Biometric Attendance */}
                    <div className="bg-[#2A3E5C] rounded-3xl p-8 lg:p-12 relative overflow-hidden min-h-[350px] flex flex-col justify-center">
                        {/* Vector Background */}
                        <div className="absolute inset-0 pointer-events-none">
                            <svg className="w-full h-full" viewBox="0 0 600 400" preserveAspectRatio="none">
                                <path
                                    d="M400 -50 C 450 100, 550 100, 650 50"
                                    fill="none"
                                    stroke="#5373A3"
                                    strokeWidth="40"
                                />
                                <path
                                    d="M350 450 C 450 300, 550 300, 650 450"
                                    fill="none"
                                    stroke="#5373A3"
                                    strokeWidth="40"
                                />
                            </svg>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold text-[#F4F6DE] mb-6">
                                Biometric Attendance
                            </h3>
                            <p className="text-[#F4F6DE] text-lg leading-relaxed mb-6 opacity-90">
                                Ensure 100% accurate attendance with fingerprint
                                & facial authentication at classroom entry points.
                            </p>
                            <p className="text-[#F4F6DE] text-lg leading-relaxed opacity-90">
                                Eliminates proxy attendance and enhances security.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: QR-Based (Full Width) */}
                    <div className="md:col-span-2 bg-[#2A3E5C] rounded-3xl p-8 lg:p-12 relative overflow-hidden min-h-[250px] flex flex-col justify-center">
                        {/* Vector Background */}
                        <div className="absolute inset-0 pointer-events-none">
                            <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
                                <path
                                    d="M-50 200 C 150 200, 250 350, 300 450"
                                    fill="none"
                                    stroke="#5373A3"
                                    strokeWidth="50"
                                />
                                <path
                                    d="M800 450 C 900 200, 1000 200, 1250 150"
                                    fill="none"
                                    stroke="#5373A3"
                                    strokeWidth="50"
                                />
                            </svg>
                        </div>

                        <div className="relative z-10 max-w-4xl">
                            <h3 className="text-3xl font-bold text-[#F4F6DE] mb-6">
                                QR-Based Mobile Attendance
                            </h3>
                            <p className="text-[#F4F6DE] text-lg leading-relaxed mb-4 opacity-90">
                                Students scan unique QR codes generated for each session using a mobile app.
                            </p>
                            <p className="text-[#F4F6DE] text-lg leading-relaxed opacity-90">
                                Geo-fencing & location-based validation to ensure attendance is marked only in authorized areas.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
