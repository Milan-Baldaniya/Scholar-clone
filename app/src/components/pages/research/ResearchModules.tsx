'use client';

import React, { useState } from 'react';
import {
    GraduationCap, Network, BrainCircuit, RefreshCcw, ShieldCheck,
    ChevronRight, X, CheckCircle2, Search, Share2, Award,
    FileText, Lock, Users, BarChart3, Globe
} from 'lucide-react';

interface ModuleData {
    icon: React.ReactNode;
    title: string;
    description: string;
    benefits: string[];
    whyChooseUs: string[];
}

const modules: ModuleData[] = [
    {
        icon: <GraduationCap className="w-8 h-8" />,
        title: "Ph.D. Module (Registration to Degree)",
        description: "A complete digital lifecycle management system for doctoral programs, from scholar enrollment to final degree award.",
        benefits: [
            "Scholar registration and coursework tracked digitally.",
            "Research progress and milestones monitored in real-time.",
            "Guide and committee approvals managed seamlessly.",
            "Thesis submission workflows fully automated."
        ],
        whyChooseUs: [
            "Research governance improves significantly.",
            "Compliance with UGC/institutional norms ensured."
        ]
    },
    {
        icon: <Network className="w-8 h-8" />,
        title: "Research & Collaborative Platform",
        description: "A centralized platform to foster academic collaboration, track projects, managed funding, and document research output.",
        benefits: [
            "Projects and government grants tracked centrally.",
            "Interdisciplinary and external collaborations enabled.",
            "Research outputs (papers, patents) documented.",
            "Funding utilization tracked for financial compliance."
        ],
        whyChooseUs: [
            "Research excellence is promoted.",
            "Knowledge sharing becomes seamless."
        ]
    },
    {
        icon: <BrainCircuit className="w-8 h-8" />,
        title: "Institutional Analytics & AI Insights",
        description: "Advanced AI-driven intelligence to analyze institutional data, identify trends, and support strategic decision-making.",
        benefits: [
            "AI models analyze performance across departments.",
            "Predictive insights support long-term planning.",
            "Real-time dashboards provide total visibility.",
            "Performance benchmarking against standards."
        ],
        whyChooseUs: [
            "Decision-making becomes data-driven.",
            "Institutional growth is strategically guided."
        ]
    },
    {
        icon: <RefreshCcw className="w-8 h-8" />,
        title: "Data & System Migration",
        description: "Expert utilities ensuring secure, accurate, and zero-loss transition from legacy software to modern ERP systems.",
        benefits: [
            "Legacy data mapped accurately to new schemas.",
            "Data integrity preserved during transfer.",
            "Downtime minimized to near-zero.",
            "Historical records retained for continuity."
        ],
        whyChooseUs: [
            "Operational continuity is maintained.",
            "System adoption improves with clean data."
        ]
    },
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        title: "App & Database Security on Cloud",
        description: "Bank-grade security infrastructure protecting your institutional data with encryption, access controls, and constant monitoring.",
        benefits: [
            "Data encryption protects sensitive info.",
            "Role-based access controls prevent unauthorized use.",
            "Automated backup and disaster recovery.",
            "24/7 Threat monitoring and audit logging."
        ],
        whyChooseUs: [
            "Data trust involves significantly.",
            "Cyber resilience is strengthened."
        ]
    }
];

export default function ResearchModules() {
    const [selectedModule, setSelectedModule] = useState<ModuleData | null>(null);

    return (
        <section className="w-full py-16 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A3E5C] mb-4 font-['Nunito']">
                        Integrated Research Ecosystem
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A suite of specialized modules designed to advance academic research and institutional governance.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {modules.map((module, index) => (
                        <div
                            key={index}
                            className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] xl:w-[calc(25%-18px)] group relative h-[280px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100"
                        >
                            {/* Card Content (Default State) */}
                            <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center transition-transform duration-300 group-hover:-translate-y-4">
                                <div className="p-4 bg-[#2A3E5C]/10 rounded-full text-[#2A3E5C] mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {module.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 leading-tight font-['Mukta']">
                                    {module.title}
                                </h3>
                            </div>

                            {/* Hover Overlay (Slide Up with Action) */}
                            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-[#2A3E5C] via-[#2A3E5C] to-[#395173] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col items-center justify-center p-8 text-center">
                                <h3 className="text-xl font-bold text-white mb-4 font-['Mukta']">
                                    {module.title}
                                </h3>

                                <button
                                    onClick={() => setSelectedModule(module)}
                                    className="px-6 py-3 bg-white text-[#2A3E5C] rounded-full font-bold text-sm uppercase tracking-wider hover:bg-[#5DDBD3] hover:text-[#170405] transition-colors shadow-lg flex items-center gap-2"
                                    suppressHydrationWarning
                                >
                                    View Details
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Detailed Modal */}
            {selectedModule && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                        onClick={() => setSelectedModule(null)}
                    ></div>

                    <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 p-0 flex flex-col max-h-[90vh]">

                        {/* Modal Header */}
                        <div className="bg-[#2A3E5C] p-6 sm:p-8 flex justify-between items-start shrink-0">
                            <div className="flex items-center gap-4 text-white">
                                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md">
                                    {selectedModule.icon}
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-bold font-['Mukta']">
                                    {selectedModule.title}
                                </h3>
                            </div>
                            <button
                                onClick={() => setSelectedModule(null)}
                                className="text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Modal Content - Scrollable */}
                        <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">

                            {/* Description */}
                            <div className="mb-8">
                                <h4 className="text-lg font-bold text-[#2A3E5C] mb-3 uppercase tracking-wide opacity-80">Overview</h4>
                                <p className="text-lg text-gray-700 leading-relaxed font-['Hind_Guntur']">
                                    {selectedModule.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Benefits */}
                                <div>
                                    <h4 className="text-lg font-bold text-[#00804c] mb-4 uppercase tracking-wide flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5" /> Key Benefits
                                    </h4>
                                    <ul className="space-y-3">
                                        {selectedModule.benefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#00804c] mt-2 shrink-0"></div>
                                                <span className="text-gray-700 font-['Hind_Guntur']">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Why Choose Us */}
                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                    <h4 className="text-lg font-bold text-[#2A3E5C] mb-4 uppercase tracking-wide">
                                        Impact
                                    </h4>
                                    <ul className="space-y-3">
                                        {selectedModule.whyChooseUs.map((reason, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#2A3E5C] mt-2 shrink-0"></div>
                                                <span className="text-gray-700 font-medium font-['Mukta']">{reason}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end shrink-0">
                            <button
                                onClick={() => setSelectedModule(null)}
                                className="px-6 py-2.5 bg-[#2A3E5C] hover:bg-[#1a237e] text-white font-medium rounded-xl transition-colors shadow-lg hover:shadow-xl"
                            >
                                Close Details
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
