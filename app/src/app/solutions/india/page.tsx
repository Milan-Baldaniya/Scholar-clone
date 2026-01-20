import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Education ERP for Colleges & Universities in India | Scholar Clone",
    description: "Scholar Clone is a leading Education ERP trusted by educational institutions across India. Streamline admissions, exams, and campus management.",
};

export default function IndiaPage() {
    return (
        <main className="min-h-screen pt-32 px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                    Future-Ready Education ERP for <span className="text-[#76B900]">India</span> Colleges & Universities
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                    Trusted by educational institutions across India to streamline operations and enhance student success.
                </p>
                <div className="mt-10 flex justify-center gap-4">
                    <Link href="/contact" className="rounded-full bg-[#2A518A] px-8 py-3 text-white font-semibold hover:bg-[#1e3a63] transition-colors">
                        Get Free Demo
                    </Link>
                    <Link href="/products/student-lifecycle" className="rounded-full border border-slate-300 px-8 py-3 text-slate-700 font-semibold hover:bg-slate-50 transition-colors">
                        Explore Features
                    </Link>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">NAAC/NBA Accreditation</h3>
                    <p className="text-slate-600">Automated reports and compliance management specifically for Indian accreditation standards.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">NEP 2020 Compliant</h3>
                    <p className="text-slate-600">Fully aligned with the National Education Policy 2020 framework for higher education.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Outcome Based Education</h3>
                    <p className="text-slate-600">Implementation of OBE framework as mandated by Indian regulatory bodies.</p>
                </div>
            </div>
        </main>
    );
}
