'use client';

import React, { useState } from 'react';
import {
    IndianRupee, Award, Banknote, Users,
    CalendarCheck, Briefcase, Calculator,
    Coins, PieChart, TrendingUp, Network,
    Building2, Gavel, Users2, Book, ChevronRight,
    X, CheckCircle2
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
        icon: <IndianRupee className="w-8 h-8" />,
        title: "Fee Management",
        description: "Comprehensive fee collection system covering tuition, hostel, mess, and exam fees with online payment integration.",
        benefits: [
            "Automated receipt generation & reconciliation.",
            "Real-time tracking of pending dues.",
            "Multiple payment gateway integration.",
            "Customizable fee structures for different batches."
        ],
        whyChooseUs: [
            "Eliminates cash handling risk.",
            "Improves financial transparency."
        ]
    },
    {
        icon: <Award className="w-8 h-8" />,
        title: "Govt. Scholarship Management",
        description: "Streamlined processing of government and private scholarships, ensuring eligible students receive funds on time.",
        benefits: [
            "Automated eligibility verification.",
            "Funds disbursement tracking.",
            "Compliance with govt. regulations.",
            "Transparent student status updates."
        ],
        whyChooseUs: [
            "Ensures 100% compliance.",
            "Reduces administrative paperwork."
        ]
    },
    {
        icon: <Banknote className="w-8 h-8" />,
        title: "Payroll & Salary Processing",
        description: "Automated payroll generation linked with attendance, taxes, and deductions for teaching and non-teaching staff.",
        benefits: [
            "One-click salary slip generation.",
            "Automated tax (TDS) calculations.",
            "Integration with attendance & leave data.",
            "Direct bank transfer compatibility."
        ],
        whyChooseUs: [
            "Timely salary disbursement.",
            "Error-free financial records."
        ]
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Employee Records & Attendance",
        description: "Centralized database for all employee information combined with smart biometric/RFID attendance tracking.",
        benefits: [
            "Digital service book maintenance.",
            "Real-time attendance dashboards.",
            "Document storage for qualifications.",
            "Leave balance tracking."
        ],
        whyChooseUs: [
            "Single source of staff truth.",
            "Improves workforce accountability."
        ]
    },
    {
        icon: <CalendarCheck className="w-8 h-8" />,
        title: "Leave Management & Approval",
        description: "Digital workflow for leave applications and approvals, replacing manual paper forms.",
        benefits: [
            "Paperless leave application process.",
            "Multi-level approval workflows.",
            "Automated leave balance updates.",
            "Transparency for employees."
        ],
        whyChooseUs: [
            "Faster decision making.",
            "Clear audit trail."
        ]
    },
    {
        icon: <Briefcase className="w-8 h-8" />,
        title: "Recruitment & Onboarding",
        description: "End-to-end management of the hiring process from job posting to candidate onboarding.",
        benefits: [
            "Centralized applicant tracking system.",
            "Online interview scheduling.",
            "Digital document submission.",
            "Structured onboarding checklists."
        ],
        whyChooseUs: [
            "Attracts better talent.",
            "Simplifies first-day experience."
        ]
    },
    {
        icon: <Calculator className="w-8 h-8" />,
        title: "Financial Accounting",
        description: "Complete double-entry accounting system tailored for educational institutions.",
        benefits: [
            "Automated ledgers and trial balance.",
            "Income & Expense tracking.",
            "Balance sheet generation.",
            "Integration with fee & payroll modules."
        ],
        whyChooseUs: [
            "Audit-ready financial statements.",
            "Real-time financial health view."
        ]
    },
    {
        icon: <Coins className="w-8 h-8" />,
        title: "Contingency Fund Management",
        description: "Track and manage emergency and contingency funds to ensure financial stability.",
        benefits: [
            "Separate fund allocation tracking.",
            "Usage monitoring and approval.",
            "Replenishment alerts.",
            "Detailed usage reports."
        ],
        whyChooseUs: [
            "Financial security assurance.",
            "Prevents fund misuse."
        ]
    },
    {
        icon: <PieChart className="w-8 h-8" />,
        title: "Budget Management",
        description: "Plan, allocate, and monitor department-wise budgets to prevent overspending.",
        benefits: [
            "Department-wise budget allocation.",
            "Real-time expenditure vs budget tracking.",
            "Variance analysis reports.",
            "Approval workflows for extra funds."
        ],
        whyChooseUs: [
            "Financial discipline.",
            "Strategic resource planning."
        ]
    },
    {
        icon: <TrendingUp className="w-8 h-8" />,
        title: "Appraisal & Performance",
        description: "360-degree performance evaluation system for faculty and staff career progression.",
        benefits: [
            "Goal setting and KRA mapping.",
            "Self, peer, and manager reviews.",
            "Performance analytics for promotions.",
            "Training needs identification."
        ],
        whyChooseUs: [
            "Merit-based culture.",
            "Retains top talent."
        ]
    },
    {
        icon: <Network className="w-8 h-8" />,
        title: "Organizational Structure",
        description: "Define and manage the hierarchy and functional structure of the institution covering all departments and roles.",
        benefits: [
            "Clear reporting lines.",
            "Role and responsibility definition.",
            "Easy updates to structure.",
            "Visual hierarchy charts."
        ],
        whyChooseUs: [
            "Operational clarity.",
            "Better governance."
        ]
    },
    {
        icon: <Building2 className="w-8 h-8" />,
        title: "Organization Details",
        description: "Central repository for managing multi-branch details, official addresses, logos, and branch-specific configurations.",
        benefits: [
            "Multi-campus data management.",
            "Consistent branding management.",
            "Unified contact directory.",
            "Centralized document repository."
        ],
        whyChooseUs: [
            "Unified brand identity.",
            "Simplified multi-site admin."
        ]
    },
    {
        icon: <Gavel className="w-8 h-8" />,
        title: "Compliance Management",
        description: "Track and ensure adherence to UGC, AICTE, NAAC, and government statutory regulations.",
        benefits: [
            "Automated compliance alerts.",
            "Document expiry tracking.",
            "Regulatory report generation.",
            "Risk assessment dashboard."
        ],
        whyChooseUs: [
            "Risk-free operations.",
            "Legal safety."
        ]
    },
    {
        icon: <Users2 className="w-8 h-8" />,
        title: "Committee Management",
        description: "Manage various institutional committees, their members, meetings, and minutes.",
        benefits: [
            "Member role assignment.",
            "Meeting scheduling & agenda.",
            "Digital minutes of meeting.",
            "Action item tracking."
        ],
        whyChooseUs: [
            "Structured governance.",
            "Active participation."
        ]
    },
    {
        icon: <Book className="w-8 h-8" />,
        title: "Institute Handbook",
        description: "Digital access to institute policies, code of conduct, and operational guidelines for all stakeholders.",
        benefits: [
            "Easy access to rules & policies.",
            "Version control for updates.",
            "Searchable content.",
            "Acknowledgment tracking."
        ],
        whyChooseUs: [
            "Informed community.",
            "Reduced policy violations."
        ]
    }
];

export default function FinanceHRModules() {
    const [selectedModule, setSelectedModule] = useState<ModuleData | null>(null);

    return (
        <section className="w-full py-16 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A3E5C] mb-4 font-['Nunito']">
                        Finance & HR Solutions
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Unified financial operations and workforce management for modern institutions.
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
                                        Why Choose This?
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
