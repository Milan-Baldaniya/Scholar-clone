import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Accreditation & Compliance Management Software (NAAC/NBA/NIRF)',
    description: 'Simplify NAAC, NBA, and NIRF compliance with Scholar Clone. Centralized document management, self-assessment reports, and audit trails for higher education accreditation.',
    keywords: 'accreditation management software, NAAC compliance tool, NBA accreditation system, NIRF ranking software, higher education compliance, audit trail system, self assessment report generator',
    alternates: {
        canonical: 'https://scholarclone.com/products/accreditation-compliance',
    },
    openGraph: {
        title: 'Accreditation & Compliance Management Software (NAAC/NBA)',
        description: 'Simplify NAAC, NBA, and NIRF compliance with Scholar Clone. Centralized document management and audit trails.',
        images: ['/assets/Logo.png'],
        url: 'https://scholarclone.com/products/accreditation-compliance',
        type: 'website',
    },
};

export default function AccreditationCompliancePage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="bg-gradient-to-br from-[#2A3E5C] to-[#1a2a40] text-white py-20 lg:py-28">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <span className="text-sm font-semibold text-[#76B900] uppercase tracking-wide">Product</span>
                        <h1 className="text-4xl lg:text-6xl font-bold mt-2 mb-6">
                            Accreditation & Compliance
                        </h1>
                        <p className="text-xl text-slate-200 mb-8">
                            Streamline your accreditation journey. Prepare for NAAC, NBA, and
                            other regulatory requirements with our comprehensive compliance tools.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/contact" className="rounded-[20px] bg-[#76B900] px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-[#67a300] transition-all">
                                Get Demo
                            </Link>
                            <Link href="/products" className="rounded-[20px] bg-white/10 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-white/20 transition-all">
                                All Products
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: 'Document Management', description: 'Centralized document repository for all compliance needs', icon: '📁' },
                            { title: 'Self-Assessment', description: 'Built-in self-assessment reports (SSR, SAR)', icon: '✅' },
                            { title: 'Audit Trail', description: 'Complete audit trail for all activities', icon: '🔍' },
                            { title: 'Custom Reports', description: 'Generate reports in required formats', icon: '📄' },
                        ].map((feature) => (
                            <div key={feature.title} className="bg-[#F6F7ED] rounded-2xl p-6 text-center">
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-slate-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
