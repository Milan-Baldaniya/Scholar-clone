import React from 'react';

export default function TransportBenefits() {
    return (
        <section className="py-20 lg:py-28 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-8">

                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-[#2E8B57] text-left mb-16 max-w-4xl">
                    Why Does Your Institution Need<br className="hidden lg:block" />
                    a Smart Transport System?
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Column: Key Benefits Box */}
                    <div className="bg-[#F4F6DE] rounded-[40px] p-8 lg:p-12 shadow-sm">
                        <h3 className="text-2xl font-bold text-[#1E3A8A] mb-8">
                            Key Benefits:
                        </h3>

                        <ul className="space-y-6">
                            <li className="flex items-start gap-3">
                                <span className="mt-2 w-2 h-2 rounded-full bg-[#1E488F] flex-shrink-0" />
                                <div>
                                    <span className="font-bold text-[#1E488F] block text-lg mb-1">Real-time GPS Tracking</span>
                                    <span className="text-[#4b6a9c] font-medium"> Ensure student safety with live location updates.</span>
                                </div>
                            </li>

                            {/* Nested Item Style Indent */}
                            <li className="flex items-start gap-3 pl-8">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1E488F] flex-shrink-0" />
                                <div>
                                    <span className="font-bold text-[#1E488F]">Smart Route Optimization</span>
                                    <span className="text-[#4b6a9c]"> – Reduce fuel costs and travel time.</span>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="mt-2 w-2 h-2 rounded-full bg-[#1E488F] flex-shrink-0" />
                                <div>
                                    <span className="font-bold text-[#1E488F]">Fleet Maintenance Alerts</span>
                                    <span className="text-[#4b6a9c]"> – Prevent breakdowns with predictive servicing.</span>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="mt-2 w-2 h-2 rounded-full bg-[#1E488F] flex-shrink-0" />
                                <div>
                                    <span className="font-bold text-[#1E488F]">Cost & Budget Analytics</span>
                                    <span className="text-[#4b6a9c]"> – Monitor and reduce operational expenses.</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Right Column: Narrative Text */}
                    <div className="flex flex-col justify-center h-full pt-4">
                        <p className="text-slate-700 text-lg leading-loose font-medium">
                            Managing transportation for a higher education institution is complex. Manual
                            processes lead to inefficiencies, safety risks, and high operational costs. Our AI-
                            powered <span className="font-bold text-slate-900">Transport & Vehicle Management System (TVMS)</span> provides real-time
                            insights, automated scheduling, and seamless student-tracking, ensuring a
                            safe, cost-effective, and hassle-free transport experience.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
