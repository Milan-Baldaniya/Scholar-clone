'use client';

import React from 'react';
import { Database, Shield, Check, Lock, RefreshCcw, Server } from 'lucide-react';

export default function DigitalFoundation() {
    return (
        <section className="py-20 lg:py-28 bg-white" id="security">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        A Secure Digital Foundation
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Ensure seamless transition from legacy systems and protect your institutional data with bank-grade security on the cloud.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                    {/* Migration Card */}
                    <div className="rounded-3xl p-8 lg:p-12 bg-slate-50 border border-slate-100 flex flex-col">
                        <div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-8">
                            <RefreshCcw className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">
                            Seamless Data Migration
                        </h3>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Transitioning from old software? We ensure zero data loss with accurate mapping,
                            integrity checks, and historical record preservation.
                        </p>
                        <ul className="space-y-4 mt-auto">
                            {[
                                "Legacy data mapping & integrity preservation",
                                "Zero downtime transition strategies",
                                "Automated validation & accuracy checks"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                        <Check className="w-3 h-3" strokeWidth={3} />
                                    </div>
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Security Card */}
                    <div className="rounded-3xl p-8 lg:p-12 bg-[#2A3E5C] text-white flex flex-col relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-5">
                            <Shield className="w-64 h-64" />
                        </div>

                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 text-white">
                                <Lock className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">
                                Enterprise Cloud Security
                            </h3>
                            <p className="text-blue-100 mb-8 leading-relaxed">
                                Protect sensitive research and institutional data with advanced encryption,
                                access controls, and continuous threat monitoring.
                            </p>
                            <ul className="space-y-4 mt-auto">
                                {[
                                    "End-to-end data encryption",
                                    "Role-based access & audit logs",
                                    "Automated backups & disaster recovery"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-blue-500/30 flex items-center justify-center text-blue-200 shrink-0">
                                            <Shield className="w-3 h-3" />
                                        </div>
                                        <span className="text-blue-50 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
