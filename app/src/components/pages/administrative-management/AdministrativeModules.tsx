'use client';

import React, { useState } from 'react';
import {
    School, Users, CalendarClock, Bus, PackageSearch,
    Award, FileBadge, Globe, MessageSquareWarning,
    MessageCircleHeart, FileText, Hotel, CalendarDays,
    GraduationCap, Globe2, BellRing, Network,
    ShieldCheck, BarChart4, X, ChevronRight, CheckCircle2
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
        icon: <School className="w-8 h-8" />,
        title: "Higher Education Institute Management",
        description: "A centralized digital platform that serves as the backbone of your institution. It integrates every department, campus, and stakeholder into a single, unified ecosystem, ensuring that academic planning, student services, finance, and governance operate in perfect synchronization.",
        benefits: [
            "Seamless integration of all academic and admin departments.",
            "Real-time dashboards for data-driven decision making.",
            "Role-based access ensuring bank-grade data security.",
            "Automated workflows reducing manual paperwork by 70%."
        ],
        whyChooseUs: [
            "Scalable architecture that grows with your institution.",
            "End-to-end digitalization from admission to alumni."
        ]
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Alumni Management System",
        description: "Build and maintain lifelong relationships with your alumni network. This module helps track engagement, manage contributions, and foster a vibrant community that supports the institution's growth and branding.",
        benefits: [
            "Comprehensive alumni profiling and career tracking.",
            "Tools for managing reunions, events, and fundraising.",
            "Job portals and networking opportunities for graduates.",
            "Analytics to measure alumni engagement impact."
        ],
        whyChooseUs: [
            "Turn your alumni into your strongest brand ambassadors.",
            "Secure platform protecting sensitive personal data."
        ]
    },
    {
        icon: <CalendarClock className="w-8 h-8" />,
        title: "Timetable & Attendance",
        description: "Automate the complex scheduling of classes and tracking of attendance using advanced technologies like RFID, Biometrics, and Mobile QR. Ensure compliance and improve punctuality effortlessly.",
        benefits: [
            "Zero-conflict automated timetable scheduling.",
            "Real-time attendance tracking via multiple biometric modes.",
            "Instant notifications to parents for absenteeism.",
            "Integration with academic records for eligibility checks."
        ],
        whyChooseUs: [
            "Eliminate proxy attendance and manual errors.",
            "Optimize resource utilization (classrooms, labs)."
        ]
    },
    {
        icon: <Bus className="w-8 h-8" />,
        title: "Transport & Vehicle Management",
        description: "Manage your entire fleet of vehicles with precision. From route optimization and fuel tracking to student safety and driver performance, this system handles the logistics so you don't have to.",
        benefits: [
            "GPS-enabled real-time vehicle tracking.",
            "Automated route optimization to save fuel costs.",
            "Maintenance alerts and insurance renewal tracking.",
            "Student safety apps for pick-up/drop-off status."
        ],
        whyChooseUs: [
            "Ensure student safety with live monitoring.",
            "Reduce operational transport costs by up to 20%."
        ]
    },
    {
        icon: <PackageSearch className="w-8 h-8" />,
        title: "Inventory & Asset Management",
        description: "Digitize your procurement and asset management lifecycle. Track every item from purchase request to disposal, ensuring accountability, preventing loss, and optimizing inventory levels.",
        benefits: [
            "Centralized vendor management and purchase history.",
            "Barcode/QR tagging for effortless asset audits.",
            "Automated depreciation calculations for finance.",
            "Real-time stock alerts to prevent shortages."
        ],
        whyChooseUs: [
            "Total visibility into institutional assets and spending.",
            "Prevent pilferage and misuse of resources."
        ]
    },
    {
        icon: <Award className="w-8 h-8" />,
        title: "Accreditation & Compliance",
        description: "Stay audit-ready 24/7. This system streamlines the preparation for NAAC, NBA, NIRF, and other regulatory bodies by centralizing data collection and evidence management.",
        benefits: [
            "Central repository for all compliance-related documents.",
            "Automated data mapping to specific accreditation criteria.",
            "Gap analysis tools to identify improvement areas.",
            "One-click report generation for inspection teams."
        ],
        whyChooseUs: [
            "Reduce the stress and chaos of accreditation visits.",
            "Ensure continuous compliance, not just episodic readiness."
        ]
    },
    {
        icon: <FileBadge className="w-8 h-8" />,
        title: "Affiliation & Licensing",
        description: "Navigate the complex landscape of statutory compliances effortlessly. Manage affiliations, track license renewals, and ensure your institution never misses a critical regulatory deadline.",
        benefits: [
            "Automated reminders for license and affiliation renewals.",
            "Digital checklist for LIC/AAA committee inspections.",
            "Secure storage for statutory documents and approvals.",
            "Workflow-based scrutiny for new course applications."
        ],
        whyChooseUs: [
            "Zero penalties due to missed deadlines.",
            "Maintain impeccable standing with regulatory bodies."
        ]
    },
    {
        icon: <Globe className="w-8 h-8" />,
        title: "Website Management System",
        description: "Empower non-technical staff to keep the institutional website dynamic and up-to-date. Manage news, events, faculty profiles, and notifications centrally without writing a single line of code.",
        benefits: [
            "User-friendly CMS designed for educational content.",
            "SEO-optimized structure to improve online visibility.",
            "Role-based publishing workflow (Draft -> Approve -> Publish).",
            "Responsive designs that look great on any device."
        ],
        whyChooseUs: [
            "Keep stakeholders informed in real-time.",
            "Reduce dependency on IT teams for basic updates."
        ]
    },
    {
        icon: <MessageSquareWarning className="w-8 h-8" />,
        title: "Lapses & Grievance Management",
        description: "Foster a transparent and trust-based environment with a confidential grievance redressal mechanism. Ensure that every voice is heard and every issue is resolved within a defined timeline.",
        benefits: [
            "Multi-channel complaint lodging (Web, Mobile, Email).",
            "Automated routing to the concerned redressal committee.",
            "Escalation matrix for unresolved issues.",
            "Anonymous reporting options for sensitive matters."
        ],
        whyChooseUs: [
            "Build trust with students and staff through transparency.",
            "Ensure compliance with UGC/AICTE grievance norms."
        ]
    },
    {
        icon: <MessageCircleHeart className="w-8 h-8" />,
        title: "360° Feedback System",
        description: "Drive continuous quality improvement by collecting holistic feedback from all stakeholders—students, faculty, alumni, parents, and employers. Turn perceptions into actionable data.",
        benefits: [
            "Customizable survey templates for Course/Faculty/Infra.",
            "Complete anonymity to ensure honest responses.",
            "Graphic analytics and trend analysis reports.",
            "Action-taken reports to close the feedback loop."
        ],
        whyChooseUs: [
            "Foster a culture of continuous improvement.",
            "Data-backed performance appraisals for faculty."
        ]
    },
    {
        icon: <FileText className="w-8 h-8" />,
        title: "Application & Document Tracking",
        description: "End the chaos of lost files and delayed approvals. This module tracks the entire lifecycle of every application and file within the higher education institute, providing real-time status visibility to all stakeholders.",
        benefits: [
            "Unique tracking ID for every file/application.",
            "Visual journey maps showing current file status.",
            "SLA monitoring to identify bottlenecks in processing.",
            "Digital archiving for instant retrieval."
        ],
        whyChooseUs: [
            "Eliminate 'lost file' excuses forever.",
            "Dramatically improve administrative processing speed."
        ]
    },
    {
        icon: <Hotel className="w-8 h-8" />,
        title: "Guest House & Hall Booking",
        description: "Maximize the utilization of your physical assets. A digital reservation system for guest houses, seminar halls, and vehicles that eliminates double-bookings and streamlines billing.",
        benefits: [
            "Visual calendar view of resource availability.",
            "Online booking requests with approval workflows.",
            "Automated billing and invoice generation.",
            "Housekeeping and maintenance integration."
        ],
        whyChooseUs: [
            "Professionalize hospitality for institute guests.",
            "Optimize revenue generation from campus facilities."
        ]
    },
    {
        icon: <CalendarDays className="w-8 h-8" />,
        title: "Event Management Program",
        description: "From academic conferences to cultural fests, plan and execute events flawlessly. Manage registrations, venue booking, certificates, and participant feedback in one platform.",
        benefits: [
            "Online event publishing and participant registration.",
            "QR-code based attendance for event entry.",
            "Automated e-certificate generation and distribution.",
            "Budgeting and expense tracking for events."
        ],
        whyChooseUs: [
            "Create professional, memorable event experiences.",
            "Centralize all event data for annual reports."
        ]
    },
    {
        icon: <GraduationCap className="w-8 h-8" />,
        title: "Convocation Management",
        description: "Streamline the most important day for your students. Manage the entire convocation workflow from list generation and degree verification to seat allocation and medal distribution.",
        benefits: [
            "Automated eligible student list generation.",
            "Online registration and gown booking for graduates.",
            "Degree certificate printing data management.",
            "RFID/QR based efficient student movement on the day."
        ],
        whyChooseUs: [
            "Ensure a glitch-free, dignified convocation ceremony.",
            "Handle large student volumes with ease."
        ]
    },
    {
        icon: <Globe2 className="w-8 h-8" />,
        title: "National & International Linkages",
        description: "Strengthen your global footprint by managing collaborations effectively. Track MoUs, student exchange programs, and joint research initiatives to maximize their impact.",
        benefits: [
            "Digital repository of all MoUs and agreements.",
            "Alerts for MoU expiry and renewal dates.",
            "Activity tracking per collaboration (visits, exchanges).",
            "Impact assessment reports for accreditation."
        ],
        whyChooseUs: [
            "Maximize the value of your global partnerships.",
            "Showcase international footprint for better rankings."
        ]
    },
    {
        icon: <BellRing className="w-8 h-8" />,
        title: "Communication System",
        description: "Bridge the communication gap. A unified broadcast system that ensures the right information reaches the right people at the right time via App, Email, and SMS.",
        benefits: [
            "Targeted notifications (Dept-wise, Year-wise, etc.).",
            "Emergency alert broadcasts for campus safety.",
            "Read-receipts to verify information delivery.",
            "Multi-channel delivery (App, Portal, Email, SMS)."
        ],
        whyChooseUs: [
            "Eliminate communication gaps and rumors.",
            "Ensure critical notices are never missed."
        ]
    },
    {
        icon: <Network className="w-8 h-8" />,
        title: "Workflow Management",
        description: "Transform rigid bureaucratic processes into agile digital workflows. Create custom approval paths for any request type, ensuring transparency and accountability at every step.",
        benefits: [
            "Drag-and-drop workflow designer.",
            "Parallel and serial approval capabilities.",
            "Automated reminders for pending approvals.",
            "Complete audit trail of who approved what and when."
        ],
        whyChooseUs: [
            "Digitize 'paper-moving' processes instantly.",
            "Enforce accountability across the hierarchy."
        ]
    },
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        title: "Campus Security System",
        description: "Secure your campus perimeter with a digital visitor management system. Replace manual registers with digital logs, ensuring only authorized personnel enter the premises.",
        benefits: [
            "Digital visitor entry with photo and ID capture.",
            "pre-approval system for expected guests.",
            "Blacklisting capability for security threats.",
            "Visitor pass printing with visitor details."
        ],
        whyChooseUs: [
            "Enhance the safety of students and staff.",
            "Modernize the 'Front Gate' experience."
        ]
    },
    {
        icon: <BarChart4 className="w-8 h-8" />,
        title: "Impact Study Management",
        description: "Move beyond operations to outcomes. Measure the tangible impact of your institution's initiatives, community outreach, and research on society and stakeholders.",
        benefits: [
            "Framework for defining and tracking impact metrics.",
            "Data collection tools for field studies and extensions.",
            "Impact reporting aligned with UN SDGs.",
            "Longitudinal analysis of institutional performance."
        ],
        whyChooseUs: [
            "Prove your institution's value to society.",
            "Support funding grants with evidence-based impact."
        ]
    }
];

export default function AdministrativeModules() {
    const [selectedModule, setSelectedModule] = useState<ModuleData | null>(null);

    return (
        <section className="w-full py-16 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A3E5C] mb-4">
                        Comprehensive Administrative Suite
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A unified ecosystem of specialized modules designed to streamline every aspect of higher education operations.
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
