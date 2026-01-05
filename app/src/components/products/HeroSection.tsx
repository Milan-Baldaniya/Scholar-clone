'use client';
import { useState } from 'react';
import Button from '../ui/Button';
import ChipView from '../ui/ChipView';

interface HeroSectionProps {
    loading: boolean;
}

export default function HeroSection({ loading }: HeroSectionProps) {
    const [demoRequested, setDemoRequested] = useState<boolean>(false)

    const handleGetDemo = (): void => {
        setDemoRequested(true)
        setTimeout(() => setDemoRequested(false), 3000)
    }

    if (loading) {
        return (
            <section className="w-full bg-secondary-background min-h-[600px] flex items-center justify-center animate-pulse">
                <div className="w-full max-w-[1440px] px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <div className="h-16 bg-white/20 rounded w-3/4"></div>
                        <div className="h-24 bg-white/20 rounded w-full"></div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="w-full bg-secondary-background relative overflow-hidden">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">

                    {/* Left Content Column */}
                    <div className="w-full lg:w-[48%] flex flex-col gap-8 lg:gap-10">

                        {/* Chip Badges */}
                        <div className="flex flex-wrap gap-4 sm:gap-6">
                            <ChipView
                                text="Empower"
                                className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white border-2 border-white/40 bg-transparent rounded-3xl px-5 lg:px-7 py-2 lg:py-3 font-['Rubik']"
                            />
                            <ChipView
                                text="The Future"
                                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-primary-background border-2 border-white bg-white rounded-3xl px-6 lg:px-8 py-2 lg:py-3 font-['Corbel']"
                            />
                        </div>

                        {/* Headline */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight text-white font-['Nunito_Sans']">
                            Transform Your University with AI-Driven, Adaptive Technology
                        </h1>

                        {/* Description */}
                        <p className="text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-success-muted max-w-xl font-['Rubik']">
                            With end-to-end digitalization, our system empowers administrators, faculty, students, and stakeholders with real-time insights, seamless workflows, and an adaptive learning ecosystem.
                        </p>

                        {/* CTA Button with annotation */}
                        <div className="relative inline-block mt-4">
                            <Button
                                text={demoRequested ? "Demo Requested!" : "Get Your Free Demo"}
                                text_font_size="text-base sm:text-lg lg:text-xl"
                                text_font_family="Nunito"
                                text_font_weight="font-medium"
                                text_color="text-success-background"
                                fill_background_color="bg-success-light"
                                border_border_radius="rounded-lg"
                                padding="py-3 lg:py-4 px-6 lg:px-8"
                                className="shadow-[12px_25px_48px_#6a867b42] hover:scale-105 transition-all duration-300"
                                onClick={handleGetDemo}
                                disabled={demoRequested}
                            >
                                <div className="flex items-center gap-2 lg:gap-3">
                                    <span>{demoRequested ? "Demo Requested!" : "Get Your Free Demo"}</span>
                                    {!demoRequested && (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 lg:w-5 lg:h-5">
                                            <path d="M9 6L14.2929 11.2929C14.6262 11.6262 14.7929 11.7929 14.7929 12C14.7929 12.2071 14.6262 12.3738 14.2929 12.7071L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </div>
                            </Button>

                            {/* "Future Proof solution" annotation - hidden for now as requested */}
                            <div className="absolute bottom-full right-0 mb-4 mr-8 hidden">
                                <p className="text-sm font-normal italic text-[#84ffff] whitespace-nowrap font-['Hind_Guntur']">
                                    Future Proof solution<br />for your University
                                </p>
                                <svg className="w-24 h-16 ml-8" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M 50 5 Q 30 20, 20 40 L 10 55" stroke="#84ffff" strokeWidth="2" fill="none" />
                                    <path d="M 10 55 L 15 50 L 8 48 Z" fill="#84ffff" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Right Images Stack */}
                    <div className="w-full lg:w-[50%] relative">
                        <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[620px]">

                            {/* Large Image - Top Right (University Campus) */}
                            <div className="absolute top-0 right-0 w-[72%] h-[62%] rounded-[24px] overflow-hidden shadow-2xl z-10">
                                <img
                                    src="/images/University Campus Technology.png"
                                    alt="University Campus Technology"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Small Image - Bottom Left (Smart Learning) */}
                            <div className="absolute bottom-0 left-0 w-[50%] h-[58%] rounded-[24px] overflow-hidden shadow-2xl z-20">
                                <img
                                    src="/images/Smart Learning Environment.png"
                                    alt="Smart Learning Environment"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Decorative border frame */}
                            <div className="absolute inset-0 border-2 border-white/8 rounded-[32px] pointer-events-none"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
