'use client';

import dynamic from 'next/dynamic';
import animationData from '../../../../public/animations/Career_animation.json';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function CareerIntro() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="
                    flex flex-col lg:flex-row items-center gap-12 lg:gap-20
                    relative
                    // Change top-[-110px] to move Up/Down (Y-axis)
                    top-[-110px]
                    // Change left-[0px] to move Left/Right (X-axis)
                    left-[0px]
                ">
                    {/* Left Side: Content */}
                    <div className="w-full lg:w-1/2 text-left space-y-6">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
                            Shape the Future of EdTech with Us
                        </h2>
                        <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                            <p>
                                At Scholar Clone, we are redefining education with cutting-edge
                                technology, AI-driven learning, and school management solutions that
                                empower students, educators, and institutions.
                            </p>
                            <p>
                                If you're passionate about transforming education, solving real-world
                                challenges, and growing your career in an innovation-driven culture,
                                you're in the right place.
                            </p>
                            <p className="font-medium text-blue-700 flex items-center gap-2">
                                <span>🚀</span> Join us and be part of something bigger!
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Animation */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="w-full max-w-[600px] relative">
                            <Lottie
                                animationData={animationData}
                                loop={true}
                                autoplay={true}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
