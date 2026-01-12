import { Metadata } from 'next';
import {
    FinanceHero,
    FinanceSmartAttendance,
    FinanceManagement,
    FinanceIntegration,
    FinanceFuture,
    FinanceModules
} from '@/components/pages/finance-hr';

export const metadata: Metadata = {
    title: 'Finance & HR Management Software for Educational Institutions',
    description: 'Simplify financial operations and workforce management with Scholar Clone. Features include fee management, payroll automation, budgeting, and compliance.',
    keywords: 'finance management software, hr management for schools, payroll automation education, fee collection system, budget management tool, institutional accounting software, employee records management',
    alternates: {
        canonical: 'https://scholarclone.com/products/finance-hr',
    },
    openGraph: {
        title: 'Finance & HR Management Software for Educational Institutions',
        description: 'Unified financial operations and workforce management for automated institutional growth.',
        images: ['/assets/Logo.png'],
        url: 'https://scholarclone.com/products/finance-hr',
        type: 'website',
    },
};

export default function TimetableAttendancePage() {
    return (
        <main className="min-h-screen bg-white">
            <FinanceHero />
            <FinanceModules />
            <FinanceSmartAttendance />
            <FinanceManagement />
            <FinanceIntegration />
            <FinanceFuture />
        </main>
    );
}
