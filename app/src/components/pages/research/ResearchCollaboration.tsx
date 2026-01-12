'use client';

import React from 'react';
import { Network, Globe, PieChart, Users, FileText, Share2 } from 'lucide-react';

const features = [
    {
        title: "Project & Grant Management",
        desc: "Centrally track research projects, funding grants, reviews, and utilization reports.",
        icon: <PieChart className="w-6 h-6" />
    },
    {
        title: "Global Collaboration",
        desc: "Manage external partnerships, MOU tracking, and interdisciplinary research initiatives.",
        icon: <Globe className="w-6 h-6" />
    },
    {
        title: "Research Output",
        desc: "Document publications, patents, and conference presentations in a unified repository.",
        icon: <FileText className="w-6 h-6" />
    },
    {
        title: "Impact Analytics",
        desc: "Measure citation impact, h-index growth, and institutional research visibility.",
        icon: <Share2 className="w-6 h-6" />
    },
    {
        title: "Funding Utilization",
        desc: "Real-time monitoring of fund allocation and expenditure to ensure financial compliance.",
        icon: <Network className="w-6 h-6" />
    },
    {
        title: "Knowledge Sharing",
        desc: "Internal repositories to promote cross-departmental learning and innovation.",
        icon: <Users className="w-6 h-6" />
    }
];

export default function ResearchCollaboration() {
    return (
        <section className="py-20 lg:py-28 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Text Content */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Accelerate Discovery with <br />
                            <span className="text-[#2A3E5C]">Collaborative Research</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                            Break down silos. Our platform connects researchers, manages complex grants,
                            and tracks institutional output to maximize academic impact and funding success.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="shrink-0 w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 text-sm mb-1">{feature.title}</h3>
                                        <p className="text-xs text-slate-500 leading-snug">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Visual Element */}
                    <div className="relative">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-2xl border border-slate-200 p-2">
                            {/* Abstract Visual for Collaboration (Placeholder for image) */}
                            <div className="w-full h-full rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2A3E5C]/90 to-transparent flex flex-col justify-end p-8">
                                    <div className="text-white">
                                        <div className="text-3xl font-bold mb-2">35%</div>
                                        <div className="text-sm opacity-90">Increase in Cross-Dept Collaboration</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs animate-bounce-slow">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                <span className="font-bold text-slate-800 text-sm">Active Grants</span>
                            </div>
                            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full w-[85%] bg-green-500 rounded-full" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
