export function Features() {
    const leftFeatures = [
        "Admissions & Enrollment",
        "Campus & Faculty Management",
        "Finance & Fee Management",
    ];

    const rightFeatures = [
        "Learning Management System (LMS)",
        "Student Support & Career Guidance",
        "AI- Powered Insights & Reporting",
    ];

    return (
        <div className="pt-32 pb-24 bg-white" id="features">
            <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left: Component Image */}
                    <div className="relative -ml-12 lg:-ml-24">
                        <div className="w-full rounded-2xl overflow-hidden flex items-center justify-center bg-[#E8E8E8]/[.22]">
                            <div className="relative w-full h-full">
                                <img
                                    src="/Images/Comprehensive Features for Every Need.png"
                                    alt="Education Isometric Illustration"
                                    className="w-full h-[450px] object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="flex flex-col justify-between h-full py-2">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
                                Comprehensive Features for Every Need
                            </h2>
                            <p className="text-lg leading-relaxed text-slate-600 mb-4">
                                At Scholar Clone, we redefine how higher education institutions operate by offering a comprehensive solution that enhances every aspect of campus life. Our platform simplifies admissions and enrollment with automation, ensuring a smooth experience for students and staff. The personalized learning paths feature adapts to the unique needs of each student, providing better academic outcomes.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                            <ul className="space-y-6">
                                {leftFeatures.map((item) => (
                                    <li key={item} className="text-[#00A859] font-bold text-base tracking-wide">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <ul className="space-y-6">
                                {rightFeatures.map((item) => (
                                    <li key={item} className="text-[#00A859] font-bold text-base tracking-wide">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
