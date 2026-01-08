"use client";

import React from 'react';
import Image from 'next/image';

const features = [
    {
        title: "Eliminate Wastage & Optimize Stock Levels",
        description: "Manually tracking inventory leads to overstocking, understocking, and mismanagement. ScholarClone's automates stock control so you always have the right quantity at the right time—whether it's laboratory supplies, textbooks, or IT hardware.",
        image: "/assets/institution1_inventory.png",
        reverse: false
    },
    {
        title: "Simplify Procurement & Supplier Management",
        description: "Struggling with scattered purchase orders, delayed approvals, or budget overruns? Our integrated purchase management module streamlines vendor selection, automates purchase orders, and tracks procurement lifecycles to ensure cost efficiency and compliance.",
        image: "/assets/institution2_inventory.png",
        reverse: true
    },
    {
        title: "Full Asset Visibility & Lifecycle Management",
        description: "Optimize asset usage with automated tracking, maintenance, and security controls to reduce downtime, prevent misuse, and extend lifespan—all in one platform.",
        image: "/assets/institution3_inventory.png",
        reverse: false
    },
    {
        title: "Enhanced Security & Compliance",
        description: "Missing equipment? Lost purchase records? ScholarClone's enforces strict access controls, audit trails, and automated compliance reporting, ensuring every transaction and asset movement is transparent, secure, and accountable.",
        image: "/assets/institution4_inventory.png",
        reverse: true
    }
];

export default function InventoryWhyNeed() {
    return (
        <section className="bg-white py-24 px-4">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#059669] mb-16 whitespace-normal lg:whitespace-nowrap lg:translate-x-[-75px]">
                    Why Institutions Need Smart Inventory & Asset Management
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
