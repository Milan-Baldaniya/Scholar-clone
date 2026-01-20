import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Frequently Asked Questions | Scholar Clone Support",
    description: "Find answers to common questions about Scholar Clone ERP, implementation, pricing, and support.",
};

const faqs = [
    {
        question: "What is Scholar Clone?",
        answer: "Scholar Clone is a comprehensive Higher Education ERP designed to streamline academic and administrative operations for colleges and universities."
    },
    {
        question: "Is the system NEP 2020 compliant?",
        answer: "Yes, Scholar Clone is fully aligned with the National Education Policy (NEP) 2020, supporting Outcome Based Education (OBE) and choice-based credit systems."
    },
    {
        question: "Do you offer solutions for international universities?",
        answer: "Absolutely. We have specialized modules for different regions including the USA, Europe, and Southeast Asia, ensuring compliance with local educational standards."
    },
    {
        question: "How long does implementation take?",
        answer: "Implementation time varies based on the size of the institution and modules chosen, but typically ranges from 4 to 12 weeks for a full rollout."
    },
    {
        question: "Is my data secure?",
        answer: "Security is our top priority. We use industry-standard encryption, regular backups, and role-based access control to ensure your data is safe and GDPR/DPDP compliant."
    }
];

export default function FAQPage() {
    return (
        <main className="min-h-screen pt-32 px-6 lg:px-8 max-w-4xl mx-auto mb-20">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h1>
                <p className="text-xl text-slate-600">Common questions about our Education ERP</p>
            </div>

            <div className="space-y-6">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{faq.question}</h3>
                        <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}
