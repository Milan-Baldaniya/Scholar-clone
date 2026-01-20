import { Metadata } from 'next';
import ServicesHero from '@/components/pages/services/ServicesHero';
import AttendanceSystem from '@/components/pages/services/AttendanceSystem';
import ServicesBenefits from '@/components/pages/services/ServicesBenefits';
import VehicleTrackingSystem from '@/components/pages/services/VehicleTrackingSystem';
import VehicleTrackingBenefits from '@/components/pages/services/VehicleTrackingBenefits';
import VisualizeModule from '@/components/pages/services/VisualizeModule';

export const metadata: Metadata = {
    title: 'Education ERP Services | Implementation, Support & Training - Scholar Clone',
    description: 'Expert implementation, 24/7 technical support, and comprehensive training services for Scholar Clone\'s Higher Education ERP system. Ensure your institution\'s digital success.',
    keywords: 'education services, implementation, technical support, training, consulting, digital transformation',
    openGraph: {
        title: 'Education ERP Services | Implementation, Support & Training',
        description: 'Comprehensive services to help your institution succeed with our education management solutions.',
        images: ['/Images/Logo.png'],
        type: 'website',
    },
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <ServicesHero />

            {/* Attendance System Section */}
            <AttendanceSystem />

            {/* Benefits Section */}
            <ServicesBenefits />

            {/* Vehicle Tracking System Section */}
            <VehicleTrackingSystem />

            {/* Vehicle Tracking Benefits Section */}
            <VehicleTrackingBenefits />

            {/* Visualize Module Section */}
            <VisualizeModule />
        </main>
    );
}
