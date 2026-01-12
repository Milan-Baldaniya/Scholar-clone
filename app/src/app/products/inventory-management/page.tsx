import { Metadata } from 'next';
import Link from 'next/link';
import InventoryHero from '@/components/pages/inventory/InventoryHero';
import InventoryBenefits from '@/components/pages/inventory/InventoryBenefits';
import InventoryWhyNeed from '@/components/pages/inventory/InventoryWhyNeed';
import InventoryKeyFeatures from '@/components/pages/inventory/InventoryKeyFeatures';
import InventoryFutureProof from '@/components/pages/inventory/InventoryFutureProof';
import LearningTeachingModules from '@/components/pages/inventory/LearningTeachingModules';

export const metadata: Metadata = {
    title: 'Learning & Teaching Platforms - LMS & OBE Solutions',
    description: 'Comprehensive digital learning platforms including LMS, OBE, CBCS, and Academic Planning for modern institutions.',
    keywords: 'LMS, learning management system, OBE, outcome based education, digital learning, academic planning',
};

export default function InventoryManagementPage() {
    return (
        <main className="min-h-screen bg-white">
            <InventoryHero />
            <LearningTeachingModules />
            <InventoryBenefits />
            <InventoryWhyNeed />
            <InventoryKeyFeatures />
            <InventoryFutureProof />


        </main>
    );
}
