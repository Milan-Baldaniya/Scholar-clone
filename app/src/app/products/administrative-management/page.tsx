import { Metadata } from 'next';
import { AdministrativeHomePage } from '@/components/pages/administrative-management';

export const metadata: Metadata = {
    title: 'Higher Education Institute Management System - AI-Driven ERP | Scholar Clone',
    description: 'Transform your university with Scholar Clone\'s AI-powered management system. Streamline academics, administration, student lifecycle, and institutional growth with our comprehensive ERP platform.',
    keywords: 'higher education institute management system, AI-driven education, student lifecycle management, smart classrooms, educational technology, institution automation, adaptive learning, digital transformation, higher education ERP',

    openGraph: {
        title: 'Scholar Clone - AI-Driven Higher Education Institute Management System',
        description: 'Revolutionary AI-powered institute management system. Streamline student lifecycle, smart classrooms, and administrative workflows.',
        images: ['/Images/Logo.png'],
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Scholar Clone - Higher Education Institute Management System',
        description: 'Transform your institution with AI-driven management solutions.',
        images: ['/Images/Logo.png'],
    },
}

export default function Page() {
    return <AdministrativeHomePage />
}
