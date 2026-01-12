'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ArrowRight, Activity, Zap, BarChart3, PieChart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AnalyticsHero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F172A] text-white pt-20 pb-20">

            {/* Background: Indian Pattern Motif (Subtle) */}
            <div className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(circle at center, #6366f1 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Ambient Glows */}
            <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-indigo-600/10 rounded-full blur-[150px] mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-cyan-600/10 rounded-full blur-[150px] mix-blend-screen" />

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-sm font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
                        <Activity className="w-4 h-4" />
                        <span>Data-Driven Excellence</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 tracking-tight">
                        <span className="block text-white">Insight.</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-300">
                            Innovation.
                        </span>
                        <span className="block text-white">Impact.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed border-l-4 border-indigo-500 pl-6">
                        Empowering Indian institutions to transform raw academic data into strategic intelligence.
                        Predict outcomes, optimize resources, and lead with confidence.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <Link
                            href="/contact"
                            className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-tr-[30px] rounded-bl-[30px] font-bold text-lg transition-all shadow-[0_10px_30px_-10px_rgba(79,70,229,0.5)] hover:-translate-y-1"
                        >
                            Get Strategic Insights
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="#modules"
                            className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-tr-[30px] rounded-bl-[30px] font-bold text-lg transition-all backdrop-blur-sm"
                        >
                            Explore Tools
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="mt-16 flex items-center gap-12 text-slate-400">
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">360°</div>
                            <div className="text-xs uppercase tracking-wider">Campus View</div>
                        </div>
                        <div className="w-px h-12 bg-white/10" />
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">AI</div>
                            <div className="text-xs uppercase tracking-wider">Powered Logic</div>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Unique Image Composition (The "Data Arch") */}
                <div className="relative h-[800px] w-full hidden lg:flex items-center justify-center">

                    {/* The IMAGE container - using a unique shape (Arch/Window) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative w-full max-w-[600px] h-full max-h-[700px] lg:-mt-20"
                    >
                        {/* Abstract background shapes */}
                        <div className="absolute top-10 -right-10 w-full h-full border-2 border-indigo-500/20 rounded-t-[300px] rounded-b-[40px]" />
                        <div className="absolute -top-5 -left-5 w-24 h-24 bg-gradient-to-br from-cyan-500 to-indigo-500 rounded-full blur-2xl opacity-40" />

                        {/* MAIN IMAGE MASK - Arch Shape */}
                        <div className="relative w-full h-full rounded-t-[300px] rounded-b-[40px] overflow-hidden border border-white/10 shadow-2xl bg-[#1e293b]">
                            <Image
                                src="/assets/student_life.png"
                                alt="Students Analysis"
                                fill
                                className="object-cover object-top opacity-90 transition-all duration-700"
                            />
                            {/* Overlay Gradient - Lighter */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60" />
                        </div>

                        {/* FLOATING DATA WIDGETS (The "Analytics" Layer) */}

                        {/* Card 1: Top Right */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="absolute top-[20%] -right-12 p-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl w-64"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                                    <BarChart3 className="w-5 h-5" />
                                </div>
                                <div className="text-sm font-bold text-white">Placement Rates</div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-xs text-slate-300">
                                    <span>Engineering</span>
                                    <span>92%</span>
                                </div>
                                <div className="w-full bg-white/10 h-1.5 rounded-full">
                                    <div className="h-full w-[92%] bg-green-400 rounded-full" />
                                </div>
                                <div className="flex justify-between text-xs text-slate-300">
                                    <span>Management</span>
                                    <span>88%</span>
                                </div>
                                <div className="w-full bg-white/10 h-1.5 rounded-full">
                                    <div className="h-full w-[88%] bg-green-400 rounded-full" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2: Bottom Left */}
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="absolute bottom-[10%] -left-12 p-5 bg-[#0F172A]/90 border border-indigo-500/30 rounded-2xl shadow-xl w-64"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Prediction</div>
                                    <div className="text-lg font-bold text-white">Enrollment</div>
                                </div>
                                <div className="text-green-400 bg-green-400/10 px-2 py-1 rounded text-xs font-bold">+15%</div>
                            </div>
                            <div className="h-16 flex items-end justify-between gap-1">
                                {[40, 60, 45, 70, 65, 80, 75].map((h, i) => (
                                    <div key={i} style={{ height: `${h}%` }} className="w-full bg-indigo-500/40 rounded-t-sm hover:bg-indigo-400 transition-colors cursor-pointer" />
                                ))}
                            </div>
                        </motion.div>

                        {/* Animated Badge */}
                        <div className="absolute bottom-8 right-8 animate-pulse">
                            <div className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full backdrop-blur-md">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
                                <span className="text-xs font-bold text-cyan-300">AI MODEL ACTIVE</span>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
