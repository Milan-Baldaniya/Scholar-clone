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
            <main className="h-auto bg-[#F6F7ED] flex items-center py-12 lg:pt-32 lg:pb-24 overflow-x-hidden">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative">

                    {/* Left Content */}
                    <div className="relative z-10 w-full lg:max-w-2xl xl:max-w-3xl">

                        {/* NETWORK BADGE */}
                        <div
                            className="hidden lg:block absolute"
                            style={{
                                top: '-5rem',
                                left: '-4rem',
                                transform: 'rotate(-10deg)',
                                zIndex: 40
                            }}
                        >
                            <span
                                className="bg-[#E0F2FE] text-[#0284C7] px-6 py-3 rounded-md font-bold shadow-md inline-block"
                                style={{
                                    fontSize: '1rem',
                                    transform: 'rotate(-2deg)'
                                }}
                            >
                                Network
                            </span>
                        </div>

                        {/* MAIN HEADING (H1) */}
                        <h1 className="font-bold text-[#1E293B] leading-[1.1] text-3xl md:text-4xl lg:text-6xl mb-4 lg:mb-6">
                            Alumni Management System
                        </h1>

                        {/* SUB HEADING (H2) */}
                        <h2 className="text-[#334155] font-medium leading-snug text-lg md:text-xl lg:text-2xl mb-4 lg:mb-8">
                            Empower Your Institution with a Smart <br className="hidden lg:block" />
                            Alumni Management Solution
                        </h2>

                        <div className="relative">
                            {/* PARAGRAPH TEXT (P) */}
                            <p className="text-[#475569] leading-relaxed text-base md:text-lg lg:text-xl mb-6 lg:mb-10 max-w-xl">
                                Our Alumni Management System helps institutions seamlessly track,
                                engage, and manage alumni data, ensuring long-term relationships and
                                valuable networking opportunities.
                            </p>

                            {/* RECONNECT BADGE */}
                            <div
                                className="hidden lg:block absolute"
                                style={{
                                    top: '-4rem',
                                    right: '0rem',
                                    transform: 'rotate(15deg)',
                                    zIndex: 20
                                }}
                            >
                                <span
                                    className="bg-[#E0F2FE] text-[#0369A1] px-5 py-2.5 rounded-md font-bold shadow-md inline-block"
                                    style={{ fontSize: '1rem' }}
                                >
                                    Reconnect
                                </span>
                            </div>
                        </div>

                        <div className="relative inline-flex items-center">
                            {/* BUTTON */}
                            <Link
                                href="/contact"
                                className="flex items-center gap-2 rounded-lg bg-[#76B900] text-white font-semibold shadow-lg hover:bg-[#67a300] transition-transform hover:-translate-y-1 px-6 py-3 lg:px-8 lg:py-4 text-base lg:text-lg"
                            >
                                <span>
                                    Get Your Free Demo
                                </span>
                                <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>

                            {/* ENGAGE BADGE */}
                            <div
                                className="hidden lg:block absolute"
                                style={{
                                    top: '-2rem',
                                    right: '-8rem',
                                    transform: 'rotate(-12deg)',
                                    zIndex: 20,
                                }}
                            >
                                <span
                                    className="bg-[#2A3E5C] text-white px-5 py-2.5 rounded-md font-bold shadow-md inline-block"
                                    style={{ fontSize: '1rem' }}
                                >
                                    Engage
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
                        <div className="relative w-full aspect-[16/11] rounded-[20px] lg:rounded-[40px] overflow-hidden border-4 border-white shadow-2xl max-w-2xl">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/assets/hero_alumni.png"
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
