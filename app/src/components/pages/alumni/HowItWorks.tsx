import React from 'react';
import Image from 'next/image';

export default function HowItWorks() {
    return (
        <section className="bg-[#2A3E5C] py-16 lg:py-24 text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Section Header */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-12 lg:mb-20">
                    How It Works: Secure Examination Lifecycle
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Steps */}
                    <div className="space-y-8 lg:space-y-10">
                        {/* Step 1 */}
                        <div>
                            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                                Step 1: Pre-Exam Configuration
                            </h3>
                            <p className="text-[#D0D3B6] text-lg leading-relaxed">
                                Define exam schedules, create digital question banks, and generate hall tickets automatically.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div>
                            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                                Step 2: On-Exam Monitoring
                            </h3>
                            <p className="text-[#D0D3B6] text-lg leading-relaxed">
                                Manage center allocation, track attendance in real-time, and ensure secure question paper delivery.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div>
                            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                                Step 3: On-Screen Marking (OSM)
                            </h3>
                            <p className="text-[#D0D3B6] text-lg leading-relaxed">
                                Evaluators grade answer scripts digitall securely from anywhere, with auto-totaling to prevent errors.
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div>
                            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                                Step 4: Result Processing & Declaration
                            </h3>
                            <p className="text-[#D0D3B6] text-lg leading-relaxed">
                                instantly generate grade cards and publish results online with complete audit trails.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative w-full h-full min-h-[400px] lg:min-h-auto rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/assets/Seamless_timetable.png"
                            alt="Examination Lifecycle Process"
                            fill
                            className="object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
