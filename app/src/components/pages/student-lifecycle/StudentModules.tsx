'use client';

import React, { useState } from 'react';
import {
    GraduationCap, ClipboardCheck, FileCheck, Users,
    ArrowRightLeft, FileCog, UserCheck, Home,
    Trophy, Briefcase, LayoutDashboard, Smartphone,
    Tent, Globe, ChevronRight, X, CheckCircle2
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
        icon: <Users className="w-8 h-8" />,
        title: "Education CRM",
        description: "This module manages student lead and inquiry lifecycle. Prospective student interactions are tracked centrally.",
        benefits: [
            "Automated follow-ups improve conversion rates.",
            "Counselors manage admissions efficiently.",
            "Campaign performance is analyzed.",
            "Communication history is maintained."
        ],
        whyChooseUs: [
            "Data-driven admissions planning is enabled.",
            "Integration with SIS ensures continuity."
        ]
    },
    {
        icon: <FileCheck className="w-8 h-8" />,
        title: "Online Entrance Examination",
        description: "This system conducts secure online entrance exams. Exam registration and scheduling are automated.",
        benefits: [
            "Question delivery is controlled and secure.",
            "Remote and center-based exams are supported.",
            "AI proctoring prevents malpractice.",
            "Real-time monitoring ensures integrity."
        ],
        whyChooseUs: [
            "Results are processed automatically.",
            "Scalability supports large candidate volumes."
        ]
    },
    {
        icon: <ClipboardCheck className="w-8 h-8" />,
        title: "Online Pre-Registration & Eligibility",
        description: "This module simplifies pre-admission processes. Candidates register online with minimal effort.",
        benefits: [
            "Eligibility rules are validated automatically.",
            "Document uploads are verified digitally.",
            "Applicants receive instant status updates.",
            "Data accuracy improves admissions quality."
        ],
        whyChooseUs: [
            "Counselors access verified applicant data.",
            "Duplicate entries are avoided."
        ]
    },
    {
        icon: <GraduationCap className="w-8 h-8" />,
        title: "Student Information System (SIS)",
        description: "This system is the core student data repository. Academic, personal, and administrative records are centralized.",
        benefits: [
            "Data consistency is maintained across modules.",
            "Secure access protects student privacy.",
            "Lifecycle tracking ensures continuity.",
            "Reports support academic monitoring."
        ],
        whyChooseUs: [
            "Integration with exams and finance ensures accuracy.",
            "Manual registers are eliminated."
        ]
    },
    {
        icon: <ArrowRightLeft className="w-8 h-8" />,
        title: "Admission & Migration Management",
        description: "This module manages admissions and transfers digitally. Application processing follows structured workflows.",
        benefits: [
            "Seat allocation is automated and transparent.",
            "Migration and transfer records are maintained.",
            "Compliance documentation is tracked.",
            "Approvals are streamlined across departments."
        ],
        whyChooseUs: [
            "Audit readiness is ensured.",
            "Processing delays are reduced."
        ]
    },
    {
        icon: <FileCog className="w-8 h-8" />,
        title: "Academic Data Configuration",
        description: "This system defines academic structures digitally. Programs, courses, credits, and semesters are configured.",
        benefits: [
            "Regulatory compliance is ensured.",
            "Curriculum changes are managed efficiently.",
            "Academic rules are standardized.",
            "Integration with exams and SIS ensures consistency."
        ],
        whyChooseUs: [
            "Configuration errors are minimized.",
            "Reports reflect accurate academic data."
        ]
    },
    {
        icon: <UserCheck className="w-8 h-8" />,
        title: "Attendance Tracking System",
        description: "This module monitors student and staff attendance. Multiple attendance modes are supported.",
        benefits: [
            "Real-time data ensures accuracy.",
            "Compliance alerts prevent shortages.",
            "Reports support academic monitoring.",
            "Integration with payroll and assessments is seamless."
        ],
        whyChooseUs: [
            "Manual attendance is eliminated.",
            "Transparency improves accountability."
        ]
    },
    {
        icon: <Home className="w-8 h-8" />,
        title: "Hostel & Accommodation Management",
        description: "This system manages hostel operations digitally. Room allocation follows defined policies.",
        benefits: [
            "Occupancy is tracked in real time.",
            "Fee integration ensures billing accuracy.",
            "Maintenance requests are managed online.",
            "Student safety records are maintained."
        ],
        whyChooseUs: [
            "Vacancy tracking supports planning.",
            "Reports support audits."
        ]
    },
    {
        icon: <Trophy className="w-8 h-8" />,
        title: "Extracurricular Activity Management",
        description: "This module tracks student participation beyond academics. Clubs, sports, and activities are managed centrally.",
        benefits: [
            "Participation records support holistic evaluation.",
            "Event schedules and approvals are streamlined.",
            "Faculty coordinators manage activities efficiently.",
            "Certificates and credits are tracked."
        ],
        whyChooseUs: [
            "Reports support accreditation needs.",
            "Student engagement is encouraged."
        ]
    },
    {
        icon: <Briefcase className="w-8 h-8" />,
        title: "Career Counseling & Development",
        description: "This system supports student career readiness. Counseling sessions are scheduled digitally.",
        benefits: [
            "Skill development activities are tracked.",
            "Resume and profile management is enabled.",
            "Placement drives are coordinated centrally.",
            "Employer engagement is maintained."
        ],
        whyChooseUs: [
            "Student progress is monitored.",
            "Analytics support placement strategy."
        ]
    },
    {
        icon: <LayoutDashboard className="w-8 h-8" />,
        title: "Student Portal",
        description: "This portal provides students centralized access. Academic records are available anytime.",
        benefits: [
            "Fee payments and applications are simplified.",
            "Notifications ensure timely updates.",
            "Exam and attendance details are accessible.",
            "Feedback submission is enabled."
        ],
        whyChooseUs: [
            "Mobile-friendly design improves usability.",
            "Self-service reduces administrative load."
        ]
    },
    {
        icon: <Smartphone className="w-8 h-8" />,
        title: "Mobile App",
        description: "This app extends ERP access on mobile devices. Students and staff access information anytime.",
        benefits: [
            "Push notifications ensure instant alerts.",
            "Attendance and schedules are easily viewed.",
            "Secure login protects data.",
            "User-friendly interface improves engagement."
        ],
        whyChooseUs: [
            "Offline features support flexibility.",
            "Integration ensures real-time updates."
        ]
    },
    {
        icon: <Tent className="w-8 h-8" />,
        title: "Club Management",
        description: "This module manages academic and cultural clubs. Membership registration is digitized.",
        benefits: [
            "Activity planning and approvals are streamlined.",
            "Participation tracking supports evaluation.",
            "Faculty oversight ensures governance.",
            "Event documentation is maintained."
        ],
        whyChooseUs: [
            "Reports support accreditation.",
            "Student engagement is promoted."
        ]
    },
    {
        icon: <Globe className="w-8 h-8" />,
        title: "Student Migration / Transfer",
        description: "This system manages student movement between institutions. Transfer requests are processed digitally.",
        benefits: [
            "Document verification is automated.",
            "Approval workflows ensure compliance.",
            "Academic continuity is maintained.",
            "Migration history is securely stored."
        ],
        whyChooseUs: [
            "Reports support audits.",
            "Manual errors are minimized."
        ]
    }
];

export default function StudentModules() {
    const [selectedModule, setSelectedModule] = useState<ModuleData | null>(null);

    return (
        <section className="w-full py-16 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A3E5C] mb-4">
                        Comprehensive Student Lifecycle Suite
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        From first inquiry to alumni success—a unified ecosystem supporting every step of the student journey.
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
