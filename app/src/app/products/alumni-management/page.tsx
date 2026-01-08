import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Alumni Management System - Connect & Engage',
    description: 'Build and maintain strong alumni networks with Scholar Clone\'s Alumni Management System.',
};

import DisorganizedRecords from '@/components/pages/alumni/DisorganizedRecords';

// eslint-disable-next-line @next/next/no-img-element
export default function AlumniManagementPage() {
    return (
        <>
            {/* 
                RESPONSIVE NOTES:
                - Mobile (< 1024px): Stacked layout, no transforms, badges hidden
                - Desktop (≥ 1024px): Original layout with custom positioning preserved
            */}
            <main className="h-auto bg-[#F6F7ED] flex items-center py-12 lg:pt-56 lg:pb-24 overflow-x-hidden">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative">

                    {/* Left Content */}
                    <div className="relative z-10 w-full lg:max-w-4xl">

                        {/* NETWORK BADGE - Hidden on mobile, visible on desktop */}
                        <div
                            className="hidden lg:block absolute"
                            style={{
                                top: '-11rem',
                                left: '-9rem',
                                transform: 'rotate(-10deg)',
                                zIndex: 40
                            }}
                        >
                            <span
                                className="bg-[#E0F2FE] text-[#0284C7] px-6 py-3 rounded-md font-bold shadow-md inline-block"
                                style={{
                                    fontSize: '1.30rem',
                                    transform: 'rotate(-2deg)'
                                }}
                            >
                                Network
                            </span>
                        </div>

                        {/* MAIN HEADING (H1) - Responsive sizing */}
                        <h1
                            className="font-bold text-[#1E293B] leading-[1.1] text-3xl md:text-4xl lg:text-[4rem] mb-4 lg:mb-6"
                            style={{
                                // Desktop only transforms
                            }}
                        >
                            {/* Desktop version with transform */}
                            <span
                                className="hidden lg:block"
                                style={{
                                    transform: 'translate(-180px, -60px)',
                                    display: 'block',
                                    width: '150%'
                                }}
                            >
                                Alumni Management System
                            </span>
                            {/* Mobile/Tablet version - no transform */}
                            <span className="lg:hidden">
                                Alumni Management System
                            </span>
                        </h1>

                        {/* SUB HEADING (H2) - Responsive sizing */}
                        <h2 className="text-[#334155] font-medium leading-snug text-lg md:text-xl lg:text-[1.75rem] mb-4 lg:mb-8">
                            {/* Desktop version with transform */}
                            <span
                                className="hidden lg:block"
                                style={{
                                    transform: 'translate(-180px, -60px)',
                                    width: '130%'
                                }}
                            >
                                Empower Your Institution with a Smart <br />
                                Alumni Management Solution
                            </span>
                            {/* Mobile/Tablet version - no transform */}
                            <span className="lg:hidden">
                                Empower Your Institution with a Smart Alumni Management Solution
                            </span>
                        </h2>

                        <div className="relative">
                            {/* PARAGRAPH TEXT (P) - Responsive sizing */}
                            <p className="text-[#475569] leading-relaxed text-base md:text-lg lg:text-[1.25rem] mb-6 lg:mb-10">
                                {/* Desktop version with transform */}
                                <span
                                    className="hidden lg:block"
                                    style={{
                                        transform: 'translate(-180px, -60px)',
                                        width: '150%'
                                    }}
                                >
                                    Our Alumni Management System helps institutions seamlessly track,
                                    engage, and manage alumni data, ensuring long-term relationships and
                                    valuable networking opportunities.
                                </span>
                                {/* Mobile/Tablet version - no transform */}
                                <span className="lg:hidden">
                                    Our Alumni Management System helps institutions seamlessly track,
                                    engage, and manage alumni data, ensuring long-term relationships and
                                    valuable networking opportunities.
                                </span>
                            </p>

                            {/* RECONNECT BADGE - Hidden on mobile */}
                            <div
                                className="hidden lg:block absolute"
                                style={{
                                    top: '1.5rem',
                                    right: '-10rem',
                                    transform: 'rotate(15deg) translate(-120px, -60px)',
                                    zIndex: 20
                                }}
                            >
                                <span
                                    className="bg-[#E0F2FE] text-[#0369A1] px-5 py-2.5 rounded-md font-bold shadow-md inline-block"
                                    style={{ fontSize: '1.30rem' }}
                                >
                                    Reconnect
                                </span>
                            </div>
                        </div>

                        <div className="relative inline-flex items-center">
                            {/* BUTTON - Responsive positioning */}
                            <Link
                                href="/contact"
                                className="flex items-center gap-2 rounded-lg bg-[#76B900] text-white font-semibold shadow-lg hover:bg-[#67a300] transition-transform hover:-translate-y-1 px-6 py-3 lg:px-10 lg:py-5 text-base lg:text-[1.25rem]"
                            >
                                {/* Desktop version with transform wrapper */}
                                <span
                                    className="hidden lg:flex items-center gap-2"
                                    style={{ transform: 'translate(-180px, -10px)' }}
                                >
                                    Get Your Free Demo
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                                {/* Mobile/Tablet version - no transform */}
                                <span className="lg:hidden flex items-center gap-2">
                                    Get Your Free Demo
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </Link>

                            {/* ENGAGE BADGE - Hidden on mobile */}
                            <div
                                className="hidden lg:block absolute"
                                style={{
                                    top: '50%',
                                    right: '-15rem',
                                    transform: 'translateY(-50%) rotate(-12deg) translate(-160px, -80px)',
                                    zIndex: 20,
                                }}
                            >
                                <span
                                    className="bg-[#2A3E5C] text-white px-5 py-2.5 rounded-md font-bold shadow-md inline-block"
                                    style={{ fontSize: '1.30rem' }}
                                >
                                    Engage
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Image - Responsive */}
                    <div className="relative w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
                        {/* Mobile/Tablet Image */}
                        <div className="lg:hidden relative w-full max-w-md aspect-[16/11] rounded-[20px] overflow-hidden border-4 border-white shadow-2xl">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/Images/hero_alumni.png"
                                alt="Alumni Group at University"
                                className="object-cover w-full h-full"
                            />
                        </div>

                        {/* Desktop Image - Original positioning preserved */}
                        <div
                            className="hidden lg:block relative aspect-[16/11] rounded-[40px] overflow-hidden border-4 border-white shadow-2xl"
                            style={{
                                width: '1550px',
                                height: '550px',
                                transform: 'translate(280px, -80px)',
                            }}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/Images/hero_alumni.png"
                                alt="Alumni Group at University"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                </div>
            </main>
            <DisorganizedRecords />
        </>
    );
}
