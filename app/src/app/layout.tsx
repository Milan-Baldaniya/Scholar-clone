import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/Footer";
import GlobalLoader from "@/components/ui/GlobalLoader";
import ScrollToTop from "@/components/utils/ScrollToTop";

const inter = Inter({ subsets: ["latin"], display: 'swap', variable: '--font-inter' });

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: '#1186fe',
};

export const metadata: Metadata = {
    title: {
        default: "Scholar Clone - Leading Higher Education ERP & Campus Management System",
        template: "%s"
    },
    description: "Transform your institution with Scholar Clone's AI-powered Higher Education ERP. Comprehensive solutions for Student Lifecycle, Accreditation (NAAC/NBA), Finance, HR, and Examination Management.",
    keywords: [
        "Higher Education ERP",
        "Campus Management System",
        "Student Information System",
        "University Management Software",
        "College ERP Software",
        "Academic Administration System",
        "Student Lifecycle Management",
        "NAAC Accreditation Software",
        "NBA Compliance Tool",
        "Education ERP India",
        "AI in Education",
        "Outcome Based Education Software"
    ],
    authors: [{ name: "Scholar Clone Team", url: "https://scholar-clone.vercel.app" }],
    creator: "Triz Innovation PVT LTD",
    publisher: "Triz Innovation PVT LTD",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://scholar-clone.vercel.app'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: "Scholar Clone - Leading Higher Education ERP & Campus Management System",
        description: "Transform your institution with Scholar Clone's AI-powered Higher Education ERP. Comprehensive solutions for Student Lifecycle, Accreditation, and Administration.",
        url: 'https://scholarclone.com',
        siteName: 'Scholar Clone',
        images: [
            {
                url: '/assets/Logo.png', // Ideally should be a 1200x630 og-image
                width: 1200,
                height: 630,
                alt: 'Scholar Clone - Transforming Higher Education',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Scholar Clone - Higher Education ERP',
        description: 'AI-powered ERP for Universities & Colleges. Manage Admissions, Exams, Finance & Accreditation seamlessly.',
        images: ['/assets/Logo.png'],
        creator: '@scholarclone',
        site: '@scholarclone',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/assets/Logo.png',
        apple: '/assets/Logo.png',
    },
    verification: {
        google: 'google-site-verification-code', // Placeholder, verify if user provided real one or leave as placeholder
    },
    category: 'technology',
};


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body className={inter.className} suppressHydrationWarning={true}>
                <Suspense fallback={null}>
                    <GlobalLoader />
                </Suspense>
                <ScrollToTop />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html >
    );
}
