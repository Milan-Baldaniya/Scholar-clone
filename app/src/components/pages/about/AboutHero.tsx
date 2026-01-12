'use client';

import TypewriterEffect from '@/components/ui/TypewriterEffect';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

export default function AboutHero() {
    return (
        <section className="relative w-full py-20 lg:py-32 bg-secondary-background overflow-hidden">
            {/* Background Vector */}
            <img
                src="/assets/VectorProduct1.png"
                alt="Background Vector Pattern"
                className="absolute left-[-2%] bottom-0 w-full h-full object-cover opacity-70 pointer-events-none"
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                <ScrollAnimation direction="up" variant="fade">
                    <div className="flex flex-col items-center gap-6">
                        {/* Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6">
                            <TypewriterEffect
                                text="Revolutionizing Education Management"
                                speed={0.03}
                                cursor={false}
                            />
                        </h1>

                        {/* Subheading */}
                        <p className="text-lg sm:text-xl text-success-muted max-w-3xl mx-auto leading-relaxed">
                            Empowering institutions with future-ready ERP solutions that streamline operations, enhance learning, and drive success.
                        </p>
                    </div>
                </ScrollAnimation>
            </div>

            {/* Decorative Elements */}
            <ScrollAnimation
                direction="none"
                variant="scaleUp"
                delay={0.3}
                className="absolute -right-20 top-20 w-64 h-64 bg-success-light/10 rounded-full blur-3xl pointer-events-none"
            >
                <div className="w-full h-full" />
            </ScrollAnimation>
            <ScrollAnimation
                direction="none"
                variant="scaleUp"
                delay={0.5}
                className="absolute -left-20 bottom-20 w-64 h-64 bg-primary-light/10 rounded-full blur-3xl pointer-events-none"
            >
                <div className="w-full h-full" />
            </ScrollAnimation>
        </section>
    );
}
