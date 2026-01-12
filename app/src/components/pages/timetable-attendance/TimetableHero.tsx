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
                            Seamless Finance & HR Solutions for Higher Education
                        </h1>
                        <h2 className="text-xl md:text-2xl font-medium text-[#466EA9] mb-8">
                            Integrated Financial Operations & Workforce Management
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-10">
                            Empower your institution with a unified platform for Fee Management, Payroll, Budgeting, and HR compliance.
                            Our integrated system ensures financial transparency, automated workflows, and complete workforce visibility, resulting in operational excellence.
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

            {/* 
                Configurable Curved White Box 
                ADJUST VALUES BELOW to change position (top/left) and size (width/height).
            */}
            <div
                className="absolute bg-white rounded-tl-[50px] hidden lg:block"
                style={{
                    top: '85%',       // Y-axis position
                    right: '-10%',      // anchored to right
                    width: '1000px',   // Box width
                    height: '150px',  // Box height
                    zIndex: 10
                }}
            ></div>

            {/* 
                Configurable Box 2
                ADJUST VALUES BELOW
            */}
            <div
                className="absolute bg-white rounded-br-[50px] hidden lg:block"
                style={{
                    top: '94%',        // Y-axis position
                    left: '51%',      // X-axis position
                    width: '1000px',   // Box width
                    height: '150px',  // Box height
                    rotate: '180deg',
                    zIndex: 11
                }}
            ></div>
        </section>
    );
}
