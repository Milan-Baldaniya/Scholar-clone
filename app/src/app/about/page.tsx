import AboutHero from "@/components/pages/about/AboutHero";
import WhatWeDo from "@/components/pages/about/WhatWeDo";
import SuccessJourney from '@/components/pages/about/SuccessJourney';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <AboutHero />
            <WhatWeDo />
            <SuccessJourney />
        </main>
    );
}
