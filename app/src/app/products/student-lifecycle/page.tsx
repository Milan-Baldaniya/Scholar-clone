import { Metadata } from 'next';
import Image from 'next/image';
import {
    StudentLifecycleHero,
    StudentBenefits,
    StudentCoreFeatures,
    StudentWhyChooseUs,
    StudentCTA,
    StudentModules
} from '@/components/pages/student-lifecycle';

export const metadata: Metadata = {
    title: 'Student Lifecycle Management System (SLCM) | Admission to Alumni',
    description: 'A unified Student Lifecycle Management System (SLCM) managing the complete journey from admission to alumni success. specialized for universities and colleges.',
    keywords: 'student lifecycle management, slcm software, student information system, higher education crm, admission management system, student success platform, alumni management, university student portal',
    alternates: {
        canonical: 'https://scholarclone.com/products/student-lifecycle',
    },
    openGraph: {
        title: 'Student Lifecycle Management System (SLCM) | Scholar Clone',
        description: 'A unified ecosystem managing the complete student journey from admission to alumni success.',
        images: ['/assets/Logo.png'],
        url: 'https://scholarclone.com/products/student-lifecycle',
        type: 'website',
    },
};

export default function TransportManagementPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="relative">
                <StudentLifecycleHero />
                {/* Overlapping Hero Image */}
                <div className="absolute right-0 bottom-0 translate-y-[35%] z-20 hidden lg:block w-[50%] max-w-[900px] p-3 rounded-3xl bg-[linear-gradient(to_bottom,#ffffff_65%,#2A3E5C_65%)] shadow-2xl">
                    <Image
                        src="/assets/student_intro.png"
                        alt="Student Lifecycle Dashboard"
                        width={900}
                        height={675}
                        className="w-full h-auto object-contain rounded-2xl"
                        priority
                    />
                </div>
            </div>
            <StudentBenefits />
            <StudentModules />
            <StudentCoreFeatures />
            <StudentWhyChooseUs />
            <StudentCTA />
        </main>
    );
}
