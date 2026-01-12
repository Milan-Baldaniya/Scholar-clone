'use client';

import React, { useState } from 'react';
import {
    BarChart3, FileText, BrainCircuit, LineChart,
    GraduationCap, Users, LayoutDashboard, ScrollText,
    TrendingUp, UserCheck, ChevronRight, X, CheckCircle2,
    PieChart, Activity
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
        icon: <LayoutDashboard className="w-8 h-8" />,
        title: "Institutional Analytics Platform",
        description: "A centralized command center consolidating data from all departments into a single source of truth for institutional oversight.",
        benefits: [
            "Unified view of campus operations.",
            "Real-time data synchronization.",
            "Cross-departmental correlation analysis.",
            "Customizable executive dashboards."
        ],
        whyChooseUs: [
            "Eliminates data silos.",
            "Accelerates decision-making."
        ]
    },
    {
        icon: <FileText className="w-8 h-8" />,
        title: "Academic Reporting Software",
        description: "Comprehensive reporting engine for academic tracking, form attendance and marks to syllabus coverage and learning outcomes.",
        benefits: [
            "Automated grade and transcript generation.",
            "Attendance compliance reports.",
            "Curriculum delivery tracking.",
            "Student progression analysis."
        ],
        whyChooseUs: [
            "Reduces manual administrative load.",
            "Ensures academic accountability."
        ]
    },
    {
        icon: <BrainCircuit className="w-8 h-8" />,
        title: "AI Insights & Predictive Analysis Tool",
        description: "Advanced AI algorithms that analyze historical data to forecast trends and identify potential risks before they occur.",
        benefits: [
            "Early warning systems for at-risk students.",
            "Enrollment trend forecasting.",
            "Resource utilization predictions.",
            "Dropout probability scoring."
        ],
        whyChooseUs: [
            "Proactive rather than reactive management.",
            "Data-driven strategic planning."
        ]
    },
    {
        icon: <Activity className="w-8 h-8" />,
        title: "Performance Analytics",
        description: "Granular analysis of institutional performance metrics against set KPIs and accreditation standards.",
        benefits: [
            "KPI tracking and visualization.",
            "Accreditation compliance monitoring.",
            "Departmental performance benchmarking.",
            "Strategic goal alignment measurement."
        ],
        whyChooseUs: [
            "Simplifies accreditation cycles.",
            "Clear visualization of success metrics."
        ]
    },
    {
        icon: <GraduationCap className="w-8 h-8" />,
        title: "Student Performance Analytics",
        description: "Deep-dive analytics into individual and cohort student performance to personalize learning paths and support mechanisms.",
        benefits: [
            "Individual learning gap identification.",
            "Cohort performance comparison.",
            "Outcome attainment measurement.",
            "Personalized intervention suggestions."
        ],
        whyChooseUs: [
            "Improves student success rates.",
            "Enables personalized education."
        ]
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Teacher Performance Analytics",
        description: "Evaluation tools to assess teaching effectiveness, research output, and student feedback for faculty development.",
        benefits: [
            "Teaching effectiveness scores.",
            "Research output tracking.",
            "Student feedback analysis.",
            "Professional development tracking."
        ],
        whyChooseUs: [
            "Empowers faculty growth.",
            "Enhances educational quality."
        ]
    },
    {
        icon: <PieChart className="w-8 h-8" />,
        title: "Stakeholder-wise Dashboards",
        description: "Tailored analytical views for different stakeholders—Students, Parsent, Faculty, Management, and Administrators.",
        benefits: [
            "Role-specific data visualization.",
            "Secure access permissions.",
            "Relevant insights only.",
            "Improved stakeholder engagement."
        ],
        whyChooseUs: [
            "Relevance for every user.",
            "Enhanced transparency."
        ]
    },
    {
        icon: <ScrollText className="w-8 h-8" />,
        title: "Reports & Reporting Engine",
        description: "Flexible, custom report builder allowing institutions to generate specific statutory and internal reports on demand.",
        benefits: [
            "Drag-and-drop report builder.",
            "Scheduled automated reporting.",
            "Multiple export formats (PDF, Excel).",
            "Regulatory compliance templates."
        ],
        whyChooseUs: [
            "Unlimited reporting flexibility.",
            "Saves hours of manual reporting."
        ]
    },
    {
        icon: <TrendingUp className="w-8 h-8" />,
        title: "Predictive Analytics",
        description: "Forward-looking models that use regression and machine learning to map out future institutional scenarios.",
        benefits: [
            "Budget forecasting models.",
            "Infrastructure need analysis.",
            "Long-term strategic outcome mapping.",
            "Risk mitigation planning."
        ],
        whyChooseUs: [
            "Future-proofs the institution.",
            "Minimizes uncertainty."
        ]
    },
    {
        icon: <UserCheck className="w-8 h-8" />,
        title: "Admission Prediction Analytics",
        description: "Specialized tools to analyze admission inquiries, conversion rates, and demographic trends to optimize enrollment.",
        benefits: [
            "Lead conversion probability.",
            "Demographic trend analysis.",
            "Marketing channel ROI analysis.",
            "Seat filling probability forecasting."
        ],
        whyChooseUs: [
            "Optimizes admission strategies.",
            "Maximizes enrollment quality."
        ]
    }
];

export default function AnalyticsReportingModules() {
    const [selectedModule, setSelectedModule] = useState<ModuleData | null>(null);

    return (
        <section className="w-full py-16 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A3E5C] mb-4 font-['Nunito']">
                        Comprehensive Analytics Suite
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Powerful tools to transform raw institutional data into clear, actionable intelligence.
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
