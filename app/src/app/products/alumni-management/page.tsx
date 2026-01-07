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
            <main className="h-auto bg-[#F6F7ED] flex items-center py-12 lg:pt-56 lg:pb-24 overflow-x-hidden">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative">

                    {/* Left Content */}
                    <div className="relative z-10 max-w-4xl"> {/* Increased max-width to prevent text wrapping */}

                        {/* 
                        [USER CONFIGURATION]: NETWORK BADGE (Top-Left)
                    */}
                        <div
                            className="absolute"
                            style={{
                                top: '-11rem',                        // <--- CHANGE Y POSITION
                                left: '-9rem',                        // <--- CHANGE X POSITION
                                transform: 'rotate(-10deg)',          // <--- CHANGE ROTATION
                                zIndex: 40
                            }}
                        >
                            <span
                                className="bg-[#E0F2FE] text-[#0284C7] px-6 py-3 rounded-md font-bold shadow-md inline-block" // Increased padding
                                style={{
                                    fontSize: '1.30rem',              // <--- INCREASED FONT SIZE
                                    transform: 'rotate(-2deg)'
                                }}
                            >
                                Network
                            </span>
                        </div>

                        {/* 
                         [USER CONFIGURATION]: MAIN HEADING (H1)
                    */}
                        <h1
                            className="font-bold text-[#1E293B] leading-[1.1]"
                            style={{
                                fontSize: '4rem',                     // Increased Font Size
                                marginBottom: '1.5rem',
                                transform: 'translate(-180px, -60px)', // Preserved User Edit
                                display: 'block',
                                width: '150%'                         // Force wider width to prevent wrapping
                            }}
                        >
                            Alumni Management System
                        </h1>

                        {/* 
                         [USER CONFIGURATION]: SUB HEADING (H2)
                    */}
                        <h2
                            className="text-[#334155] font-medium leading-snug"
                            style={{
                                fontSize: '1.75rem',                  // Increased Font Size
                                marginBottom: '2rem',
                                transform: 'translate(-180px, -60px)', // Preserved User Edit
                                width: '130%'
                            }}
                        >
                            Empower Your Institution with a Smart <br className="hidden lg:block" />
                            Alumni Management Solution
                        </h2>

                        <div className="relative">
                            {/* 
                             [USER CONFIGURATION]: PARAGRAPH TEXT (P)
                        */}
                            <p
                                className="text-[#475569] leading-relaxed max-w-2xl" // Increased max-width
                                style={{
                                    fontSize: '1.25rem',              // Increased Font Size
                                    marginBottom: '2.5rem',
                                    transform: 'translate(-180px, -60px)', // Preserved User Edit
                                    width: '150%',
                                }}
                            >
                                Our Alumni Management System helps institutions seamlessly track,
                                engage, and manage alumni data, ensuring long-term relationships and
                                valuable networking opportunities.
                            </p>

                            {/* 
                            [USER CONFIGURATION]: RECONNECT BADGE (Top-Right of Text)
                        */}
                            <div
                                className="absolute"
                                style={{
                                    top: '1.5rem',
                                    right: '-10rem',
                                    transform: 'rotate(15deg) translate(-120px, -60px)', // Preserved User Edit
                                    zIndex: 20
                                }}
                            >
                                <span
                                    className="bg-[#E0F2FE] text-[#0369A1] px-5 py-2.5 rounded-md font-bold shadow-md inline-block" // Increased padding
                                    style={{ fontSize: '1.30rem' }}     // Increased Font Size
                                >
                                    Reconnect
                                </span>
                            </div>
                        </div>

                        <div className="relative inline-flex items-center">
                            {/* 
                             [USER CONFIGURATION]: BUTTON
                        */}
                            <Link
                                href="/contact"
                                className="flex items-center gap-2 rounded-lg bg-[#76B900] text-white font-semibold shadow-lg hover:bg-[#67a300] transition-transform hover:-translate-y-1"
                                style={{
                                    padding: '1.25rem 2.5rem',        // Increased Padding
                                    fontSize: '1.25rem',              // Increased Font Size
                                    transform: 'translate(-180px, -10px)', // Preserved User Edit
                                }}
                            >
                                Get Your Free Demo
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> {/* Increased Icon Size */}
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>

                            {/* 
                            [USER CONFIGURATION]: ENGAGE BADGE 
                        */}
                            <div
                                className="absolute"
                                style={{
                                    top: '50%',
                                    right: '-15rem',
                                    transform: 'translateY(-50%) rotate(-12deg) translate(-160px, -80px)', // Preserved User Edit
                                    zIndex: 20,
                                }}
                            >
                                <span
                                    className="bg-[#2A3E5C] text-white px-5 py-2.5 rounded-md font-bold shadow-md inline-block" // Changed to Banner/Navbar Color
                                    style={{ fontSize: '1.30rem' }}     // Increased Font Size
                                >
                                    Engage
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative w-full flex justify-end mt-12 lg:mt-0">
                        {/* 
                        [USER CONFIGURATION]: IMAGE SETTINGS (UPDATED BY USER)
                    */}
                        <div
                            className="relative aspect-[16/11] rounded-[40px] overflow-hidden border-4 border-white shadow-2xl"
                            style={{
                                width: '1550px',                     // Preserved User Edit
                                height: '550px',                     // Preserved User Edit
                                transform: 'translate(280px, -80px)', // Preserved User Edit
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
