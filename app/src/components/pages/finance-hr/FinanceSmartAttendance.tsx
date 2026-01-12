import React from 'react';

export default function FinanceSmartAttendance() {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Section Header */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#15803d] mb-12 lg:mb-16">
                    Empowering Financial & Human Capital
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mx-auto">

                    {/* Card 1: Financial Integrity */}
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
                                Financial Integrity
                            </h3>
                            <p className="text-[#F4F6DE] text-lg leading-relaxed mb-6 opacity-90">
                                Ensure transparency and accountability with automated fee collection,
                                real-time reconciliation, and audit-ready financial reporting.
                            </p>
                            <p className="text-[#F4F6DE] text-lg leading-relaxed opacity-90">
                                Eliminate revenue leakage and ensure compliance.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Workforce Excellence */}
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
                                Workforce Excellence
                            </h3>
                            <p className="text-[#F4F6DE] text-lg leading-relaxed mb-6 opacity-90">
                                Manage the entire employee lifecycle from recruitment to retirement,
                                including performance appraisal, training, and seamless payroll.
                            </p>
                            <p className="text-[#F4F6DE] text-lg leading-relaxed opacity-90">
                                Attract and retain top educational talent.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Governance (Full Width) */}
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
                                Governance & Compliance
                            </h3>
                            <p className="text-[#F4F6DE] text-lg leading-relaxed mb-4 opacity-90">
                                Maintain a single source of truth for all institutional data, ensuring compliance with regulatory bodies.
                            </p>
                            <p className="text-[#F4F6DE] text-lg leading-relaxed opacity-90">
                                Automated tracking of statutory requirements, committee meetings, and policy adherence.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
