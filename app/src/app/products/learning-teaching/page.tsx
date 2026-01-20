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
    title: 'Learning & Teaching Platforms | LMS, OBE & CBCS Solutions',
    description: 'Empower academic excellence with Scholar Clone\'s digital learning platforms. Integrated LMS, Outcome Based Education (OBE), CBCS, and AI-driven personalized learning.',
    keywords: 'learning management system, lms for higher education, outcome based education software, obe system, cbcs management, academic planning tool, digital learning platform, personalized adaptive learning',
    alternates: {
        canonical: 'https://scholarclone.com/products/learning-teaching',
    },
    openGraph: {
        title: 'Learning & Teaching Platforms - LMS, OBE & CBCS Solutions',
        description: 'Transform education with our advanced LMS and Outcome Based Education (OBE) platforms.',
        images: ['/assets/Logo.png'],
        url: 'https://scholarclone.com/products/learning-teaching',
        type: 'website',
    },
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
