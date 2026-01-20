import { Metadata } from 'next';
import Link from 'next/link';
import ContactHero from '@/components/pages/contact/ContactHero';
import ContactForm from '@/components/pages/contact/ContactForm';
import ContactMap from '@/components/pages/contact/ContactMap';

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
            <h1 className="sr-only">Contact Scholar Clone</h1>
            <ContactHero />

            <div className="max-w-4xl mx-auto px-4 py-8 text-center">
                <p className="text-lg text-gray-700 leading-relaxed">
                    We are here to help you transform your educational institution. whether you have questions about our ERP features, need a customized demo, or require technical support, our team is ready to assist you. Reach out to us via the form below, email, or visit our office. Let's build the future of education together.
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12">
                <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-100">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Global Headquarters</h2>
                    <ul className="space-y-4 text-slate-700">
                        <li className="flex items-start gap-3">
                            <span className="font-semibold min-w-[100px]">Address:</span>
                            <span>Triz Innovation PVT LTD, Tech Park, Pune, Maharashtra, India - 411045</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="font-semibold min-w-[100px]">Phone:</span>
                            <a href="tel:+919876543210" className="hover:text-[#2A518A] transition-colors">+91-98765-43210</a>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="font-semibold min-w-[100px]">Email:</span>
                            <a href="mailto:contact@scholarclone.com" className="hover:text-[#2A518A] transition-colors">contact@scholarclone.com</a>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="font-semibold min-w-[100px]">Time Zone:</span>
                            <span>IST (UTC+05:30) - 9:00 AM to 6:00 PM</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-100">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Regional Support</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-[#2A518A] mb-2">USA & North America</h3>
                            <p className="text-slate-600 text-sm">Dedicated support line: +1-555-0123-456 (EST 9AM - 5PM)</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-[#2A518A] mb-2">Europe</h3>
                            <p className="text-slate-600 text-sm">London Office: +44 20 7123 4567 (GMT 9AM - 5PM)</p>
                        </div>
                    </div>
                </div>
            </div>

            <ContactForm />

            <ContactMap />

        </main>
    );
}
