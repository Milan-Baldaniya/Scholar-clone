'use client';

import React from 'react';
import { TrendingUp, GraduationCap, AlertCircle, CheckCircle } from 'lucide-react';

export default function AcademicPerformance() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Academic & Performance Clarity</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Understand learning outcomes, faculty effectiveness, and student progression at a glance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Insight Card 1 */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                            <GraduationCap className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Learning Outcomes</h3>
                        <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                            Track attainment levels across all programs. Identify courses where students struggle
                            before exams begin.
                        </p>
                        <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-3">
                            <TrendingUp className="w-4 h-4 text-blue-600 mt-1" />
                            <div>
                                <div className="text-xs font-bold text-blue-800 uppercase mb-1">Key Insight</div>
                                <div className="text-sm text-blue-700">Calculus II attainment up by 15% this semester.</div>
                            </div>
                        </div>
                    </div>

                    {/* Insight Card 2 */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-6">
                            <AlertCircle className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">At-Risk Identification</h3>
                        <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                            Automated flags for low attendance or declining grades allow for pastoral
                            intervention early in the term.
                        </p>
                        <div className="bg-amber-50 p-4 rounded-lg flex items-start gap-3">
                            <AlertCircle className="w-4 h-4 text-amber-600 mt-1" />
                            <div>
                                <div className="text-xs font-bold text-amber-800 uppercase mb-1">Early Warning</div>
                                <div className="text-sm text-amber-700">5 students in B.Tech flagged for follow-up.</div>
                            </div>
                        </div>
                    </div>

                    {/* Insight Card 3 */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                            <CheckCircle className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Examination Integrity</h3>
                        <p className="text-slate-500 mb-6 text-sm leading-relaxed">
                            Monitor pass percentages, moderator reports, and re-evaluation trends
                            to ensure academic standards.
                        </p>
                        <div className="bg-emerald-50 p-4 rounded-lg flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-emerald-600 mt-1" />
                            <div>
                                <div className="text-xs font-bold text-emerald-800 uppercase mb-1">Status</div>
                                <div className="text-sm text-emerald-700">Exam cycle completed with 99.8% accuracy.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
