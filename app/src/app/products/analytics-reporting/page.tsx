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
    title: "Analytics & Reporting Tools | Scholar Clone",
    description: "Turn institutional data into actionable intelligence with AI-powered analytics and comprehensive reporting.",
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
