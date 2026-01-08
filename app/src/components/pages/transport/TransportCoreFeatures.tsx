import React from 'react';

export default function TransportCoreFeatures() {
    const features = [
        {
            title: "Route & Trip Management",
            icon: "📍",
            bg: "bg-[#2A3E5C]",
            text: "text-white",
            points: [
                "Plan and optimize pick-up & drop-off points for students and staff.",
                "Automate route assignments based on demand and schedules.",
                "AI-based rerouting to avoid traffic congestion."
            ]
        },
        {
            title: "Real-Time Vehicle Tracking & GPS Integration",
            icon: "🚌",
            bg: "bg-[#F4F6DE]",
            text: "text-[#1E3A8A]", // Dark blue text for light card
            points: [
                "Monitor vehicle locations with live GPS tracking.",
                "Get instant alerts on delays, deviations, and emergencies.",
                "Set up geo-fencing for restricted areas."
            ]
        },
        {
            title: "Fleet & Vehicle Maintenance",
            icon: "🛠️",
            bg: "bg-[#2A3E5C]",
            text: "text-white",
            points: [
                "Keep track of service schedules and maintenance history.",
                "Receive automated alerts for repairs and fuel efficiency tracking.",
                "Reduce breakdown risks with predictive maintenance analytics."
            ]
        },
        {
            title: "Cost & Budget Management",
            icon: "💰",
            bg: "bg-[#F4F6DE]",
            text: "text-[#1E3A8A]",
            points: [
                "Track fuel consumption and operational costs.",
                "Analyze budget utilization and reduce wastage.",
                "Generate detailed financial reports for administrative audits."
            ]
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-8">

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-[#15803d] text-center mb-16 max-w-4xl mx-auto">
                    Core Features of Our Transport &<br className="hidden md:block" />
                    Vehicle Management System
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
