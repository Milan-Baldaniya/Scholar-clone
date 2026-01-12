"use client";

import React from 'react';

const benefits = [
    {
        title: "Smart Digital Learning",
        description: "Enables anywhere, anytime learning with LMS, mobile apps, and digital content delivery."
    },
    {
        title: "Outcome-Based Excellence",
        description: "Aligns curriculum, teaching, and assessment with OBE standards to ensure student success."
    },
    {
        title: "Automated Academic Planning",
        description: "Streamlines lesson planning, timetable management, and syllabus tracking for faculty ease."
    }
];

export default function LearningBenefits() {
    return (
        <section className="bg-white pt-40 pb-20 px-4">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#059669] mb-12">
                    Empowering Educators, Engaging Learners!
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-[#2A3E5C] rounded-xl p-8 text-[#F9F9E0] h-full flex flex-col justify-start shadow-lg hover:translate-y-[-5px] transition-transform duration-300"
                        >
                            <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight text-[#F9F9E0]">
                                {benefit.title}
                            </h3>
                            <p className="text-[#F9F9E0]/90 text-lg leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
