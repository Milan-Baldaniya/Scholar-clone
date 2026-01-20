import AboutHero from "@/components/pages/about/AboutHero";
import WhatWeDo from "@/components/pages/about/WhatWeDo";
import SuccessJourney from '@/components/pages/about/SuccessJourney';

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Scholar Clone | Impact-Focused Education ERP & Team",
    description: "Discover Scholar Clone's mission to transform higher education with AI-powered ERP solutions. Meet the team driving innovation in campus management for universities and colleges.",
    openGraph: {
        title: "About Scholar Clone | Impact-Focused Education ERP & Team",
        description: "Discover our mission to empower institutions with cutting-edge ERP solutions.",
        images: ['/Images/hero_aboutus.jpg'],
    },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <AboutHero />
            <WhatWeDo />
            <SuccessJourney />
        </main>
    );
}
