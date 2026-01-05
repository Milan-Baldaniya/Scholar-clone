import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { StudentLifecycle } from "@/components/home/StudentLifecycle";
import { WhyChoose } from "@/components/home/WhyChoose";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home - Higher Education ERP Software",
    description: "Scholar Clone provides comprehensive higher education management solutions. Streamline academics, administration, student lifecycle, and institutional growth with our cutting-edge ERP system.",
    openGraph: {
        title: "Scholar Clone - Transform Your Institution with Modern ERP",
        description: "Future-ready solutions that empower your campus. Streamline operations, elevate learning, and drive success.",
        images: ['/Images/Logo.png'],
    },
};

export default function Home() {
    // JSON-LD Structured Data for SEO
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Scholar Clone",
        "alternateName": "Triz Innovation PVT LTD",
        "url": "https://scholarclone.com",
        "logo": "https://scholarclone.com/Images/Logo.png",
        "description": "Higher Education ERP and Management System provider",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
        },
        "sameAs": [
            "https://www.facebook.com/scholarclone",
            "https://www.linkedin.com/company/scholarclone",
            "https://twitter.com/scholarclone"
        ]
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Scholar Clone",
        "url": "https://scholarclone.com",
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://scholarclone.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://scholarclone.com"
            }
        ]
    };

    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <main className="min-h-screen bg-background flex flex-col">
                <Hero />
                <Features />
                <StudentLifecycle />
                <WhyChoose />
            </main>
        </>
    );
}
