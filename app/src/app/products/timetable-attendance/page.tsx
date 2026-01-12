import { Metadata } from 'next';
import TimetableHero from '@/components/pages/timetable-attendance/TimetableHero';
import SmartAttendance from '@/components/pages/timetable-attendance/SmartAttendance';
import EffortlessManagement from '@/components/pages/timetable-attendance/EffortlessManagement';
import SeamlessIntegration from '@/components/pages/timetable-attendance/SeamlessIntegration';
import ExperienceFuture from '@/components/pages/timetable-attendance/ExperienceFuture';
import FinanceHRModules from '@/components/pages/timetable-attendance/FinanceHRModules';

export const metadata: Metadata = {
    title: 'Finance & HR Solutions - Unified Financial Operations',
    description: 'Comprehensive financial and HR management including fee collection, payroll, budgeting, and compliance for educational institutions.',
    keywords: 'finance management, HR solutions, payroll processing, fee collection, educational erp',
};

export default function TimetableAttendancePage() {
    return (
        <main className="min-h-screen bg-white">
            <TimetableHero />
            <FinanceHRModules />
            <SmartAttendance />
            <EffortlessManagement />
            <SeamlessIntegration />
            <ExperienceFuture />
        </main>
    );
}
