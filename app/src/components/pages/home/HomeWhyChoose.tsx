import Link from "next/link";

export function HomeWhyChoose() {
    return (
        <section className="bg-white py-20 lg:py-28" aria-labelledby="why-choose-heading">
            <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
                <h2 id="why-choose-heading" className="sr-only">Why Choose Scholar Clone</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Text Content */}
                    <div className="space-y-8">
                        <h2 className="text-4xl lg:text-5xl font-bold text-[#1E4584]">
                            Why Choose Scholar Clone?
                        </h2>

                        <p className="text-lg text-slate-700 leading-relaxed">
                            Scholar Clone's Higher Education Solution is built to <span className="font-bold text-slate-900">simplify operations, enhance learning, and drive institutional success</span>.
                            With its <span className="font-bold text-slate-900">intelligent automation, AI-powered analytics, and personalized learning approach</span>,
                            institutions can provide an unmatched educational experience while staying ahead in a rapidly evolving academic landscape.
                        </p>

                        <div className="space-y-6">
                            <p className="text-xl font-bold text-slate-900">
                                Experience the next generation of <br className="hidden lg:block" />
                                Higher Education Management today!
                            </p>

                            <Link
                                href="#"
                                className="inline-block rounded-[20px] bg-[#76B900] px-12 py-4 text-white font-semibold shadow-lg hover:bg-[#67a300] transition-all min-w-[200px] text-center"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="/images/whychoose.png"
                            alt="Why Choose Scholar Clone - E-Learning Features"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
