import PartnersHero from '@/components/pages/company/PartnersHero';
import PartnerGrid from '@/components/pages/company/PartnerGrid';

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Partners",
    description: "Partner with Scholar Clone to expand your reach in the education sector. Explore our partnership programs for schools, higher education institutes, and corporations.",
    openGraph: {
        title: "Become a Partner - Scholar Clone",
        description: "Join our partner network and grow your education business.",
        images: ['/Images/Hero_Partners.png'],
    },
};

export default function PartnersPage() {
    return (
        <main>
            <PartnersHero />
            <PartnerGrid />
        </main>
    );
}
