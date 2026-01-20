import CareerHero from '@/components/pages/company/CareerHero';
import CareerIntro from '@/components/pages/company/CareerIntro';
import EmployeeBenefits from '@/components/pages/company/EmployeeBenefits';
import CareerValues from '@/components/pages/company/CareerValues';
import CareerRoles from '@/components/pages/company/CareerRoles';

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers at Scholar Clone | Join Our Mission to Transform Education",
    description: "Build the future of education with Scholar Clone. Explore career opportunities, company culture, and benefits. Join our passionate team in Pune, India.",
    openGraph: {
        title: "Careers at Scholar Clone | Join Our Team",
        description: "Join our mission to transform education with technology. View open positions and benefits.",
        images: ['/Images/Hero_Career.png'],
    },
};

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <CareerHero />
            <CareerIntro />
            <EmployeeBenefits />
            <CareerValues />
            <CareerRoles />
        </main>
    );
}
