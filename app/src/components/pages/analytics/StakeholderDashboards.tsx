'use client';

import React from 'react';
import { User, GraduationCap, Building2, Briefcase } from 'lucide-react';

const roles = [
    {
        title: "For Management",
        icon: <Building2 className="w-6 h-6" />,
        features: ["Financial Health", "Admission Trends", "Strategic Planning"],
        color: "bg-blue-50 text-blue-700"
    },
    {
        title: "For Deans & HODs",
        icon: <Briefcase className="w-6 h-6" />,
        features: ["Dept Performance", "Faculty Workload", "Resource Utilization"],
        color: "bg-purple-50 text-purple-700"
    },
    {
        title: "For Faculty",
        icon: <User className="w-6 h-6" />,
        features: ["Class Attendance", "Learning Outcomes", "Research Output"],
        color: "bg-orange-50 text-orange-700"
    },
    {
        title: "For Students",
        icon: <GraduationCap className="w-6 h-6" />,
        features: ["Academic Progress", "Attendance Status", "Skills Profile"],
        color: "bg-green-50 text-green-700"
    }
];

export default function StakeholderDashboards() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Empowering Every Stakeholder</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Personalized dashboards ensure that everyone from the Chancellor to the Student
                        sees exactly what they need to succeed.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {roles.map((role, idx) => (
                        <div key={idx} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group">
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${role.color} group-hover:scale-110 transition-transform`}>
                                {role.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{role.title}</h3>
                            <ul className="space-y-3">
                                {role.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-center gap-2 text-slate-500 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
