import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Timetable & Attendance Management - Smart Scheduling',
    description: 'Automate timetable creation and track attendance in real-time with Scholar Clone\'s intelligent scheduling system.',
    keywords: 'timetable management, attendance tracking, scheduling, biometric attendance',
};

export default function TimetableAttendancePage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="bg-gradient-to-br from-[#2A3E5C] to-[#1a2a40] text-white py-20 lg:py-28">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <span className="text-sm font-semibold text-[#76B900] uppercase tracking-wide">Product</span>
                        <h1 className="text-4xl lg:text-6xl font-bold mt-2 mb-6">
                            Timetable & Attendance Management
                        </h1>
                        <p className="text-xl text-slate-200 mb-8">
                            Smart scheduling and real-time attendance tracking that saves time
                            and ensures accurate records for your institution.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/contact" className="rounded-[20px] bg-[#76B900] px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-[#67a300] transition-all">
                                Get Demo
                            </Link>
                            <Link href="/products" className="rounded-[20px] bg-white/10 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-white/20 transition-all">
                                All Products
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: 'Auto Scheduling', description: 'AI-powered timetable generation', icon: '🤖' },
                            { title: 'Biometric Integration', description: 'Seamless biometric attendance tracking', icon: '👆' },
                            { title: 'Real-time Reports', description: 'Instant attendance analytics and reports', icon: '📊' },
                            { title: 'Notifications', description: 'Automated alerts for students and parents', icon: '🔔' },
                        ].map((feature) => (
                            <div key={feature.title} className="bg-[#F6F7ED] rounded-2xl p-6 text-center">
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-slate-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
