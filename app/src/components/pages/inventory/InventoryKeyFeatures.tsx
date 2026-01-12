"use client";

import React from 'react';
import Image from 'next/image';

const features = [
    {
        title: "Seamless Mobile Learning",
        description: "Access course materials, lectures, and assignments anytime, anywhere on any device."
    },
    {
        title: "Automated Assessments",
        description: "Conduct quizzes and exams with instant grading and detailed performance analytics."
    },
    {
        title: "Accreditation Readiness",
        description: "Generate automated reports for NAAC, NBA, and NIRF with precise outcome mapping."
    },
    {
        title: "Collaborative Learning",
        description: "Foster engagement through discussion forums, group projects, and peer reviews."
    },
    {
        title: "360° Student Insights",
        description: "Visualize learning progress, attendance, and skill gaps with intuitive dashboards."
    }
];

export default function InventoryKeyFeatures() {
    return (
        <section className="bg-[#2A3E5C]">
            <div className="w-full">
                <div className="flex flex-col lg:flex-row items-stretch">
                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 px-6 py-16 lg:pl-24 lg:pr-12 text-[#F9F9E0] flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 leading-tight">
                            Key Features That Drive Excellence
                        </h2>

                        <ul className="space-y-8">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="mt-2.5 w-2 h-2 rounded-full bg-[#F9F9E0] flex-shrink-0" />
                                    <div className="text-lg md:text-xl leading-relaxed">
                                        <strong className="font-bold">{feature.title}</strong> – {feature.description}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Image Content */}
                    <div className="w-full lg:w-1/2 relative min-h-scaled-lg lg:min-h-auto">
                        <div className="relative w-full h-full">
                            <Image
                                src="/assets/keyfetures_inventory.png"
                                alt="Key Features Dashboard"
                                fill
                                className="object-cover lg:rounded-l-[3rem]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
