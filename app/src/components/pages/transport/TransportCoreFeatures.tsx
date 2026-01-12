import React from 'react';

export default function TransportCoreFeatures() {
    const features = [
        {
            title: "Admission & Enrollment",
            icon: "📝",
            bg: "bg-[#2A3E5C]",
            text: "text-white",
            points: [
                "Digital application forms and document verification.",
                "Automated merit list generation and fee collection.",
                "Seamless onboarding workflow for new students."
            ]
        },
        {
            title: "Academic Operations",
            icon: "📚",
            bg: "bg-[#F4F6DE]",
            text: "text-[#1E3A8A]", // Dark blue text for light card
            points: [
                "Curriculum planning and course management.",
                "Automated timetable scheduling and attendance.",
                "Examination management and result processing."
            ]
        },
        {
            title: "Student Services & Campus Life",
            icon: "🏟️",
            bg: "bg-[#2A3E5C]",
            text: "text-white",
            points: [
                "Hostel accommodation and mess management.",
                "Library access and digital resource tracking.",
                "Grievance redressal and feedback mechanisms."
            ]
        },
        {
            title: "Career & Alumni Success",
            icon: "🎓",
            bg: "bg-[#F4F6DE]",
            text: "text-[#1E3A8A]",
            points: [
                "Placement cell coordination and resume building.",
                "Skill development and internship tracking.",
                "Alumni networking and fundraising management."
            ]
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-8">

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-[#15803d] text-center mb-16 max-w-4xl mx-auto">
                    Core Stages of the Student Lifecycle<br className="hidden md:block" />
                    Management System
                </h2>

                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8">
                    {features.map((feature, index) => {
                        // Zig-zag effect: Add margin-top to even items on large screens
                        const isEven = index % 2 !== 0; // 2nd and 4th items (index 1 and 3)
                        const marginTopClass = isEven ? 'lg:mt-24' : '';

                        return (
                            <div
                                key={index}
                                className={`w-full lg:w-[325px] shrink-0 rounded-[30px] p-8 shadow-xl flex flex-col ${feature.bg} ${feature.text} transition-transform hover:-translate-y-2 duration-300 ${marginTopClass}`}
                            >
                                <div className="text-4xl mb-6">{feature.icon}</div>

                                <h3 className="text-xl font-bold mb-6 leading-tight min-h-[56px] flex items-center">
                                    {feature.title}
                                </h3>

                                <ul className="space-y-4 text-sm leading-relaxed font-medium opacity-90">
                                    {feature.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
