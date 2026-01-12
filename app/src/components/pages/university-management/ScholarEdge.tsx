'use client';
import Button from '@/components/ui/Button';

export default function ScholarEdge() {
    const handleGetStarted = (): void => {
        console.log('Get Started clicked')
    }

    const features = [
        '🔹 Integrated University & College Management Systems',
        '🔹 End-to-End Application & Document Tracking',
        '🔹 360° Feedback & Grievance Redressal Mechanisms',
        '🔹 Digital Accreditation & Compliance Readiness',
        '🔹 Seamless Alumni & International Linkages'
    ]

    return (
        <section className="w-full py-10 lg:py-20 mt-0 lg:mt-0">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">

                    <div className="w-full lg:w-[54%] flex flex-col gap-8 lg:gap-8 justify-start items-start">

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight text-left text-[#264653] w-full lg:w-[96%] font-['Mukta']">
                            The Administrative Advantage<br />
                            Streamline, Simplify & <br />
                            Supercharge Your Institution!
                        </h2>

                        <div className="flex flex-col gap-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <span className="text-[#0070f3] text-lg mt-1">◆</span>
                                    <p className="text-base sm:text-lg text-gray-700 font-['Mukta'] font-medium">
                                        {feature.replace('🔹 ', '')}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <Button
                            text="Get Started Free"
                            text_font_size="text-lg lg:text-xl"
                            text_font_family="Mukta"
                            text_font_weight="font-bold"
                            text_color="text-white"
                            fill_background_color="bg-[#007f5f]"
                            border_border_radius="rounded-full"
                            padding="py-3 px-8"
                            className="hover:bg-[#00664c] transition-colors duration-200 mt-4"
                            onClick={handleGetStarted}
                        >
                            <div className="flex items-center gap-2">
                                <span>Get Started Free</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 6L14.2929 11.2929C14.6262 11.6262 14.7929 11.7929 14.7929 12C14.7929 12.2071 14.6262 12.3738 14.2929 12.7071L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </Button>
                    </div>

                    <div className="w-full lg:w-[46%]">
                        <img
                            src="/assets/University Management Dashboard.png"
                            alt="University Management Dashboard"
                            className="w-full h-auto object-cover rounded-3xl shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
