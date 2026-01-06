import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'About Us - Scholar Clone Story',
    description: 'Learn about Scholar Clone\'s mission to transform higher education through innovative technology solutions. Meet our team and discover our vision.',
    keywords: 'about scholar clone, education technology, company mission, vision, team',
    openGraph: {
        title: 'About Scholar Clone - Our Story',
        description: 'Transforming higher education through innovative technology solutions.',
        images: ['/Images/Logo.png'],
        type: 'website',
    },
};

const aboutSections = [
    {
        title: 'Our Story',
        description: 'Discover the journey that led to Scholar Clone and our commitment to education excellence.',
        icon: '📖',
        href: '/about/our-story',
    },
    {
        title: 'Our Team',
        description: 'Meet the passionate people behind Scholar Clone who are dedicated to your success.',
        icon: '👥',
        href: '/about/team',
    },
    {
        title: 'Mission & Vision',
        description: 'Understand our core values and the vision that drives everything we do.',
        icon: '🎯',
        href: '/about/mission-vision',
    },
    {
        title: 'Careers',
        description: 'Join our team and help shape the future of education technology.',
        icon: '🚀',
        href: '/about/careers',
    },
];

const stats = [
    { value: '500+', label: 'Institutions' },
    { value: '1M+', label: 'Students' },
    { value: '50+', label: 'Countries' },
    { value: '99.9%', label: 'Uptime' },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#007f5f] to-[#005540] text-white py-20 lg:py-28">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                        About Us
                    </h1>
                    <p className="text-xl text-green-100 max-w-3xl mx-auto">
                        We're on a mission to transform higher education through innovative,
                        AI-powered technology solutions that empower institutions worldwide.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-[#F6F7ED]">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <div className="text-4xl lg:text-5xl font-bold text-[#007f5f] mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-slate-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Sections Grid */}
            <section className="py-20 lg:py-28">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
                        Learn More About Us
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {aboutSections.map((section) => (
                            <Link
                                key={section.title}
                                href={section.href}
                                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-[#007f5f]/30"
                            >
                                <div className="text-5xl mb-6">{section.icon}</div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#007f5f] transition-colors">
                                    {section.title}
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    {section.description}
                                </p>
                                <span className="text-[#007f5f] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
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
        </main>
    );
}
