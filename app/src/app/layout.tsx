import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/Footer";
import GlobalLoader from "@/components/ui/GlobalLoader";
import ScrollToTop from "@/components/utils/ScrollToTop";

const inter = Inter({ subsets: ["latin"], display: 'swap', variable: '--font-inter' });

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: '#1186fe',
};

export const metadata: Metadata = {
    title: {
        default: "Scholar Clone - Higher Education Management System | ERP Software",
        template: "%s | Scholar Clone"
    },
    description: "Transform your institution with Scholar Clone's comprehensive Higher Education ERP solution. Streamline academics, administration, and student engagement with our cutting-edge education management system.",
    keywords: [
        "higher education ERP",
        "education management system",
        "student information system",
        "campus management software",
        "academic administration",
        "university ERP",
        "college management system",
        "student lifecycle management",
        "education technology",
        "institutional management"
    ],
    authors: [{ name: "Triz Innovation PVT LTD" }],
    creator: "Triz Innovation PVT LTD",
    publisher: "Triz Innovation PVT LTD",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://scholarclone.com'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: "Scholar Clone - Higher Education Management System",
        description: "Transform your institution with Scholar Clone's comprehensive Higher Education ERP solution. Streamline academics, administration, and student engagement.",
        url: 'https://scholarclone.com',
        siteName: 'Scholar Clone',
        images: [
            {
                url: '/Images/Logo.png',
                width: 1200,
                height: 630,
                alt: 'Scholar Clone - Higher Education ERP',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Scholar Clone - Higher Education Management System',
        description: 'Transform your institution with comprehensive ERP solution for higher education.',
        images: ['/Images/Logo.png'],
        creator: '@scholarclone',
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
        icon: '/Images/Logo.png',
        apple: '/Images/Logo.png',
    },
    verification: {
        google: 'your-google-verification-code',
        // yandex: 'your-yandex-verification-code',
        // bing: 'your-bing-verification-code',
    },
};


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body className={inter.className} suppressHydrationWarning={true}>
                <GlobalLoader />
                <ScrollToTop />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html >
    );
}
