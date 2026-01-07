'use client';

import Image from 'next/image';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';

// Sample data to match the visual variety in the screenshot
const PARTNERS = [
    {
        id: 1,
        category: "School",
        title: "School Partners",
        description: "Empowering K-12 schools with modern management and learning tools.",
        image: "/Images/partner_school.png"
    },
    {
        id: 2,
        category: "Product",
        title: "Higher Education Partners",
        description: "Streamlining operations and enhancing learning experiences for colleges and universities.",
        image: "/Images/partner_university.png"
    },
    {
        id: 3,
        category: "Software Engineering",
        title: "Corporate Partners",
        description: "Providing cutting-edge training and HRMS solutions for corporate growth.",
        image: "/Images/partner_corporate.png"
    },
    {
        id: 4,
        category: "Sales",
        title: "Channel Partners",
        description: "Collaborating to expand Scholar Clone's reach and impact globally.",
        image: "/Images/partner_channel.png"
    },
    // Row 2 (Repeating to fill grid as per visual)
    {
        id: 5,
        category: "School",
        title: "School Partners",
        description: "Empowering K-12 schools with modern management and learning tools.",
        image: "/Images/partner_school.png"
    },
    {
        id: 6,
        category: "Product",
        title: "Higher Education Partners",
        description: "Streamlining operations and enhancing learning experiences for colleges and universities.",
        image: "/Images/partner_university.png"
    },
    {
        id: 7,
        category: "Software Engineering",
        title: "Corporate Partners",
        description: "Providing cutting-edge training and HRMS solutions for corporate growth.",
        image: "/Images/partner_corporate.png"
    },
    {
        id: 8,
        category: "Sales",
        title: "Channel Partners",
        description: "Collaborating to expand Scholar Clone's reach and impact globally.",
        image: "/Images/partner_channel.png"
    },
    // Row 3 (Repeating)
    {
        id: 9,
        category: "School",
        title: "School Partners",
        description: "Empowering K-12 schools with modern management and learning tools.",
        image: "/Images/partner_school.png"
    },
    {
        id: 10,
        category: "Product",
        title: "Higher Education Partners",
        description: "Streamlining operations and enhancing learning experiences for colleges and universities.",
        image: "/Images/partner_university.png"
    },
    {
        id: 11,
        category: "Software Engineering",
        title: "Corporate Partners",
        description: "Providing cutting-edge training and HRMS solutions for corporate growth.",
        image: "/Images/partner_corporate.png"
    },
    {
        id: 12,
        category: "Sales",
        title: "Channel Partners",
        description: "Collaborating to expand Scholar Clone's reach and impact globally.",
        image: "/Images/partner_channel.png"
    }
];

export default function PartnerGrid() {
    const [visibleCount, setVisibleCount] = useState(12);

    return (
        <section className="py-20 bg-slate-50">
            <div className="w-full px-4 md:px-20">
                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {PARTNERS.slice(0, visibleCount).map((partner) => (
                        <div
                            key={partner.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col group cursor-pointer border border-slate-100"
                        >
                            {/* Card Image */}
                            <div className="h-48 w-full relative overflow-hidden">
                                <Image
                                    src={partner.image}
                                    alt={partner.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                {/* Category Tag */}
                                <span className="text-purple-600 font-bold text-xs uppercase mb-3 tracking-wide">
                                    {partner.category}
                                </span>

                                {/* Title Row */}
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold text-slate-900 leading-tight">
                                        {partner.title}
                                    </h3>
                                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-purple-600 transition-colors duration-300" />
                                </div>

                                {/* Description */}
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {partner.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                <div className="flex justify-center mt-16">
                    <button
                        className="flex items-center gap-2 px-8 py-3 bg-purple-50 hover:bg-purple-100 text-purple-700 font-semibold rounded-full transition-colors duration-300"
                        suppressHydrationWarning
                    >
                        <ChevronDown className="w-4 h-4" />
                        Load more
                    </button>
                </div>

            </div>
        </section>
    );
}
