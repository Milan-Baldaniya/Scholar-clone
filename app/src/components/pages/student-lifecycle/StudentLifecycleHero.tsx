import React from 'react';
import Link from 'next/link';

export default function StudentLifecycleHero() {
    return (
        <section className="bg-[#2A3E5C] text-white pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Text */}
                    <div className="max-w-2xl">
                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                            Empower the Complete Student Journey from Admission to Alumni
                        </h1>
                        <h2 className="text-xl lg:text-2xl text-slate-300 font-medium mb-8">
                            Student Lifecycle & Academic Management System
                        </h2>
                        <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-xl">
                            A unified ecosystem that manages every stage of academic life—from
                            pre-registration and enrollment to career development and alumni success.
                        </p>

                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 bg-[#ECFFFC] hover:bg-[#d5fcf7] text-[#15803d] font-bold rounded-lg shadow-lg transition-all transform hover:scale-105"
                        >
                            Get Your Free Demo
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    {/* Right Column: Vector Waves */}
                    <div className="relative h-[400px] w-full hidden lg:block opacity-40">
                        {/* 
                             Custom SVG Waves to mimic the screenshot.
                             Using multiple paths with smooth curves.
                          */}
                        <svg className="absolute -top-20 right-0 w-full h-full" viewBox="0 0 500 500" preserveAspectRatio="none">
                            {/* Wave 1 */}
                            <path
                                d="M300,500 C400,400 200,300 300,200 C350,150 450,100 480,0"
                                fill="none"
                                stroke="#4B6A9C"
                                strokeWidth="2"
                                className="opacity-60"
                            />
                            {/* Wave 2 */}
                            <path
                                d="M200,500 C300,400 100,300 200,200 C250,150 350,100 380,0"
                                fill="none"
                                stroke="#4B6A9C"
                                strokeWidth="2"
                                className="opacity-60"
                            />
                            {/* Wave 3 */}
                            <path
                                d="M400,500 C500,400 300,300 400,200 C450,150 550,100 580,0"
                                fill="none"
                                stroke="#4B6A9C"
                                strokeWidth="2"
                                className="opacity-60"
                            />
                            {/* Dashed Texture for effect */}
                            <path
                                d="M100,250 Q250,100 400,250 T700,250"
                                fill="none"
                                stroke="#4B6A9C"
                                strokeWidth="1"
                                className="opacity-30"
                                strokeDasharray="5,5"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Background Texture/Gradient Overlay if needed to match Navbar exact feel, but plain bg-[#2A3E5C] matches navbar base better */}
        </section>
    );
}
