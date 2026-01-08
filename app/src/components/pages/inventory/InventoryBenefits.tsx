"use client";

import React from 'react';

const benefits = [
    {
        title: "Increased Efficiency & Automation",
        description: "Streamlines inventory, procurement, and asset tracking with automation, reducing manual effort and errors."
    },
    {
        title: "Cost Savings & Budget Control",
        description: "Optimizes resource allocation, prevents over-purchasing, and ensures financial compliance to control costs."
    },
    {
        title: "Enhanced Accountability & Security",
        description: "Provides real-time monitoring, audit trails, and compliance enforcement to prevent loss and mismanagement."
    }
];

export default function InventoryBenefits() {
    return (
        <section className="bg-white pt-40 pb-20 px-4">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#059669] mb-12">
                    Smarter Management, Lower Costs, Total Control!
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
