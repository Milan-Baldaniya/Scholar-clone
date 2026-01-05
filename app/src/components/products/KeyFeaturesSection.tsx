'use client';

interface KeyFeature {
    id: number;
    number: string;
    title: string;
    description: string;
}

interface KeyFeaturesSectionProps {
    keyFeatures: KeyFeature[];
    loading: boolean;
}

export default function KeyFeaturesSection({ keyFeatures, loading }: KeyFeaturesSectionProps) {
    const allFeatures = [...keyFeatures, ...keyFeatures, ...keyFeatures]

    return (
        <section className="w-full py-16 lg:py-24 bg-white">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-12 lg:gap-16 justify-start items-center">

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-center text-[#007f5f] w-full lg:w-[70%] font-['Corbel']">
                        Key Features That Redefine<br />University Management
                    </h2>

                    <div className="w-full flex flex-col gap-8 lg:gap-12">

                        {/* Row 1: Normal Alignment */}
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                            {loading ? (
                                Array.from({ length: 3 }).map((_, index) => (
                                    <div key={`skel-1-${index}`} className="bg-gray-200 animate-pulse rounded-lg h-[280px]" />
                                ))
                            ) : (
                                allFeatures.slice(0, 3).map((feature, index) => (
                                    <div key={`${feature.id}-${index}`} className="group w-full bg-[#2c3e50] rounded-xl p-8 flex flex-col gap-6 min-h-[280px] shadow-lg hover:shadow-xl transition-shadow duration-300">

                                        <div className="flex justify-start items-center gap-5">
                                            <div className="w-16 h-16 bg-[#fcfbf9] rounded-lg flex justify-center items-center flex-shrink-0 shadow-md">
                                                <span className="text-3xl font-bold text-[#1a237e] font-['Mukta']">
                                                    {feature.number}
                                                </span>
                                            </div>

                                            <h3 className="text-3xl font-bold leading-tight text-white font-['Mukta']">
                                                {feature.title}
                                            </h3>
                                        </div>

                                        <p className="text-xl font-normal leading-relaxed text-gray-200 font-['Hind_Guntur']">
                                            {feature.description}
                                        </p>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Row 2: Shifted Right (Zig-Zag) */}
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 lg:ml-24">
                            {loading ? (
                                Array.from({ length: 3 }).map((_, index) => (
                                    <div key={`skel-2-${index}`} className="bg-gray-200 animate-pulse rounded-lg h-[280px]" />
                                ))
                            ) : (
                                allFeatures.length > 0 && Array.from({ length: 3 }).map((_, i) => (
                                    <div key={`static-copy-${i}`} className="group w-full bg-[#2c3e50] rounded-xl p-8 flex flex-col gap-6 min-h-[280px] shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        <div className="flex justify-start items-center gap-5">
                                            <div className="w-16 h-16 bg-[#fcfbf9] rounded-lg flex justify-center items-center flex-shrink-0 shadow-md">
                                                <span className="text-3xl font-bold text-[#1a237e] font-['Mukta']">
                                                    {allFeatures[i % allFeatures.length].number}
                                                </span>
                                            </div>

                                            <h3 className="text-3xl font-bold leading-tight text-white font-['Mukta']">
                                                {allFeatures[i % allFeatures.length].title}
                                            </h3>
                                        </div>

                                        <p className="text-xl font-normal leading-relaxed text-gray-200 font-['Hind_Guntur']">
                                            {allFeatures[i % allFeatures.length].description}
                                        </p>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Row 3: Normal Alignment */}
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                            {loading ? (
                                Array.from({ length: 3 }).map((_, index) => (
                                    <div key={`skel-3-${index}`} className="bg-gray-200 animate-pulse rounded-lg h-[280px]" />
                                ))
                            ) : (
                                allFeatures.length > 0 && Array.from({ length: 3 }).map((_, i) => (
                                    <div key={`static-copy-2-${i}`} className="group w-full bg-[#2c3e50] rounded-xl p-8 flex flex-col gap-6 min-h-[280px] shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        <div className="flex justify-start items-center gap-5">
                                            <div className="w-16 h-16 bg-[#fcfbf9] rounded-lg flex justify-center items-center flex-shrink-0 shadow-md">
                                                <span className="text-3xl font-bold text-[#1a237e] font-['Mukta']">
                                                    {allFeatures[i % allFeatures.length].number}
                                                </span>
                                            </div>

                                            <h3 className="text-3xl font-bold leading-tight text-white font-['Mukta']">
                                                {allFeatures[i % allFeatures.length].title}
                                            </h3>
                                        </div>

                                        <p className="text-xl font-normal leading-relaxed text-gray-200 font-['Hind_Guntur']">
                                            {allFeatures[i % allFeatures.length].description}
                                        </p>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
