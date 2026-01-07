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
            <ContactHero />

            <ContactForm />

            <ContactMap />

        </main>
    );
}
