import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'About Scholar Clone - Our Company, Partners & Clients',
    description: 'Learn about Scholar Clone\'s mission to transform education technology. Discover our strategic partnerships, success stories, and latest company news.',
    keywords: 'scholar clone company, education technology partners, edtech clients, company news, about scholar clone, education software provider',
    alternates: {
        canonical: 'https://scholarclone.com/company',
    },
    openGraph: {
        title: 'About Scholar Clone - Innovation in Education Technology',
        description: 'Partners, clients, and the latest news from Scholar Clone. Join us in building the future of education.',
        images: ['/assets/Logo.png'],
        url: 'https://scholarclone.com/company',
        type: 'website',
    },
};

const companySections = [
    {
        title: 'Partners',
        description: 'Explore our strategic partnerships with leading technology and education organizations.',
        icon: '🤝',
        href: '/company/partners',
    },
    {
        title: 'Clients',
        description: 'See how institutions around the world are transforming with Scholar Clone.',
        icon: '🏛️',
        href: '/company/clients',
    },
    {
        title: 'News & Updates',
        description: 'Stay up to date with the latest news, product releases, and company announcements.',
        icon: '📰',
        href: '/company/news',
    },
    {
        title: 'Contact',
        description: 'Get in touch with our team to learn how we can help your institution.',
        icon: '✉️',
        href: '/company/contact',
    },
];

export default function CompanyPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#2A518A] to-[#1a3560] text-white py-20 lg:py-28">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                        Our Company
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        Building the future of education technology through innovation,
                        partnerships, and a commitment to client success.
                    </p>
                </div>
            </section>

            {/* Company Sections Grid */}
            <section className="py-20 lg:py-28">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {companySections.map((section) => (
                            <Link
                                key={section.title}
                                href={section.href}
                                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-[#2A518A]/30"
                            >
                                <div className="text-5xl mb-6">{section.icon}</div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#2A518A] transition-colors">
                                    {section.title}
                                </h2>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    {section.description}
                                </p>
                                <span className="text-[#2A518A] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Explore
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#F6F7ED] py-16">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        Want to partner with us?
                    </h2>
                    <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                        We're always looking for strategic partnerships to expand our reach and impact in education.
                    </p>
                    <Link
                        href="/company/contact"
                        className="inline-block rounded-[20px] bg-[#2A518A] px-10 py-4 text-lg font-semibold text-white shadow-sm hover:bg-[#1f3d68] transition-all"
                    >
                        Get in Touch
                    </Link>
                </div>
            </section>
        </main>
    );
}
