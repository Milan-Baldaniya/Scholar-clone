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
    title: 'Finance & HR Solutions - Unified Financial Operations',
    description: 'Comprehensive financial and HR management including fee collection, payroll, budgeting, and compliance for educational institutions.',
    keywords: 'finance management, HR solutions, payroll processing, fee collection, educational erp',
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
