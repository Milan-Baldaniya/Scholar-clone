import { Metadata } from 'next';
import Image from 'next/image';
import TransportHero from '@/components/pages/transport/TransportHero';
import TransportBenefits from '@/components/pages/transport/TransportBenefits';
import TransportCoreFeatures from '@/components/pages/transport/TransportCoreFeatures';
import TransportWhyChooseUs from '@/components/pages/transport/TransportWhyChooseUs';
import TransportCTA from '@/components/pages/transport/TransportCTA';

export const metadata: Metadata = {
    title: 'Transport & Vehicle Management - Fleet Solutions',
    description: 'Complete fleet management and route optimization for educational institutions with GPS tracking and safety features.',
    keywords: 'transport management, vehicle management, fleet management, GPS tracking, route optimization',
};

export default function TransportManagementPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="relative">
                <TransportHero />
                {/* Overlapping Hero Image */}
                <div className="absolute right-0 bottom-0 translate-y-[35%] z-20 hidden lg:block w-[45%] max-w-[800px]">
                    <Image
                        src="/assets/hero_product.png"
                        alt="Transport Management Dashboard"
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain"
                        priority
                    />
                </div>
            </div>
            <TransportBenefits />
            <TransportCoreFeatures />
            <TransportWhyChooseUs />
            <TransportCTA />
        </main>
    );
}
