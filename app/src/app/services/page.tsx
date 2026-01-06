import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Services - Implementation, Support & Training',
    description: 'Scholar Clone provides comprehensive services including implementation, 24/7 support, training programs, and digital transformation consulting for educational institutions.',
    keywords: 'education services, implementation, technical support, training, consulting, digital transformation',
    openGraph: {
        title: 'Scholar Clone Services - Implementation, Support & Training',
        description: 'Comprehensive services to help your institution succeed with our education management solutions.',
        images: ['/Images/Logo.png'],
        type: 'website',
    },
};

const services = [
    {
        title: 'Implementation',
        description: 'End-to-end system implementation with dedicated project managers ensuring smooth deployment and minimal disruption to your operations.',
        icon: '🚀',
        href: '/services/implementation',
        features: ['Project Planning', 'Data Migration', 'System Configuration', 'Go-Live Support'],
    },
    {
        title: 'Support',
        description: '24/7 technical support from our expert team to ensure your systems run smoothly and any issues are resolved quickly.',
        icon: '🛠️',
        href: '/services/support',
        features: ['24/7 Helpdesk', 'Remote Assistance', 'Bug Fixes', 'System Updates'],
    },
    {
        title: 'Training',
        description: 'Comprehensive training programs for your staff and faculty to maximize the value of your education management solutions.',
        icon: '📚',
        href: '/services/training',
        features: ['On-site Training', 'Online Courses', 'User Manuals', 'Certification'],
    },
    {
        title: 'Consulting',
        description: 'Strategic digital transformation consulting to help your institution modernize and stay ahead in the evolving education landscape.',
        icon: '💡',
        href: '/services/consulting',
        features: ['Needs Assessment', 'Strategy Planning', 'Process Optimization', 'Change Management'],
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#1E4584] to-[#0f2340] text-white py-20 lg:py-28">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                        Our Services
                    </h1>
                    <p className="text-xl text-slate-200 max-w-3xl mx-auto">
                        From implementation to ongoing support, we're with you every step of the way
                        to ensure your institution's success.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 lg:py-28">
                <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service) => (
                            <Link
                                key={service.title}
                                href={service.href}
                                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-[#1E4584]/30"
                            >
                                <div className="text-5xl mb-6">{service.icon}</div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#1E4584] transition-colors">
                                    {service.title}
                                </h2>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {service.features.map((feature) => (
                                        <span
                                            key={feature}
                                            className="bg-[#E8F4FD] text-[#1E4584] px-3 py-1 rounded-full text-sm"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                                <span className="text-[#1E4584] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Learn More
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
                        Ready to get started?
                    </h2>
                    <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                        Contact us today to discuss how our services can help transform your institution.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block rounded-[20px] bg-[#1E4584] px-10 py-4 text-lg font-semibold text-white shadow-sm hover:bg-[#163568] transition-all"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </main>
    );
}
