'use client';

import React, { useState } from 'react';
import {
    BookOpen, CalendarDays, FileEdit, ClipboardCheck,
    BookCopy, Boxes, MousePointerClick, Lightbulb,
    MessageSquare, Library, Briefcase, ChevronRight,
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
        icon: <BookOpen className="w-8 h-8" />,
        title: "Learning Management System (LMS)",
        description: "This platform delivers digital learning experiences. Courses are hosted with multimedia content.",
        benefits: [
            "Courses are hosted with multimedia content.",
            "Faculty manage lectures and materials online.",
            "Assignments and assessments are integrated.",
            "Student progress is tracked continuously."
        ],
        whyChooseUs: [
            "Discussion forums enhance engagement.",
            "Teaching effectiveness improves."
        ]
    },
    {
        icon: <CalendarDays className="w-8 h-8" />,
        title: "Academic & Lesson Planning",
        description: "This module supports structured academic planning. Faculty prepare lesson plans digitally.",
        benefits: [
            "Course coverage is monitored in real time.",
            "Alignment with curriculum is ensured.",
            "Department coordination improves.",
            "Progress tracking prevents syllabus delays."
        ],
        whyChooseUs: [
            "Reports support academic audits.",
            "Teaching delivery becomes systematic."
        ]
    },
    {
        icon: <FileEdit className="w-8 h-8" />,
        title: "Course & Content Creation",
        description: "This system enables digital course development. Faculty create structured learning content.",
        benefits: [
            "Multimedia resources enhance delivery.",
            "Version control ensures consistency.",
            "Access controls protect materials.",
            "Integration with LMS ensures delivery."
        ],
        whyChooseUs: [
            "Content reuse improves efficiency.",
            "Content quality improves."
        ]
    },
    {
        icon: <ClipboardCheck className="w-8 h-8" />,
        title: "Assessment Content & Rubrics",
        description: "This module standardizes assessment design. Rubrics define clear evaluation criteria.",
        benefits: [
            "Assessment content aligns with learning outcomes.",
            "Consistency across assessments is maintained.",
            "Digital storage ensures accessibility.",
            "Audit readiness is supported."
        ],
        whyChooseUs: [
            "Bias in evaluation is reduced.",
            "Assessment quality increases."
        ]
    },
    {
        icon: <BookCopy className="w-8 h-8" />,
        title: "Curriculum & Syllabus Management",
        description: "This system manages curriculum structures digitally. Syllabus versions are controlled centrally.",
        benefits: [
            "Regulatory alignment is ensured.",
            "Approval workflows manage changes.",
            "Stakeholder collaboration is supported.",
            "Integration with exams and LMS ensures consistency."
        ],
        whyChooseUs: [
            "Historical versions are preserved.",
            "Academic governance improves."
        ]
    },
    {
        icon: <Boxes className="w-8 h-8" />,
        title: "Outcome-Based Education (OBE)",
        description: "This module implements OBE frameworks effectively. Program outcomes are mapped digitally.",
        benefits: [
            "Course outcomes align with objectives.",
            "Assessment data supports outcome measurement.",
            "Analytics highlight achievement gaps.",
            "Continuous improvement is enabled."
        ],
        whyChooseUs: [
            "Accreditation readiness is ensured.",
            "Educational quality is enhanced."
        ]
    },
    {
        icon: <MousePointerClick className="w-8 h-8" />,
        title: "Choice-Based Credit System (CBCS)",
        description: "This system supports flexible academic choices. Students select courses digitally.",
        benefits: [
            "Credit rules are enforced automatically.",
            "Seat availability is monitored.",
            "Faculty workload is optimized.",
            "Registration conflicts are prevented."
        ],
        whyChooseUs: [
            "Student autonomy is increased.",
            "Curriculum flexibility improves."
        ]
    },
    {
        icon: <Lightbulb className="w-8 h-8" />,
        title: "Personalized Adaptive Learning (PAL)",
        description: "This platform personalizes learning paths. Student performance data drives adaptation.",
        benefits: [
            "Content adjusts to learner needs.",
            "Engagement improves learning outcomes.",
            "Analytics support intervention strategies.",
            "Learning gaps are addressed early."
        ],
        whyChooseUs: [
            "Student motivation increases.",
            "Smart learning is enabled."
        ]
    },
    {
        icon: <MessageSquare className="w-8 h-8" />,
        title: "Feedback Management",
        description: "This system manages structured feedback collection. Multiple feedback cycles are supported.",
        benefits: [
            "Anonymous responses ensure honesty.",
            "Analytics identify improvement areas.",
            "Faculty and course evaluation is streamlined.",
            "Reports support decision-making."
        ],
        whyChooseUs: [
            "Action tracking ensures follow-up.",
            "Quality assurance improves."
        ]
    },
    {
        icon: <Library className="w-8 h-8" />,
        title: "Digital Library & Knowledge Centre",
        description: "This module manages digital academic resources. E-books, journals, and databases are centralized.",
        benefits: [
            "Access is role-based and secure.",
            "Search tools improve discoverability.",
            "Usage analytics support planning.",
            "Integration with LMS enhances learning."
        ],
        whyChooseUs: [
            "Remote access supports flexibility.",
            "Knowledge access improves."
        ]
    },
    {
        icon: <Briefcase className="w-8 h-8" />,
        title: "Placement & Internship Management",
        description: "This system manages experiential learning programs. Internship opportunities are tracked centrally.",
        benefits: [
            "Student applications are digitized.",
            "Employer collaboration is facilitated.",
            "Progress and evaluations are recorded.",
            "Placement drives are coordinated."
        ],
        whyChooseUs: [
            "Industry alignment improves.",
            "Student employability increases."
        ]
    }
];

export default function LearningModules() {
    const [selectedModule, setSelectedModule] = useState<ModuleData | null>(null);

    return (
        <section className="w-full py-16 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A3E5C] mb-4">
                        Advanced Learning & Teaching Platforms
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Empowering educators and inspiring learners with next-generation digital tools.
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
