'use client';

import React from 'react';
import { Database, Zap, Layers, Globe } from 'lucide-react';

const stats = [
    { label: "Data Points", value: "Unlimited", desc: "Consolidated real-time" },
    { label: "Departments", value: "All-in-One", desc: "Unified analytics view" },
    { label: "Prediction", value: "AI-Powered", desc: "Forecasting engine" }
];

export default function UnifiedIntelligence() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            One Source of Truth for <br />
                            <span className="text-indigo-600">Institutional Excellence.</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Stop wrestling with spreadsheets and disjointed software. Our platform ingests data
                            from every corner of your higher education institute—admissions, academics, finance, and HR—to
                            provide a single, crystal-clear view of performance.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { icon: Database, title: "Centralized Data", text: "No more silos. Everything connects." },
                                { icon: Zap, title: "Real-time Action", text: "Insights available instantly, not monthly." },
                                { icon: Layers, title: "Deep Context", text: "Drill down from campus to individual." },
                                { icon: Globe, title: "Global Benchmarks", text: "Compare with institutional standards." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">{item.title}</h3>
                                        <p className="text-sm text-slate-500">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 w-full">
                        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 relative">
                            <div className="grid grid-cols-1 gap-4">
                                {/* Stat Tiles - Text based, not graphical */}
                                {stats.map((stat, i) => (
                                    <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
                                        <div>
                                            <div className="text-sm text-slate-500 mb-1">{stat.label}</div>
                                            <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                                        </div>
                                        <div className="text-xs font-medium px-3 py-1 bg-green-50 text-green-700 rounded-full">
                                            {stat.desc}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
