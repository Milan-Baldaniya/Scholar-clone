import type { Metadata } from "next";

import AnalyticsHero from "@/components/pages/analytics/AnalyticsHero";
import AnalyticsReportingModules from "@/components/pages/analytics/AnalyticsReportingModules";
import UnifiedIntelligence from "@/components/pages/analytics/UnifiedIntelligence";
import AcademicPerformance from "@/components/pages/analytics/AcademicPerformance";
import AiPredictive from "@/components/pages/analytics/AiPredictive";
import StakeholderDashboards from "@/components/pages/analytics/StakeholderDashboards";
import ReportingCompliance from "@/components/pages/analytics/ReportingCompliance";
import StrategicGrowth from "@/components/pages/analytics/StrategicGrowth";

export const metadata: Metadata = {
    title: 'Education Analytics & Reporting Software | AI-Powered Insights',
    description: 'Turn institutional data into actionable intelligence with Scholar Clone. AI-powered analytics, predictive insights, and stakeholder dashboards for higher education.',
    keywords: 'education analytics software, institutional reporting tools, student performance analytics, predictive analytics in education, higher education BI, academic dashboard, nbr nif ranking analytics',
    alternates: {
        canonical: 'https://scholar-clone.vercel.app/products/analytics-reporting',
    },
    openGraph: {
        title: 'Education Analytics & Reporting Tools | Institutional Intelligence',
        description: 'Turn institutional data into strategic insights with Scholar Clone\'s AI analytics platform.',
        images: ['/assets/Logo.png'],
        url: 'https://scholarclone.com/products/analytics-reporting',
        type: 'website',
    },
};

export default function AnalyticsReportingPage() {
    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100">

            <AnalyticsHero />

            <AnalyticsReportingModules />

            <div className="bg-slate-50 h-px w-full" />

            <UnifiedIntelligence />

            <AcademicPerformance />

            <AiPredictive />

            <StakeholderDashboards />

            <ReportingCompliance />

            <StrategicGrowth />

        </main>
    );
}
