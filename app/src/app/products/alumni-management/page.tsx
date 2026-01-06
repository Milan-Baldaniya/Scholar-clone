import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Alumni Management System - Connect & Engage',
    description: 'Build and maintain strong alumni networks with Scholar Clone\'s Alumni Management System. Track engagement, organize events, and foster lifelong connections.',
    keywords: 'alumni management, alumni network, alumni engagement, alumni events',
};

export default function AlumniManagementPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#2A3E5C] to-[#1a2a40] text-white py-20 lg:py-28">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <span className="text-sm font-semibold text-[#76B900] uppercase tracking-wide">Product</span>
                        <h1 className="text-4xl lg:text-6xl font-bold mt-2 mb-6">
                            Alumni Management System
                        </h1>
                        <p className="text-xl text-slate-200 mb-8">
                            Build lasting relationships with your alumni community. Track engagement,
                            organize events, and create meaningful connections that benefit your institution.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="/contact"
                                className="rounded-[20px] bg-[#76B900] px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-[#67a300] transition-all"
                            >
                                Get Demo
                            </Link>
                            <Link
                                href="/products"
                                className="rounded-[20px] bg-white/10 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-white/20 transition-all"
                            >
                                All Products
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: 'Alumni Directory', description: 'Comprehensive searchable directory of all alumni', icon: '📖' },
                            { title: 'Event Management', description: 'Organize and track alumni events and reunions', icon: '📅' },
                            { title: 'Fundraising', description: 'Manage donations and fundraising campaigns', icon: '💰' },
                            { title: 'Mentorship Programs', description: 'Connect current students with alumni mentors', icon: '🤝' },
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

            {/* CTA Section */}
            <section className="bg-[#1E4584] py-16 text-white text-center">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-4">Ready to engage your alumni?</h2>
                    <p className="text-lg text-blue-100 mb-8">Get a personalized demo of our Alumni Management System.</p>
                    <Link
                        href="/contact"
                        className="inline-block rounded-[20px] bg-[#76B900] px-10 py-4 text-lg font-semibold text-white shadow-sm hover:bg-[#67a300] transition-all"
                    >
                        Request Demo
                    </Link>
                </div>
            </section>
        </main>
    );
}
