import { Metadata } from 'next';
import HomePage from '@/components/products/HomePage';

export const metadata: Metadata = {
    title: 'University Management System - AI-Driven Higher Education ERP | Scholar Clone',
    description: 'Transform your university with Scholar Clone\'s AI-powered management system. Streamline academics, administration, student lifecycle, and institutional growth with our comprehensive ERP platform.',
    keywords: 'university management system, AI-driven education, student lifecycle management, smart classrooms, educational technology, university automation, adaptive learning, digital transformation, higher education ERP',

    openGraph: {
        title: 'Scholar Clone - AI-Driven University Management System',
        description: 'Revolutionary AI-powered university management system. Streamline student lifecycle, smart classrooms, and administrative workflows.',
        images: ['/Images/Logo.png'],
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Scholar Clone - University Management System',
        description: 'Transform your institution with AI-driven management solutions.',
        images: ['/Images/Logo.png'],
    },
}

export default function Page() {
    return <HomePage />
}
