import PartnersHero from '@/components/pages/company/PartnersHero';
import PartnerGrid from '@/components/pages/company/PartnerGrid';

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Partner with Scholar Clone | Education Technology Partnership Program",
    description: "Expand your business by partnering with Scholar Clone. Join our network of technology partners, resellers, and consultants in the education sector.",
    openGraph: {
        title: "Become a Partner - Scholar Clone",
        description: "Join our global partner network and grow your education technology business together.",
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
