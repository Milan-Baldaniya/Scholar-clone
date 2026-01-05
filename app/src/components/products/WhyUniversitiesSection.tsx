'use client';
import Button from '../ui/Button';

export default function WhyUniversitiesSection() {
    const handleGetStarted = (): void => {
        console.log('Get Started clicked')
    }

    return (
        <section className="w-full py-16 lg:py-24 bg-[#f5f9eb]">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* Left Content Column */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start gap-8">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#1a237e] font-['Nunito']">
                            Why Universities<br />
                            Need an <span className="font-bold text-[#1a3e59]">Advanced<br />Management System?</span>
                        </h2>

                        <p className="text-base sm:text-lg lg:text-xl text-[#37474f] leading-relaxed font-['Hind_Guntur']">
                            Manual administration creates inefficiencies, compliance challenges, and poor student engagement. Scholar Clone's UMS automates workflows, ensures regulatory compliance, and enhances collaboration with AI-driven insights. A centralized, secure platform streamlines operations and enables hybrid learning, making institutions future-ready.
                        </p>

                        <button className="bg-[#007f5f] hover:bg-[#006048] text-white text-lg font-medium py-3 px-8 rounded flex items-center gap-2 transition-colors duration-200">
                            Get Started Today
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    {/* Right Image Section */}
                    <div className="w-full lg:w-1/2 relative">
                        {/* Main Image */}
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                            <img
                                src="/images/University Management Interface.png"
                                alt="Advanced Management System"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Floating Card 1: Assist */}
                        <div className="absolute top-[20%] -left-12 bg-white p-5 rounded-2xl shadow-xl flex items-start gap-4 animate-float-slow z-10 w-[280px]">
                            <div className="w-16 h-16 rounded-full bg-[#ad4e7a] flex items-center justify-center shrink-0">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M22 6L12 13L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="flex flex-col gap-2 w-full pt-1">
                                <span className="text-sm font-bold text-gray-800 uppercase tracking-wide">I NEED YOUR ASSIST</span>
                                <div className="h-3 w-full bg-gray-200 rounded-full"></div>
                                <div className="h-3 w-3/4 bg-gray-200 rounded-full"></div>
                            </div>
                        </div>

                        {/* Floating Card 2: Call */}
                        <div className="absolute bottom-[15%] -right-8 bg-white p-5 rounded-2xl shadow-xl flex items-start gap-4 animate-float-delayed z-10 w-[280px]">
                            <div className="w-16 h-16 rounded-full bg-[#a39062] flex items-center justify-center shrink-0">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 16.92V19.92C22.0011 20.1986 21.9441 20.4742 21.8325 20.7294C21.7209 20.9846 21.5573 21.2137 21.3521 21.402C21.1468 21.5902 20.9046 21.7336 20.6407 21.8228C20.3769 21.912 20.0974 21.9452 19.82 21.92C16.7429 21.5857 13.787 20.5342 11.19 18.81C8.77382 17.1846 6.72533 15.0872 5.16 12.6C3.522 10.15 2.515 7.37 2.19 4.39C2.1648 4.11364 2.19793 3.8352 2.28701 3.57245C2.37608 3.30971 2.51912 3.06836 2.70678 2.86395C2.89445 2.65954 3.12255 2.49656 3.37648 2.38543C3.63041 2.2743 3.90467 2.21742 4.182 2.22H7.18C7.658 2.217 8.121 2.388 8.487 2.7C8.852 3.013 9.098 3.447 9.176 3.92C9.324 4.885 9.567 5.836 9.897 6.76C10.007 7.069 10.03 7.399 9.963 7.717C9.896 8.035 9.742 8.329 9.516 8.569L7.756 10.329C9.728 13.896 12.634 16.7 16.299 18.579L18.059 16.819C18.298 16.593 18.592 16.44 18.91 16.374C19.228 16.308 19.558 16.331 19.867 16.441C20.791 16.771 21.742 17.014 22.707 17.162C23.184 17.241 23.621 17.49 23.935 17.857C24.25 18.225 24.425 18.69 24.42 19.169V19.919" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15 7H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M18 4V10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="flex flex-col gap-2 w-full pt-1">
                                <span className="text-sm font-bold text-gray-800 uppercase tracking-wide">MAKE A CALL</span>
                                <div className="h-3 w-full bg-gray-200 rounded-full"></div>
                                <div className="h-3 w-3/4 bg-gray-200 rounded-full"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
