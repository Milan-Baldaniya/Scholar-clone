'use client';
import Button from '@/components/ui/Button';

export default function DigitalTransformation() {
    const handleGetSystem = (): void => {
        console.log('Get System clicked')
    }

    return (
        <section className="w-full relative mt-0">
            {/* Split Background Container */}
            <div className="absolute inset-0 flex flex-col pointer-events-none">
                {/* Top Half: Transparent (matches page background) */}
                <div className="h-[50%] w-full bg-transparent"></div>
                {/* Bottom Half: Footer Color Extension */}
                <div className="h-[50%] w-full bg-[#2A3E5C]"></div>
            </div>

            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-16 lg:py-20">
                <div className="w-full rounded-3xl bg-[#e0f8f8] px-6 py-16 lg:px-20 lg:py-24 text-center shadow-lg relative overflow-hidden">

                    {/* Background Vector: Left */}
                    <img
                        src="/Images/Vector 7368.png"
                        alt=""
                        className="absolute top-0 left-0 h-full w-auto pointer-events-none z-0"
                    />

                    {/* Background Vector: Right */}
                    <img
                        src="/Images/Vector 7369.png"
                        alt=""
                        className="absolute top-0 right-0 h-full w-auto pointer-events-none z-0"
                    />

                    <div className="relative z-10 flex flex-col justify-center items-center gap-6 lg:gap-8">

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight text-[#264653] font-['Mukta']">
                            Secure. Scalable. Smart.
                        </h2>

                        <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight text-[#1a237e] font-['Mukta']">
                            Your Digital Transformation Begins Here!
                        </h3>

                        <p className="text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-gray-600 max-w-4xl font-['Hind_Guntur']">
                            Scholar Clone's University Management System ensures 100% data security, regulatory compliance, and seamless cloud integration. Stay ahead in the education revolution with a future-ready, AI-powered university ecosystem.
                        </p>

                        <Button
                            text="Get Your System Today!"
                            text_font_size="text-lg lg:text-xl"
                            text_font_family="Mukta"
                            text_font_weight="font-bold"
                            text_color="text-white"
                            fill_background_color="bg-[#007f5f]"
                            border_border_radius="rounded-full"
                            padding="py-3 px-8"
                            margin="mt-8"
                            className="hover:bg-[#00664c] transition-colors duration-200 shadow-md"
                            onClick={handleGetSystem}
                        >
                            <div className="flex items-center gap-2">
                                <span>Get Your System Today!</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 6L14.2929 11.2929C14.6262 11.6262 14.7929 11.7929 14.7929 12C14.7929 12.2071 14.6262 12.3738 14.2929 12.7071L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
