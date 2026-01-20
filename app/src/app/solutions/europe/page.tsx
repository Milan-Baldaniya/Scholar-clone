import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Education ERP for Colleges & Universities in Europe | Scholar Clone",
    description: "Scholar Clone provides GDPR-compliant Higher Education ERP solutions for European universities. Optimize campus management today.",
};

export default function EuropePage() {
    return (
        <main className="min-h-screen pt-32 px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                    Future-Ready Education ERP for <span className="text-[#76B900]">Europe</span> Colleges & Universities
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    Trusted by educational institutions across Europe. Secure, compliant, and efficient campus management.
                </p>
                <div className="mt-10 flex justify-center gap-4">
                    <Link href="/contact" className="rounded-full bg-[#2A518A] px-8 py-3 text-white font-semibold hover:bg-[#1e3a63] transition-colors">
                        Contact Sales
                    </Link>
                    <Link href="/about" className="rounded-full border border-slate-300 px-8 py-3 text-slate-700 font-semibold hover:bg-slate-50 transition-colors">
                        Learn More
                    </Link>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">GDPR Compliance</h3>
                    <p className="text-slate-600">Built with data privacy first, ensuring full compliance with European data protection regulations.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Multi-Language Support</h3>
                    <p className="text-slate-600">Interface available in multiple European languages to support diverse campuses.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Bologna Process Aligned</h3>
                    <p className="text-slate-600">Supports ECTS credit systems and degree structures aligned with European standards.</p>
                </div>
            </div>
        </main>
    );
}
