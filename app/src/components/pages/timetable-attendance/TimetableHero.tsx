import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function TimetableHero() {
    return (
        <section className="bg-[#F4F6DE] pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden relative">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Text */}
                    <div className="w-full">
                        <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-[#1E3A8A] leading-tight mb-6">
                            Revolutionize Attendance & Timetable Management with Smart Automation
                        </h1>
                        <h2 className="text-xl md:text-2xl font-medium text-[#466EA9] mb-8">
                            Effortless Attendance & Smart Scheduling for Higher Education
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-10">
                            Managing attendance and scheduling in higher education is complex. Traditional methods are
                            time-consuming, prone to errors, and lack real-time insights. Our Timetable & Attendance
                            Module leverages RFID, biometric authentication, and QR mobile technology to bring accuracy,
                            automation, and efficiency to your institute.
                        </p>

                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 bg-[#76C069] hover:bg-[#65a85a] text-white font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105"
                        >
                            Get Your Free Demo
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative w-full h-full min-h-[400px] lg:min-h-auto overflow-hidden">
                        <Image
                            src="/assets/hero_timetable.png"
                            alt="Attendance & Timetable Management"
                            fill
                            className="object-contain lg:object-right"
                            priority
                        />
                    </div>

                </div>
            </div>

            {/* Decorative white curve/step shape at the bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
                <svg
                    className="relative block w-full h-[60px] lg:h-[100px]"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    {/* 
                        This path creates a shape that is white on the bottom right, 
                        curving up from the middle. 
                        It effectively "cuts out" the beige background.
                    */}
                    <path
                        d="M600,0 C750,0 800,80 1200,80 V120 H0 V0 Z"
                        fill="#FFFFFF"
                        className="hidden" // Hiding this draft path, using a cleaner one below
                    />

                    {/* Actual implementation based on "step" look in screenshot */}
                    <path
                        d="M0,120 L0,120 L1200,120 L1200,0 C1150,0 1100,50 1050,50 L750,50 C700,50 650,120 600,120 L0,120"
                        fill="#FFFFFF"
                        // This path fills the bottom white area. 
                        // It starts bottom left (0,120), goes right... wait. 
                        // Let's interpret the negative space (Beige).
                        // Better to fill the WHITE part.
                        // White part is at the bottom right?
                        // "curve boxes on hero banner image"
                        // Screenshot shows White shape filling the bottom, rising up on the right? 
                        // No, rising up on the LEFT. Beige is Top-Left. White is Bottom-Right? 
                        // In the screenshot, the blue box selection is on the *white* part below the beige.
                        // The shape seems to be: White bar at bottom, but on the right it goes WAY up? 
                        // Or on the left it goes way up?
                        // Let's assume a standard modern wave:
                        // Fill white at bottom.
                        d="M0,120 L1200,120 L1200,20 C1100,20 1050,100 950,100 L0,100 Z"
                    // Trying a simple curve first.
                    />

                    {/* 
                       Re-evaluating based on "uploaded_image_0_...png": 
                       It shows a sharp corner radius.
                       Like a folder tab. 
                       White rises up on the right. 
                       Let's try a path that creates a rounded corner "step down".
                    */}
                    <path
                        d="M0,120 L1440,120 L1440,0 C1400,0 1360,40 1320,40 H0 V120 Z"
                        fill="#ffffff"
                    />
                </svg>
                {/* 
                    Let's try a simpler CSS approach for the "rounded corner step" 
                    if the SVG is guessed.
                    But user asked for "curve boxes".
                    I'll add a specific SVG shape that mimics a "tab".
                */}
                <svg className="w-full h-16 lg:h-24 text-white fill-current" viewBox="0 0 1440 100" preserveAspectRatio="none">
                    <path d="M0,100 H1440 V0 C1440,50 1380,100 1300,100 H0 V100 Z" />
                </svg>
            </div>
        </section>
    );
}
