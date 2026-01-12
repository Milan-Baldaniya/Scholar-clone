import { Metadata } from 'next';
import Link from 'next/link';
import { allProducts } from '@/config/navigation';

export const metadata: Metadata = {
    title: 'Education Management Solutions - Comprehensive ERP Modules',
    description: 'Explore Scholar Clone\'s complete suite of education management modules. From Student Lifecycle and Finance to Examination and Accreditation, find the perfect solution for your campus.',
    keywords: 'education management products, higher education ERP modules, student information system features, university management tools, college administration software, accreditation management, timetable software, alumni management',
    alternates: {
        canonical: 'https://scholarclone.com/products',
    },
    openGraph: {
        title: 'Education Management Solutions - Comprehensive ERP Modules',
        description: 'Comprehensive suite of education management solutions for modern institutions. Streamline every aspect of campus life.',
        images: ['/assets/Logo.png'],
        url: 'https://scholarclone.com/products',
        type: 'website',
    },
};

export default function ProductsPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#2A3E5C] to-[#1a2a40] text-white py-20 lg:py-28">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                        Our Products
                    </h1>
                    <p className="text-xl text-slate-200 max-w-3xl mx-auto">
                        Transform your institution with our comprehensive suite of education management solutions.
                        Each product is designed to streamline operations and enhance outcomes.
                    </p>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-20 lg:py-28">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allProducts.map((product) => (
                            <Link
                                key={product.slug}
                                href={product.href}
                                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-[#76B900]/30"
                            >
                                <div className="text-5xl mb-6">{product.icon}</div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#1E4584] transition-colors">
                                    {product.shortName}
                                </h2>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    {product.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {(product.features || []).map((feature) => (
                                        <span
                                            key={feature}
                                            className="bg-[#F6F7ED] text-slate-700 px-3 py-1 rounded-full text-sm"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                                <span className="text-[#76B900] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Learn More
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#F6F7ED] py-16">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        Not sure which product is right for you?
                    </h2>
                    <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                        Our team can help you find the perfect solution for your institution's unique needs.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block rounded-[20px] bg-[#76B900] px-10 py-4 text-lg font-semibold text-white shadow-sm hover:bg-[#67a300] transition-all"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </main>
    );
}
