'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import ChipView from '@/components/ui/ChipView';

export default function AdministrativeHero() {
    const router = useRouter();
    const [demoRequested, setDemoRequested] = useState<boolean>(false)

    const handleGetDemo = (): void => {
        setDemoRequested(true);
        // Simulate a brief loading state before redirecting
        setTimeout(() => {
            router.push('/contact');
        }, 500);
    }

    return (
        <section className="w-full bg-secondary-background relative overflow-hidden pb-20 lg:pb-28">
            {/* Background Vector */}
            <img
                src="/assets/VectorProduct1.png"
                alt="Background Vector Pattern"
                className="absolute left-[-2%] bottom-0 w-full h-full object-cover opacity-70 pointer-events-none"
            />
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">

                    {/* Left Content Column */}
                    <div className="w-full lg:w-[48%] flex flex-col gap-8 lg:gap-10">

                        {/* Chip Badges */}
                        <div className="flex flex-wrap gap-4 sm:gap-6">
                            <ChipView
                                text="Unified"
                                className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white border-2 border-white/40 bg-transparent rounded-3xl px-5 lg:px-7 py-2 lg:py-3"
                            />
                            <ChipView
                                text="Administration"
                                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-primary-background border-2 border-white bg-white rounded-3xl px-6 lg:px-8 py-2 lg:py-3"
                            />
                        </div>

                        {/* Headline */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight text-white">
                            Administrative Management Systems & Core Operations
                        </h1>

                        {/* Description */}
                        <p className="text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-success-muted max-w-xl">
                            A centralized enterprise ecosystem integrating every aspect of institutional operations—from governance and compliance to resource management, transport, and stakeholder engagement.
                        </p>

                        {/* CTA Button with annotation */}
                        <div className="relative inline-block mt-4">
                            <Button
                                text={demoRequested ? "Demo Requested!" : "Get Your Free Demo"}
                                text_font_size="text-base sm:text-lg lg:text-xl"
                                text_font_weight="font-medium"
                                text_color="text-success-background"
                                fill_background_color="bg-success-light"
                                border_border_radius="rounded-full"
                                padding="py-3 lg:py-4 px-6 lg:px-8"
                                className="shadow-[12px_25px_48px_#6a867b42] hover:bg-success-light hover:scale-100"
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

                            {/* "Future Proof solution" annotation with arrow */}
                            <div className="absolute left-[280px] -top-4 flex-col items-start hidden lg:flex z-30">
                                <p className="text-lg font-normal whitespace-nowrap rotate-[20deg] ml-20 mt-4">
                                    <span className="text-[#5DDBD3] italic">Master </span>
                                    <span className="text-white">your core</span>
                                    <br />
                                    <span className="text-white">operations</span>
                                </p>
                                <img
                                    src="/assets/Arrow_UNIVERSITY_MANAGMENT.png"
                                    alt="Arrow pointing to button"
                                    className="w-24 h-auto mt-2 object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Images Stack */}
                    <div className="w-full lg:w-[50%] relative">
                        <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[620px]">

                            {/* Large Image - Top Right (University Campus) */}
                            <div className="absolute top-0 right-0 w-[72%] h-[62%] rounded-[24px] overflow-hidden shadow-2xl z-10">
                                <img
                                    src="/assets/University Campus Technology.png"
                                    alt="Higher Education Campus Technology"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Small Image - Bottom Left (Smart Learning) */}
                            <div className="absolute bottom-0 left-0 w-[50%] h-[58%] rounded-[24px] overflow-hidden shadow-2xl z-20">
                                <img
                                    src="/assets/Smart Learning Environment.png"
                                    alt="Smart Learning Environment"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* U-Shape Decorative Frame */}
                            <svg
                                className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
                                viewBox="0 0 500 1200"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                            >
                                {/* U-shape: entire shape moved down */}
                                <path
                                    d="M 400 300
                                       L 400 1160 
                                       Q 400 1250 310 1250 
                                       L 215 1250 
                                       Q 125 1250 125 1160 
                                       L 125 550"
                                    stroke="#86A1A1"
                                    strokeWidth="8"
                                    fill="none"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
