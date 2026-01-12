import { Metadata } from 'next';
import Image from 'next/image';
import TransportHero from '@/components/pages/transport/TransportHero';
import TransportBenefits from '@/components/pages/transport/TransportBenefits';
import TransportCoreFeatures from '@/components/pages/transport/TransportCoreFeatures';
import TransportWhyChooseUs from '@/components/pages/transport/TransportWhyChooseUs';
import TransportCTA from '@/components/pages/transport/TransportCTA';
import StudentLifecycleModules from '@/components/pages/transport/StudentLifecycleModules';

export const metadata: Metadata = {
    title: 'Student Lifecycle & Academic Management System',
    description: 'A unified ecosystem managing the complete student journey from admission to alumni success.',
    keywords: 'student lifecycle, academic management, SIS, education CRM, admission system',
};

export default function TransportManagementPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="relative">
                <TransportHero />
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
            <TransportBenefits />
            <StudentLifecycleModules />
            <TransportCoreFeatures />
            <TransportWhyChooseUs />
            <TransportCTA />
        </main>
    );
}
