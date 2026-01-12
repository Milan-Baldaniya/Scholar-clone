'use client';

import React from 'react';
import { Sparkles, BrainCircuit, Target, ShieldCheck, Zap, Activity } from 'lucide-react';

export default function AnalyticsIntelligence() {
    return (
        <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-[#0F172A] to-[#0F172A]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-500/20">
                            <Sparkles className="w-3 h-3" /> Intelligence Layer
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                            From Data to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Wisdom.</span>
                        </h2>
                        <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                            Our AI engine doesn't just show you charts—it finds patterns, predicts outcomes,
                            and suggests strategic actions for institutional growth.
                        </p>
                    </div>

                    {/* Abstract Stat */}
                    <div className="hidden md:flex flex-col items-end">
                        <div className="text-5xl font-bold text-white mb-1">98.5%</div>
                        <div className="text-slate-500 font-medium">Prediction Accuracy</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Card 1: Neural Analysis (Focus: Abstract connection) */}
                    <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-[30px] p-8 md:p-10 hover:bg-white/10 transition-all duration-500 overflow-hidden col-span-1 md:col-span-2 min-h-[300px] flex flex-col justify-between">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/30 transition-colors" />

                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-2xl bg-blue-500 text-white flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                                <BrainCircuit className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Predictive Intelligence</h3>
                            <p className="text-slate-400 max-w-md text-lg leading-relaxed">
                                Foresee enrollment trends, funding opportunities, and risk factors years in advance.
                            </p>
                        </div>

                        {/* Abstract Visual: Connecting Dots (CSS only) */}
                        <div className="flex items-center gap-4 mt-8 opacity-60">
                            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
                            <div className="h-3 w-3 rounded-full bg-blue-400 animate-pulse" />
                            <div className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent" />
                            <div className="text-xs font-mono text-blue-300">AI_MODEL_ACTIVE</div>
                        </div>
                    </div>

                    {/* Card 2: Real-time Signal */}
                    <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[30px] p-8 hover:bg-white/10 transition-all duration-500 flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-2xl bg-purple-500 text-white flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20">
                                <Activity className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Live Signals</h3>
                            <p className="text-slate-400 text-sm">Real-time pulse of campus operations.</p>
                        </div>
                        <div className="mt-8 flex items-center gap-2 text-green-400 text-sm font-medium">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            System Optimized
                        </div>
                    </div>

                    {/* Card 3: Strategic Targets */}
                    <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[30px] p-8 hover:bg-white/10 transition-all duration-500">
                        <div className="w-12 h-12 rounded-2xl bg-pink-500 text-white flex items-center justify-center mb-6 shadow-lg shadow-pink-500/20">
                            <Target className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Goal Tracking</h3>
                        <p className="text-slate-400 text-sm mb-4">
                            Align every department with institutional vision.
                        </p>
                        <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                            <div className="h-full w-[85%] bg-pink-500" />
                        </div>
                    </div>

                    {/* Card 4: Actionable Insights */}
                    <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[30px] p-8 hover:bg-white/10 transition-all duration-500 col-span-1 md:col-span-2 flex items-center justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <Zap className="w-5 h-5 text-yellow-400" fill="currentColor" />
                                <h3 className="text-xl font-bold text-white">Proactive Recommendations</h3>
                            </div>
                            <p className="text-slate-400 text-sm">
                                The system suggest actions to correct course before issues arise.
                            </p>
                        </div>
                        <div className="hidden sm:block px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-slate-300">
                            SUGGESTION_READY
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
