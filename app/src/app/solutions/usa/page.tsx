import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Education ERP for Colleges & Universities in USA | Scholar Clone",
    description: "Scholar Clone is a comprehensive Higher Education ERP for US institutions. Manage admissions, financial aid, and campus operations efficiently.",
};

export default function USAPage() {
    return (
        <main className="min-h-screen pt-32 px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                    Future-Ready Education ERP for <span className="text-[#76B900]">USA</span> Colleges & Universities
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    Trusted by educational institutions across the USA to streamline operations and enhance student success.
                </p>
                <div className="mt-10 flex justify-center gap-4">
                    <Link href="/contact" className="rounded-full bg-[#2A518A] px-8 py-3 text-white font-semibold hover:bg-[#1e3a63] transition-colors">
                        Request Demo
                    </Link>
                    <Link href="/products/finance-hr" className="rounded-full border border-slate-300 px-8 py-3 text-slate-700 font-semibold hover:bg-slate-50 transition-colors">
                        View Pricing
                    </Link>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Financial Aid Management</h3>
                    <p className="text-slate-600">Streamline scholarship tracking, grant management, and student financial aid processing.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Student Engagement</h3>
                    <p className="text-slate-600">Boost retention rates with AI-powered student success and engagement tools.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Regulatory Compliance</h3>
                    <p className="text-slate-600">Ensure compliance with federal and state reporting requirements effortlessly.</p>
                </div>
            </div>
        </main>
    );
}
