"use client";

import React from 'react';
import Image from 'next/image';

const features = [
    {
        title: "Structured Academic Planning vs Ad-hoc Teaching",
        description: "Manual lesson planning leads to syllabus delays and inconsistency. ScholarClone's digital planner ensures every lecture is tracked, every topic is covered, and curriculum goals are met on time.",
        image: "/assets/institution1_inventory.png",
        reverse: false
    },
    {
        title: "Digital Content Delivery vs Static Textbooks",
        description: "Modern learners need dynamic content. Our LMS supports video lectures, interactive quizzes, and e-resources, making learning engaging and accessible beyond the classroom.",
        image: "/assets/institution2_inventory.png",
        reverse: true
    },
    {
        title: "Personalized Learning vs One-Size-Fits-All",
        description: "Every student learns differently. Our Personalized Adaptive Learning (PAL) module uses data to adjust content difficulty and pacing, ensuring no student is left behind.",
        image: "/assets/institution3_inventory.png",
        reverse: false
    },
    {
        title: "Outcome Tracking vs Manual Grading",
        description: "Moving beyond traditional marks, our OBE platform tracks skill attainment and program outcomes, providing actionable insights for accreditation and student success.",
        image: "/assets/institution4_inventory.png",
        reverse: true
    }
];

export default function LearningWhyNeed() {
    return (
        <section className="bg-white py-24 px-4">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#059669] mb-16 whitespace-normal lg:whitespace-nowrap lg:translate-x-[-75px]">
                    Why Institutions Need Unified Learning Platforms
                </h2>

                <div className="space-y-20">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${feature.reverse ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Text Content */}
                            <div className="flex-1 space-y-4">
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Image Content */}
                            <div className="flex-1 w-full">
                                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video md:aspect-auto md:h-[350px]">
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
