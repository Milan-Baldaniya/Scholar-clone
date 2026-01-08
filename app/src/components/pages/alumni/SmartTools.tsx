import React from 'react';
import Image from 'next/image';

export default function SmartTools() {
    return (
        <section className="bg-white py-16 lg:py-24 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#008f51] mb-6">
                        Smart tools
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Use our tools to create the perfect product for you. With these, it's easy to collaborate
                        and go live in just a few clicks.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                    {/* Card 1: Workflow Builder */}
                    <div className="bg-gradient-to-b from-[#F4F6DE] to-white rounded-[40px] p-6 lg:p-8 flex flex-col items-center text-center">
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">Workflow Builder</h3>
                        <p className="text-slate-600 mb-8 max-w-sm">
                            Create structured processes to store, update, and manage alumni records effortlessly.
                        </p>
                        <div className="relative w-full max-w-md aspect-[4/3]">
                            <Image
                                src="/assets/WorkflowBuilder_alumni.png"
                                alt="Workflow Builder Interface"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Card 2: Smart Data Collection */}
                    <div className="bg-gradient-to-b from-[#F4F6DE] to-white rounded-[40px] p-6 lg:p-8 flex flex-col items-center text-center">
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">Smart Data Collection</h3>
                        <p className="text-slate-600 mb-8 max-w-sm">
                            Collect and update alumni information with user-friendly, custom-tailored forms.
                        </p>
                        <div className="relative w-full max-w-md aspect-[4/3]">
                            <Image
                                src="/assets/Smart Data Collection.png"
                                alt="Smart Data Collection Interface"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Card 3: Actionable Insights */}
                    <div className="bg-gradient-to-b from-[#F4F6DE] to-white rounded-[40px] p-6 lg:p-8 flex flex-col items-center text-center">
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">Actionable Insights</h3>
                        <p className="text-slate-600 mb-8 max-w-sm">
                            Analyze alumni engagement and trends with detailed, secure reports.
                        </p>
                        <div className="relative w-full max-w-md aspect-[4/3]">
                            <Image
                                src="/assets/Actionable Insights.png"
                                alt="Actionable Insights Dashboard"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Card 4: Key Features (Text Only) */}
                    <div className="bg-gradient-to-b from-[#F4F6DE] to-white rounded-[40px] p-6 lg:p-8 flex flex-col items-center text-center justify-center">
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">Key Features of Our</h3>
                        <h3 className="text-2xl font-bold text-[#1E4584] mb-8">Alumni Management System</h3>

                        <ul className="text-left space-y-4 max-w-lg">
                            <li className="flex gap-3 text-slate-700">
                                <span className="font-bold text-slate-900 min-w-fit">•</span>
                                <span>
                                    <strong className="text-slate-900">Centralized Alumni Database</strong> – Securely store and access all records in one place.
                                </span>
                            </li>
                            <li className="flex gap-3 text-slate-700">
                                <span className="font-bold text-slate-900 min-w-fit">•</span>
                                <span>
                                    <strong className="text-slate-900">Advanced Search & Filters</strong> – Quickly find alumni details with precision.
                                </span>
                            </li>
                            <li className="flex gap-3 text-slate-700">
                                <span className="font-bold text-slate-900 min-w-fit">•</span>
                                <span>
                                    <strong className="text-slate-900">Batch & Department Organization</strong> – Categorize alumni by year, course, or achievements.
                                </span>
                            </li>
                            <li className="flex gap-3 text-slate-700">
                                <span className="font-bold text-slate-900 min-w-fit">•</span>
                                <span>
                                    <strong className="text-slate-900">Top-Tier Security & Scalability</strong> – Cloud-based protection for sensitive data.
                                </span>
                            </li>
                            <li className="flex gap-3 text-slate-700">
                                <span className="font-bold text-slate-900 min-w-fit">•</span>
                                <span>
                                    <strong className="text-slate-900">Controlled Access Management</strong> – Set roles and permissions for secure staff access.
                                </span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
