import { Metadata } from 'next';
import { AdministrativeHomePage } from '@/components/pages/administrative-management';

export const metadata: Metadata = {
    title: 'Higher Education Institute Management System - AI-Driven ERP',
    description: 'Transform your university or college with Scholar Clone. Comprehensive AI-driven ERP for academic administration, student lifecycle, and institutional growth.',
    keywords: 'higher education institute management system, university ERP software, college administration system, student lifecycle management, smart campus solution, AI in higher education, institutional automation',
    alternates: {
        canonical: 'https://scholarclone.com/products/administrative-management',
    },
    openGraph: {
        title: 'Higher Education Institute Management System - AI-Driven ERP',
        description: 'Transform your university with Scholar Clone\'s AI-powered management system. Streamline academics and administration.',
        images: ['/assets/Logo.png'],
        url: 'https://scholarclone.com/products/administrative-management',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Scholar Clone - Higher Education Institute Management System',
        description: 'Transform your institution with AI-driven management solutions.',
        images: ['/assets/Logo.png'],
    },
};

export default function Page() {
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Higher Education Institute Management System",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
        },
        "description": "Comprehensive AI-driven ERP for academic administration, student lifecycle, and institutional growth.",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "120"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <AdministrativeHomePage />
        </>
    )
}
