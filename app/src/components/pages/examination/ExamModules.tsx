'use client';

import React, { useState } from 'react';
import {
    FileText, Settings, MapPin, Database,
    MonitorCheck, UploadCloud, GraduationCap,
    RefreshCw, ChevronRight, X, CheckCircle2
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
        icon: <FileText className="w-8 h-8" />,
        title: "Online Exam Form & Admit Card",
        description: "This module digitizes exam application and admit card generation. Students submit exam forms online with validation checks.",
        benefits: [
            "Students submit exam forms online with validation checks.",
            "Fee integration ensures accurate payment processing.",
            "Admit cards are generated automatically.",
            "Hall ticket errors are minimized.",
            "Bulk downloads and printing are supported."
        ],
        whyChooseUs: [
            "Exam eligibility is verified digitally.",
            "Notifications inform students of updates.",
            "Administrative workload is reduced.",
            "Exam readiness improves significantly."
        ]
    },
    {
        icon: <Settings className="w-8 h-8" />,
        title: "Pre-Exam, On-Exam & Post-Exam",
        description: "This system automates the complete examination lifecycle. Exam schedules and workflows are configured centrally.",
        benefits: [
            "Exam schedules and workflows are configured centrally.",
            "On-exam monitoring ensures smooth conduct.",
            "Attendance and incident logs are captured digitally.",
            "Post-exam processing is automated.",
            "Manual intervention is minimized."
        ],
        whyChooseUs: [
            "Compliance timelines are maintained.",
            "Reports support audit requirements.",
            "Operational efficiency improves.",
            "Examination integrity is ensured."
        ]
    },
    {
        icon: <MapPin className="w-8 h-8" />,
        title: "Exam Centre Management",
        description: "This module manages exam centers and capacity planning. Center allocation is automated based on rules.",
        benefits: [
            "Center allocation is automated based on rules.",
            "Invigilator assignments are managed centrally.",
            "Seating arrangements are optimized.",
            "Real-time monitoring improves control.",
            "Logistics and resource planning are simplified."
        ],
        whyChooseUs: [
            "Compliance with exam guidelines is ensured.",
            "Reports support operational review.",
            "Manual coordination is reduced.",
            "Exam center operations become seamless."
        ]
    },
    {
        icon: <Database className="w-8 h-8" />,
        title: "Digital Question Bank & Paper",
        description: "This system manages secure question repositories. Questions are categorized by subject and difficulty.",
        benefits: [
            "Questions are categorized by subject and difficulty.",
            "Randomized paper generation ensures confidentiality.",
            "Access controls protect sensitive content.",
            "Paper patterns are configurable.",
            "Versioning supports multiple exam sets."
        ],
        whyChooseUs: [
            "Leakage risks are minimized.",
            "Faculty collaboration is enabled.",
            "Audit trails ensure accountability.",
            "Exam quality is maintained."
        ]
    },
    {
        icon: <MonitorCheck className="w-8 h-8" />,
        title: "On-Screen Evaluation System",
        description: "This module enables digital answer script evaluation. Evaluators assess scripts securely online.",
        benefits: [
            "Evaluators assess scripts securely online.",
            "Marking schemes are standardized.",
            "Evaluation progress is tracked in real time.",
            "Bias and errors are reduced.",
            "Turnaround time is significantly improved."
        ],
        whyChooseUs: [
            "Secure access protects confidentiality.",
            "Audit logs ensure transparency.",
            "Result accuracy improves.",
            "Manual paper handling is eliminated."
        ]
    },
    {
        icon: <UploadCloud className="w-8 h-8" />,
        title: "Online Internal Assessment",
        description: "This system digitizes internal assessment entry. Faculty submit marks securely online.",
        benefits: [
            "Faculty submit marks securely online.",
            "Validation rules prevent errors.",
            "Submission timelines are enforced automatically.",
            "Students receive transparent updates.",
            "Data integrates with final results."
        ],
        whyChooseUs: [
            "Approval workflows ensure accuracy.",
            "Reports support academic monitoring.",
            "Manual registers are eliminated.",
            "Assessment reliability improves."
        ]
    },
    {
        icon: <GraduationCap className="w-8 h-8" />,
        title: "Result Processing & Grade Cards",
        description: "This module automates result computation. Marks aggregation follows academic rules.",
        benefits: [
            "Marks aggregation follows academic rules.",
            "Grade calculation is error-free.",
            "Grade cards are generated instantly.",
            "Student access is secured.",
            "Bulk publishing is supported."
        ],
        whyChooseUs: [
            "Historical records are maintained.",
            "Corrections follow defined workflows.",
            "Compliance requirements are met.",
            "Result declaration becomes efficient."
        ]
    },
    {
        icon: <RefreshCw className="w-8 h-8" />,
        title: "Rechecking & Reassessment",
        description: "This system manages result re-evaluation requests. Students apply digitally for rechecking.",
        benefits: [
            "Students apply digitally for rechecking.",
            "Approval workflows ensure fairness.",
            "Reassessment tracking is transparent.",
            "Updated results are published automatically.",
            "Audit trails ensure accountability."
        ],
        whyChooseUs: [
            "Communication keeps students informed.",
            "Manual processing is eliminated.",
            "Dispute resolution improves.",
            "Trust in evaluation increases."
        ]
    }
];

export default function ExamModules() {
    const [selectedModule, setSelectedModule] = useState<ModuleData | null>(null);

    return (
        <section className="w-full py-16 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A3E5C] mb-4">
                        Examination & Assessment Solutions
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        End-to-end automation for a secure, transparent, and efficient examination lifecycle.
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
                                <h3 className="text-xl font-bold text-gray-800 leading-tight">
                                    {module.title}
                                </h3>
                            </div>

                            {/* Hover Overlay (Slide Up with Action) */}
                            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-[#2A3E5C] via-[#2A3E5C] to-[#395173] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col items-center justify-center p-8 text-center">
                                <h3 className="text-xl font-bold text-white mb-4">
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
                                <h3 className="text-2xl sm:text-3xl font-bold">
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
                                <p className="text-lg text-gray-700 leading-relaxed">
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
                                                <span className="text-gray-700">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Why Choose Us */}
                                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                    <h4 className="text-lg font-bold text-[#2A3E5C] mb-4 uppercase tracking-wide">
                                        Why Choose This?
                                    </h4>
                                    <ul className="space-y-3">
                                        {selectedModule.whyChooseUs.map((reason, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#2A3E5C] mt-2 shrink-0"></div>
                                                <span className="text-gray-700 font-medium">{reason}</span>
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
