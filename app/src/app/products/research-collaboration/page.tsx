import type { Metadata } from "next";

import ResearchHero from "@/components/pages/research/ResearchHero";
import ResearchModules from "@/components/pages/research/ResearchModules";
import PhDLifecycle from "@/components/pages/research/PhDLifecycle";
import ResearchCollaboration from "@/components/pages/research/ResearchCollaboration";
import AnalyticsIntelligence from "@/components/pages/research/AnalyticsIntelligence";
import DigitalFoundation from "@/components/pages/research/DigitalFoundation";

export const metadata: Metadata = {
    title: 'Research Management & Collaboration Platform | Ph.D. Lifecycle & Analytics',
    description: 'Empower your institution with Scholar Clone\'s Research & Collaboration tools. Manage Ph.D. lifecycles, global linkages, and institutional analytics for strategic growth.',
    keywords: 'research management software, phd lifecycle management, institutional collaboration tool, higher education analytics, research grant management, university growth strategy, naac nirf data management',
    alternates: {
        canonical: 'https://scholar-clone.vercel.app/products/research-collaboration',
    },
    openGraph: {
        title: 'Research, Collaboration & Institutional Growth Software',
        description: 'Empower your institution with data-driven decision making, Ph.D. management, and collaborative research platforms.',
        images: ['/assets/Logo.png'],
        url: 'https://scholarclone.com/products/research-collaboration',
        type: 'website',
    },
};

export default function ResearchCollaborationPage() {
    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100">


            <ResearchHero />

            <ResearchModules />

            <PhDLifecycle />

            <div className="bg-slate-50 h-px w-full" /> {/* Separator if needed, but components handle it */}

            <ResearchCollaboration />

            <AnalyticsIntelligence />

            <DigitalFoundation />

            {/* Unified Growth Summary / CTA */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">
                        One Ecosystem for Institutional Excellence
                    </h2>
                    <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                        From individual scholar success to global institutional rankings,
                        Scholar Clone provides the integrated digital backbone you need to grow.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a href="/contact" className="px-8 py-4 bg-[#2A3E5C] text-white rounded-xl font-bold text-lg hover:bg-[#1e2d42] transition-colors shadow-lg">
                            Schedule a Strategic Consultation
                        </a>
                        <a href="/#products" className="px-8 py-4 bg-white text-[#2A3E5C] border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors">
                            Explore All Solutions
                        </a>
                    </div>
                </div>
            </section>


        </main>
    );
}
