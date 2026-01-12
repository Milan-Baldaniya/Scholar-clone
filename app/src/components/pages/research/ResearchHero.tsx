'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Sparkles, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ResearchHero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-50">
            {/* Background Pattern - subtle Indian motif inspired geometry */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(#2A3E5C 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }}
            />

            {/* Ambient Gradients - Warm and Intellectual */}
            <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-orange-100/50 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-100/50 rounded-full blur-[100px]" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-10">

                {/* LEFT: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="z-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-bold text-[#2A3E5C] mb-8">
                        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                        Research & Innovation Hub
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 text-[#2A3E5C]">
                        Research that <br />
                        <span className="relative inline-block">
                            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                                Matters.
                            </span>
                            {/* Brush stroke effect */}
                            <svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
                        Empower your faculty and scholars with a platform designed for the unique needs of Indian higher education and global collaboration.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#2A3E5C] hover:bg-[#1e2d42] text-white rounded-tr-[20px] rounded-bl-[20px] font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            Start Your Journey
                            <ChevronRight className="w-5 h-5" />
                        </Link>

                        <Link
                            href="#modules"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-slate-200 hover:bg-slate-50 text-[#2A3E5C] rounded-tr-[20px] rounded-bl-[20px] font-bold text-lg transition-all shadow-sm hover:shadow-md"
                        >
                            Explore Platform
                        </Link>
                    </div>

                    {/* Testimonial Snippet */}
                    <div className="mt-12 p-4 bg-white/60 backdrop-blur-sm border-l-4 border-orange-500 rounded-r-xl max-w-md">
                        <div className="flex gap-2 mb-2 text-orange-500">
                            <Quote size={16} className="rotate-180" />
                        </div>
                        <p className="text-sm font-medium text-slate-700 italic">
                            "Transforming how our university manages Ph.D. scholars and research grants."
                        </p>
                    </div>
                </motion.div>

                {/* RIGHT: Unique Organic Image Layout */}
                <div className="relative h-[600px] w-full flex items-center justify-center">

                    {/* The "Blob" Organic Shape Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-full max-w-[500px] aspect-[4/5]"
                    >
                        {/* Main Image Masked */}
                        <div className="absolute inset-0 rounded-[40px] overflow-hidden shadow-2xl rotate-3 bg-white p-2">
                            <div className="relative w-full h-full rounded-[32px] overflow-hidden">
                                <Image
                                    src="/assets/student_life.png"
                                    alt="Research Collaboration"
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-1000"
                                />
                                {/* Gradient Overlay for text readability if needed, or visual style */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2A3E5C]/60 to-transparent opacity-60" />
                            </div>
                        </div>

                        {/* Floating Element 1: Research Paper / Doc */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 w-48 bg-white p-4 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-slate-100 rotate-6"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                                    <Sparkles className="w-4 h-4" />
                                </div>
                                <div className="text-xs font-bold text-[#2A3E5C]">Publication</div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 w-full bg-slate-100 rounded-full" />
                                <div className="h-2 w-3/4 bg-slate-100 rounded-full" />
                            </div>
                            <div className="mt-3 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                                <span>Impact Factor</span>
                                <span className="text-green-600 font-bold">4.8</span>
                            </div>
                        </motion.div>

                        {/* Floating Element 2: Stats Badge */}
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-8 -left-8 bg-[#2A3E5C] text-white p-6 rounded-2xl shadow-xl -rotate-3 max-w-[200px]"
                        >
                            <div className="text-3xl font-bold mb-1">120+</div>
                            <div className="text-xs text-blue-200 font-medium leading-tight">
                                Partner Universities in India & Abroad
                            </div>
                        </motion.div>

                        {/* Decorative Circle */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-dashed border-[#2A3E5C]/20 rounded-full animate-[spin_60s_linear_infinite]" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
