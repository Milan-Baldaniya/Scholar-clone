'use client';

import React from 'react';
import { Sparkles, ArrowUpRight, GitBranch } from 'lucide-react';

export default function AiPredictive() {
    return (
        <section className="py-24 bg-[#0F172A] text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    <div>
                        <div className="inline-flex items-center gap-2 text-cyan-400 font-bold mb-6">
                            <Sparkles className="w-5 h-5" />
                            <span>Future-Ready Intelligence</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Don't just report the past.<br />
                            <span className="text-slate-400">Predict the future.</span>
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            Our AI engine consumes historical data to build accurate models for enrollment,
                            revenue, and academic success. Shift your strategy from reactive fixing to proactive planning.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: "Admission Forecasting", desc: "Predict seat fill rates with 90%+ accuracy based on inquiry trends." },
                                { title: "Revenue Projection", desc: "Model financial scenarios based on fee collection and grant probability." },
                                { title: "Dropout Prevention", desc: "Identify flight-risk students weeks before they actually leave." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                    <div className="mt-1 text-cyan-400">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-lg">{item.title}</h3>
                                        <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        {/* Simulation of a Prediction Card */}
                        <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 shadow-2xl">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-indigo-500 rounded-lg">
                                        <GitBranch className="w-5 h-5 text-white" />
                                    </div>
                                    <span className="font-mono text-sm text-slate-300">PREDICTION_MODEL_V4</span>
                                </div>
                                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold">HIGH CONFIDENCE</span>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <div className="flex justify-between text-sm mb-2 text-slate-400">
                                        <span>Expected Enrollment (CS Dept)</span>
                                        <span className="text-white">Trend: +15%</span>
                                    </div>
                                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                        <div className="h-full w-[85%] bg-gradient-to-r from-indigo-500 to-cyan-400" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2 text-slate-400">
                                        <span>Placement Probability</span>
                                        <span className="text-white">Trend: Stable</span>
                                    </div>
                                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                        <div className="h-full w-[72%] bg-gradient-to-r from-blue-500 to-indigo-400" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-700">
                                <p className="text-sm text-slate-300 italic">
                                    "Based on current inquiry volume, we project a full batch capacity by June 15th."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
