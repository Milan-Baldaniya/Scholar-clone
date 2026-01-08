import React from 'react';
import Image from 'next/image';

export default function HowItWorks() {
    return (
        <section className="bg-[#2A3E5C] py-16 lg:py-24 text-white">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-8">

                {/* Section Header */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-12 lg:mb-20">
                    How It Works: A Simple Yet Powerful System
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Steps */}
                    <div className="space-y-8 lg:space-y-10">
                        {/* Step 1 */}
                        <div>
                            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                                Step 1: Centralized Data Entry
                            </h3>
                            <p className="text-[#D0D3B6] text-lg leading-relaxed">
                                Easily input alumni details, including name, contact info, graduation year, degree, and career updates.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div>
                            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                                Step 2: Organized & Searchable Records
                            </h3>
                            <p className="text-[#D0D3B6] text-lg leading-relaxed">
                                Filter alumni based on different parameters—quickly retrieve specific graduates for outreach or verification.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div>
                            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                                Step 3: Secure & Controlled Access
                            </h3>
                            <p className="text-[#D0D3B6] text-lg leading-relaxed">
                                Allow different departments to access alumni records without compromising data security.
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div>
                            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                                Step 4: Future-Proof Your Institution’s Alumni Network
                            </h3>
                            <p className="text-[#D0D3B6] text-lg leading-relaxed">
                                Keep alumni data up to date, ensuring lifelong engagement opportunities.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative w-full h-full min-h-[400px] lg:min-h-auto rounded-[30px] overflow-hidden shadow-2xl">
                        <Image
                            src="/assets/Howitswork_alumni.png"
                            alt="How Scholar Clone Alumni System Works"
                            fill
                            className="object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
