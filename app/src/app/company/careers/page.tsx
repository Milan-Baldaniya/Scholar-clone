import CareerHero from '@/components/pages/company/CareerHero';
import CareerIntro from '@/components/pages/company/CareerIntro';
import EmployeeBenefits from '@/components/pages/company/EmployeeBenefits';
import CareerValues from '@/components/pages/company/CareerValues';
import CareerRoles from '@/components/pages/company/CareerRoles';

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
