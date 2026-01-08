import { Metadata } from 'next';
import Link from 'next/link';
import InventoryHero from '@/components/pages/inventory/InventoryHero';
import InventoryBenefits from '@/components/pages/inventory/InventoryBenefits';
import InventoryWhyNeed from '@/components/pages/inventory/InventoryWhyNeed';
import InventoryKeyFeatures from '@/components/pages/inventory/InventoryKeyFeatures';
import InventoryFutureProof from '@/components/pages/inventory/InventoryFutureProof';

export const metadata: Metadata = {
    title: 'Inventory & Asset Management - Track Everything',
    description: 'Efficiently manage institutional assets, inventory, and procurement with Scholar Clone\'s comprehensive asset management system.',
    keywords: 'inventory management, asset management, procurement, asset tracking',
};

export default function InventoryManagementPage() {
    return (
        <main className="min-h-screen bg-white">
            <InventoryHero />
            <InventoryBenefits />
            <InventoryWhyNeed />
            <InventoryKeyFeatures />
            <InventoryFutureProof />


        </main>
    );
}
