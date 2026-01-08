"use client";

import React from 'react';
import Image from 'next/image';

const features = [
    {
        title: "Real-Time Inventory Tracking",
        description: "Monitor stock levels, automate replenishment, and reduce wastage."
    },
    {
        title: "Smart Purchase Management",
        description: "Automate approvals, compare supplier quotes, and ensure budget compliance."
    },
    {
        title: "End-to-End Asset Management",
        description: "Track asset allocation, schedule maintenance, and optimize utilization."
    },
    {
        title: "Cloud-Based & Scalable",
        description: "Access data anytime, anywhere, and scale effortlessly as your institution grows."
    },
    {
        title: "AI-Powered Reporting & Insights",
        description: "Generate real-time reports to make informed financial and operational decisions."
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
                            Key Features That Drive Efficiency
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
                    <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-auto">
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
