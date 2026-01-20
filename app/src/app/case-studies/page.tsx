import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Case Studies | Scholar Clone Success Stories",
    description: "See how Scholar Clone has helped universities and colleges transform their operations and achieve excellence.",
};

const caseStudies = [
    {
        id: 1,
        title: "Global University Digital Transformation",
        institution: "Global Institute of Technology",
        challenge: "Fragmented systems causing data silos and inefficiencies in student data management.",
        solution: "Implemented Scholar Clone's centralized ERP with integrated SIS and Finance modules.",
        result: "30% reduction in administrative overhead and 100% data accuracy across departments."
    },
    {
        id: 2,
        title: "Scaling Admissions for Future Growth",
        institution: "City Liberal Arts College",
        challenge: "Manual admission processes leading to delays and lost applications.",
        solution: "Deployed Automated Admissions module with online application portal.",
        result: "Admission processing time reduced by 70%, with a 25% increase in completed applications."
    }
];

export default function CaseStudiesPage() {
    return (
        <main className="min-h-screen pt-32 px-6 lg:px-8 max-w-7xl mx-auto mb-20">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Success Stories</h1>
                <p className="text-xl text-slate-600">Real results from institutions using Scholar Clone</p>
            </div>

            <div className="space-y-12">
                {caseStudies.map((study) => (
                    <div key={study.id} className="bg-slate-50 rounded-2xl p-8 lg:p-12 border border-slate-100 flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/3">
                            <div className="h-full bg-slate-200 rounded-xl min-h-[200px]"></div> {/* Placeholder Image */}
                        </div>
                        <div className="md:w-2/3">
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">{study.title}</h2>
                            <p className="text-[#2A518A] font-semibold mb-6">{study.institution}</p>

                            <div className="grid gap-6">
                                <div>
                                    <h3 className="font-semibold text-slate-900 mb-1">Challenge:</h3>
                                    <p className="text-slate-600">{study.challenge}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 mb-1">Solution:</h3>
                                    <p className="text-slate-600">{study.solution}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 mb-1">Result:</h3>
                                    <p className="text-[#76B900] font-medium">{study.result}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
