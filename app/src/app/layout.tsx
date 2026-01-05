import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Scholar Clone - Higher Education Management",
    description: "Manage your institution efficiently with Scholar Clone's comprehensive Higher Education ERP solution",
    icons: {
        icon: '/Images/Logo.png',
        apple: '/Images/Logo.png',
    },
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/Footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body className={inter.className} suppressHydrationWarning={true}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html >
    );
}
