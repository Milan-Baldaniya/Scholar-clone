'use client';

import React from 'react';
import { CheckCircle2, BookOpen, GraduationCap, FileSearch, Award } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: "Registration & Coursework",
        description: "Digital scholar registration and coursework tracking with automated compliance checks.",
        icon: <BookOpen className="w-6 h-6" />
    },
    {
        id: 2,
        title: "Research Progress",
        description: "Continuous monitoring of research milestones, guide interactions, and committee approvals.",
        icon: <FileSearch className="w-6 h-6" />
    },
    {
        id: 3,
        title: "Thesis Submission",
        description: "Streamlined workflow for thesis submission, plagiarism checks, and evaluation.",
        icon: <CheckCircle2 className="w-6 h-6" />
    },
    {
        id: 4,
        title: "Degree Award",
        description: "Secure maintenance of evaluation records and generation of degree certificates.",
        icon: <Award className="w-6 h-6" />
    }
];

export default function PhDLifecycle() {
    return (
        <section className="py-20 lg:py-28 bg-white" id="features">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6">
                        <GraduationCap className="w-4 h-4" />
                        Ph.D. Management
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        End-to-End Doctoral Governance
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        A structured, digital ecosystem that manages the entire lifecycle of a research scholar—
                        from enrollment to convocation.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[2.5rem] left-[10%] right-[10%] h-[2px] bg-slate-100 z-0">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-[75%]" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        {steps.map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center group">
                                <div className="w-20 h-20 rounded-2xl bg-white border border-slate-100 shadow-xl flex items-center justify-center mb-8 group-hover:-translate-y-2 transition-transform duration-300 relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-100 group-hover:opacity-0 transition-opacity" />
                                    <div className="absolute inset-0 bg-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity text-white" />
                                    <div className="relative z-10 text-blue-600 group-hover:text-white transition-colors">
                                        {step.icon}
                                    </div>
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm border-2 border-white">
                                        {step.id}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed px-2">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h4 className="font-bold text-slate-800 text-lg mb-1">
                            Compliance Ready
                        </h4>
                        <p className="text-slate-600 text-sm">
                            Automated audit trails ensure all regulatory standards are met efficiently.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800 text-lg mb-1">
                            Research Governance
                        </h4>
                        <p className="text-slate-600 text-sm">
                            Transparent tracking improves institutional research quality and output.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
