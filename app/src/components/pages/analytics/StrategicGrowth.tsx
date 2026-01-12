'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function StrategicGrowth() {
    return (
        <section className="py-24 bg-white text-center">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                    From Data to Dominance
                </h2>
                <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                    Institutions that leverage data grow 3x faster. Scholar Clone gives you the
                    intelligence backbone to optimize resources, improve outcomes, and lead in education.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-colors shadow-xl">
                        Schedule an Analytics Audit
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
}
