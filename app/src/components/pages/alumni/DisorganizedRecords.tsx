import Link from 'next/link';
import Image from 'next/image';

export default function DisorganizedRecords() {
    return (
        <section className="py-10 lg:py-16 bg-white">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#108A4B] mb-4">
                        Challenges in Traditional Examination Systems
                    </h2>
                    <p className="text-[#475569] max-w-2xl mx-auto leading-relaxed">
                        Manual paperwork, security risks, and delayed results—
                        without a digital system, examination integrity and speed suffer.
                    </p>
                </div>

                {/* Main Card */}
                <div className="bg-[#537396] rounded-[20px] lg:rounded-scaled-lg p-6 md:p-8 lg:p-12 overflow-hidden shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                        {/* Left Content */}
                        <div className="space-y-8">
                            <p className="text-white/90 text-base md:text-lg lg:text-xl leading-relaxed lg:leading-[2.2] mt-0 lg:-mt-4">
                                Institutions often struggle with chaotic manual exams, leading to
                                question paper leaks, seating mismanagement, and evaluation errors.
                                Handling thousands of physical answer scripts delays result processing,
                                frustrating students and parents. Lack of real-time monitoring makes
                                malpractice detection difficult. Scaling operations without automation
                                becomes impossible, risking the institution's reputation.
                            </p>

                            <div className="pt-8">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 bg-[#76B900] hover:bg-[#65a300] text-white px-6 py-2.5 lg:px-8 lg:py-3 rounded-lg font-semibold transition-colors shadow-lg text-sm lg:text-base"
                                >
                                    Get Started Today
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative h-full min-h-[250px] lg:min-h-[300px] w-full rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src="/assets/effortless_timetable.png"
                                alt="Examination process visual"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
