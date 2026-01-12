import React from 'react';
import Image from 'next/image';

export default function SmartTools() {
    return (
        <section className="bg-white py-16 lg:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#008f51] mb-6">
                        Smart Tools for Integrity & Speed
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Leverage advanced technology to conduct cheat-proof, scalable, and error-free examinations.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                    {/* Card 1: Workflow Builder */}
                    <div className="bg-gradient-to-b from-[#F4F6DE] to-white rounded-3xl p-6 lg:p-8 flex flex-col items-center text-center">
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">Exam Configurator</h3>
                        <p className="text-slate-600 mb-8 max-w-sm">
                            Define exam patterns, grading logic, and eligibility criteria seamlessly.
                        </p>
                        <div className="relative w-full max-w-md aspect-[4/3]">
                            <Image
                                src="/assets/WorkflowBuilder_alumni.png"
                                alt="Exam Configuration Interface"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Card 2: Smart Data Collection */}
                    <div className="bg-gradient-to-b from-[#F4F6DE] to-white rounded-3xl p-6 lg:p-8 flex flex-col items-center text-center">
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">Secure Question Bank</h3>
                        <p className="text-slate-600 mb-8 max-w-sm">
                            Manage thousands of questions with encryption and randomized paper sets.
                        </p>
                        <div className="relative w-full max-w-md aspect-[4/3]">
                            <Image
                                src="/assets/Smart Data Collection.png"
                                alt="Question Bank Management"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Card 3: Actionable Insights */}
                    <div className="bg-gradient-to-b from-[#F4F6DE] to-white rounded-3xl p-6 lg:p-8 flex flex-col items-center text-center">
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">Result Analytics</h3>
                        <p className="text-slate-600 mb-8 max-w-sm">
                            Generate detailed subject-wise, student-wise, and center-wise performance reports.
                        </p>
                        <div className="relative w-full max-w-md aspect-[4/3]">
                            <Image
                                src="/assets/Actionable Insights.png"
                                alt="Exam Result Analytics"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Card 4: Key Features (Text Only) */}
                    <div className="bg-gradient-to-b from-[#F4F6DE] to-white rounded-3xl p-6 lg:p-8 flex flex-col items-center text-center justify-center">
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">Key Features of Our</h3>
                        <h3 className="text-2xl font-bold text-[#1E4584] mb-8">Examination System</h3>

                        <ul className="text-left space-y-4 max-w-lg">
                            <li className="flex gap-3 text-slate-700">
                                <span className="font-bold text-slate-900 min-w-fit">•</span>
                                <span>
                                    <strong className="text-slate-900">QR-Coded Answer Scripts</strong> – Mask student identity for unbiased evaluation.
                                </span>
                            </li>
                            <li className="flex gap-3 text-slate-700">
                                <span className="font-bold text-slate-900 min-w-fit">•</span>
                                <span>
                                    <strong className="text-slate-900">Question Paper Encryption</strong> – Prevent leakage with AES-256 secure delivery.
                                </span>
                            </li>
                            <li className="flex gap-3 text-slate-700">
                                <span className="font-bold text-slate-900 min-w-fit">•</span>
                                <span>
                                    <strong className="text-slate-900">Auto-Generated Grade Cards</strong> – Publish accurate results instantly.
                                </span>
                            </li>
                            <li className="flex gap-3 text-slate-700">
                                <span className="font-bold text-slate-900 min-w-fit">•</span>
                                <span>
                                    <strong className="text-slate-900">Digital Internal Assessment</strong> – Faculty upload marks securely online.
                                </span>
                            </li>
                            <li className="flex gap-3 text-slate-700">
                                <span className="font-bold text-slate-900 min-w-fit">•</span>
                                <span>
                                    <strong className="text-slate-900">Revaluation Workflow</strong> – Streamlined online rechecking process.
                                </span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
