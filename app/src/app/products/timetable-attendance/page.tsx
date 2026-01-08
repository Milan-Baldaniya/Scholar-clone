import { Metadata } from 'next';
import TimetableHero from '@/components/pages/timetable-attendance/TimetableHero';
import SmartAttendance from '@/components/pages/timetable-attendance/SmartAttendance';
import EffortlessManagement from '@/components/pages/timetable-attendance/EffortlessManagement';
import SeamlessIntegration from '@/components/pages/timetable-attendance/SeamlessIntegration';
import ExperienceFuture from '@/components/pages/timetable-attendance/ExperienceFuture';

export const metadata: Metadata = {
    title: 'Timetable & Attendance Management - Smart Scheduling',
    description: 'Automate timetable creation and track attendance in real-time with Scholar Clone\'s intelligent scheduling system.',
    keywords: 'timetable management, attendance tracking, scheduling, biometric attendance',
};

export default function TimetableAttendancePage() {
    return (
        <main className="min-h-screen bg-white">
            <TimetableHero />
            <SmartAttendance />
            <EffortlessManagement />
            <SeamlessIntegration />
            <ExperienceFuture />
        </main>
    );
}
