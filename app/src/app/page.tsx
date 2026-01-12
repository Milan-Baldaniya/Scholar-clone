import { HomeHero } from "@/components/pages/home/HomeHero";
import { HomeFeatures } from "@/components/pages/home/HomeFeatures";
import { HomeStudentLifecycle } from "@/components/pages/home/HomeStudentLifecycle";
import { HomeWhyChoose } from "@/components/pages/home/HomeWhyChoose";
import ScrollAnimation from "@/components/ui/ScrollAnimation"; // Import Animation
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Scholar Clone - Impact Focused Higher Education ERP System",
    description: "Empower your institution with Scholar Clone's Higher Education ERP. Streamline admissions, academics, accreditation, and alumni management with our AI-driven platform.",
    alternates: {
        canonical: 'https://scholarclone.com',
    },
    openGraph: {
        title: "Scholar Clone - Impact Focused Higher Education ERP System",
        description: "Empower your institution with Scholar Clone's Higher Education ERP. Streamline admissions, academics, accreditation, and alumni management.",
        images: ['/assets/Logo.png'],
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
            "https://www.facebook.com/LMS.ScholarClone/",
            "https://www.linkedin.com/company/scholar-clone-pvt-ltd/",
            "https://x.com/ScholarClone",
            "https://www.instagram.com/scholarclone/"
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

            <main className="min-h-screen bg-background flex flex-col overflow-x-hidden">
                {/* Hero Section - Internal Animations */}
                <HomeHero />

                {/* Features Section - Fade Up */}
                <ScrollAnimation direction="up" delay={0.2} className="relative z-10 w-full">
                    <HomeFeatures />
                </ScrollAnimation>

                {/* Student Lifecycle - Slide Left */}
                <ScrollAnimation direction="left" delay={0.2} className="w-full">
                    <HomeStudentLifecycle />
                </ScrollAnimation>

                {/* Why Choose - Slide Right */}
                <ScrollAnimation direction="right" delay={0.2} className="w-full">
                    <HomeWhyChoose />
                </ScrollAnimation>
            </main>
        </>
    );
}
