import Link from "next/link";

export function Hero() {
    return (
        <div className="relative bg-[#F6F7ED] shadow-[0_4px_8px_0px_rgba(42,62,92,0.25)] z-10">

            {/* ================= HERO CONTENT ================= */}
            <div className="mx-auto w-full px-6 lg:px-8 pt-12 lg:pt-20 pb-16 lg:pb-28 relative z-10">
                <div className="max-w-2xl space-y-6 lg:space-y-8">

                    {/* H1 */}
                    <h1 className="text-5xl lg:text-[3.5rem] font-bold tracking-tight text-slate-900 leading-[1.15]">
                        Future-Ready Solutions that Empower Your Campus
                    </h1>

                    {/* First paragraph */}
                    <p className="text-xl font-bold text-slate-700">
                        Streamline Operations, Elevate Learning, and Drive Success.
                    </p>

                    {/* Second paragraph */}
                    <p className="text-base text-slate-600 leading-relaxed max-w-lg lg:ml-12 mt-4">
                        Scholar Clone is a Higher Education ERP that streamlines academics,
                        administration, and student engagement, integrating technology for
                        efficiency and success.
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-4 lg:ml-12 mt-16">
                        <Link
                            href="#"
                            className="rounded-[20px] bg-[#76B900] px-10 py-4 text-lg font-semibold text-white shadow-sm hover:bg-[#67a300] transition-all"
                        >
                            Get Started
                        </Link>

                        <Link
                            href="#"
                            className="rounded-[20px] bg-white px-10 py-4 text-lg font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 transition-all"
                        >
                            Learn More
                        </Link>
                    </div>

                </div>
            </div>

            {/* ================= RIGHT IMAGE ================= */}
            <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[45%] z-0 rounded-l-[80px] overflow-hidden">
                <div className="h-full w-full relative">
                    <img
                        src="/Images/HeroImage.png"
                        alt="University Campus"
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#F6F7ED]/20"></div>
                </div>
            </div>

            {/* ================= FEATURE CARDS ================= */}
            <div className="mx-auto w-full px-6 lg:px-8 relative z-20 -mb-20">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl lg:ml-12">

                    {/* Card 1 */}
                    <div className="bg-[#2A518A] p-6 rounded-2xl text-white shadow-[4px_4px_5px_0px_rgba(7,68,132,0.25)] hover:-translate-y-1 transition-transform min-h-[160px] flex flex-col justify-between">
                        <div>
                            <h3 className="font-bold text-xl mb-2">Adaptive</h3>
                            <p className="text-sm text-slate-200 leading-relaxed">
                                Customizable solutions tailored to your institution's needs.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#2A518A] p-6 rounded-2xl text-white shadow-[4px_4px_5px_0px_rgba(7,68,132,0.25)] hover:-translate-y-1 transition-transform min-h-[160px] flex flex-col justify-between">
                        <div>
                            <h3 className="font-bold text-xl mb-2">Efficient</h3>
                            <p className="text-sm text-slate-200 leading-relaxed">
                                Save time, reduce overhead, and improve overall performance.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#2A518A] p-6 rounded-2xl text-white shadow-[4px_4px_5px_0px_rgba(7,68,132,0.25)] hover:-translate-y-1 transition-transform min-h-[160px] flex flex-col justify-between">
                        <div>
                            <h3 className="font-bold text-xl mb-2">Innovative</h3>
                            <p className="text-sm text-slate-200 leading-relaxed">
                                Cutting-edge features powered by the latest technology.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}
