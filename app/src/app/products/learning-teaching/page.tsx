import { Metadata } from 'next';
import Link from 'next/link';
import {
    LearningHero,
    LearningBenefits,
    LearningWhyNeed,
    LearningKeyFeatures,
    LearningFutureProof,
    LearningModules
} from '@/components/pages/learning-teaching';

export const metadata: Metadata = {
    title: 'Learning & Teaching Platforms - LMS & OBE Solutions',
    description: 'Comprehensive digital learning platforms including LMS, OBE, CBCS, and Academic Planning for modern institutions.',
    keywords: 'LMS, learning management system, OBE, outcome based education, digital learning, academic planning',
};

export default function InventoryManagementPage() {
    return (
        <main className="min-h-screen bg-white">
            <LearningHero />
            <LearningModules />
            <LearningBenefits />
            <LearningWhyNeed />
            <LearningKeyFeatures />
            <LearningFutureProof />
        </main>
    );
}
