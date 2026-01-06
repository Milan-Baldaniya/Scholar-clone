import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Contact Us - Get in Touch',
    description: 'Contact Scholar Clone for inquiries about our education management solutions. We\'re here to help transform your institution.',
    keywords: 'contact, support, inquiry, demo request',
    openGraph: {
        title: 'Contact Scholar Clone',
        description: 'Get in touch with our team to learn how we can help your institution.',
        images: ['/Images/Logo.png'],
        type: 'website',
    },
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#2A3E5C] to-[#1a2a40] text-white py-16 lg:py-20">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                        Contact Us
                    </h1>
                    <p className="text-xl text-slate-200 max-w-2xl mx-auto">
                        Have questions? We'd love to hear from you.
                    </p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-20 lg:py-28">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">
                                Get in Touch
                            </h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Ready to transform your institution? Fill out the form and our team will get back to you within 24 hours.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#F6F7ED] flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">📧</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900">Email</h3>
                                        <p className="text-slate-600">info@scholarclone.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#F6F7ED] flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">📞</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900">Phone</h3>
                                        <p className="text-slate-600">+91 123 456 7890</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#F6F7ED] flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">📍</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900">Office</h3>
                                        <p className="text-slate-600">Triz Innovation PVT LTD<br />India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-[#F6F7ED] rounded-2xl p-8">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#76B900] focus:border-transparent outline-none"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#76B900] focus:border-transparent outline-none"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#76B900] focus:border-transparent outline-none"
                                        placeholder="john@university.edu"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="institution" className="block text-sm font-medium text-slate-700 mb-2">
                                        Institution
                                    </label>
                                    <input
                                        type="text"
                                        id="institution"
                                        name="institution"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#76B900] focus:border-transparent outline-none"
                                        placeholder="Your University"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#76B900] focus:border-transparent outline-none resize-none"
                                        placeholder="Tell us about your needs..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full rounded-[20px] bg-[#76B900] px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-[#67a300] transition-all"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
