'use client';

import React from 'react';
import { FileCheck, Download, Settings } from 'lucide-react';

export default function ReportingCompliance() {
    return (
        <section className="py-20 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">

                <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-600 text-xs font-bold uppercase tracking-widest mb-6">
                        Compliance Engine
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">
                        Effortless Reporting & <br /> Regulatory Compliance
                    </h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        Generate mandatory reports for NAAC, NBA, NIRF, and other regulatory bodies in seconds.
                        Our flexible report builder allows you to slice and dice data for internal audits anytime.
                    </p>

                    <ul className="space-y-4">
                        {[
                            "Pre-built templates for NAAC / NBA / NIRF",
                            "One-click PDF & Excel Export",
                            "Scheduled automated email reports"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                    <FileCheck className="w-3 h-3" />
                                </div>
                                <span className="font-medium text-slate-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex-1 w-full bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                                <Settings className="w-5 h-5 text-slate-500" />
                            </div>
                            <div>
                                <div className="font-bold text-slate-800">Report Builder</div>
                                <div className="text-xs text-slate-400">Custom Query Tool</div>
                            </div>
                        </div>
                        <button className="text-sm font-bold text-indigo-600">Export</button>
                    </div>

                    {/* Abstract Report UI */}
                    <div className="space-y-3">
                        <div className="h-10 bg-slate-50 rounded-lg w-full" />
                        <div className="h-10 bg-slate-50 rounded-lg w-full" />
                        <div className="h-10 bg-slate-50 rounded-lg w-3/4" />
                    </div>
                </div>

            </div>
        </section>
    );
}
