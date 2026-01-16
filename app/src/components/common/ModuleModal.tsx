'use client';

import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';

interface ModuleModalProps {
    isOpen: boolean;
    onClose: () => void;
    icon: React.ReactNode;
    title: string;
    description: string;
    benefits?: string[];
    whyChooseUs?: string[];
}

export default function ModuleModal({
    isOpen,
    onClose,
    icon,
    title,
    description,
    benefits,
    whyChooseUs
}: ModuleModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 text-left">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={(e) => {
                    e.nativeEvent.stopImmediatePropagation();
                    e.stopPropagation();
                    onClose();
                }}
            ></div>

            <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 p-0 flex flex-col max-h-[90vh]">

                {/* Modal Header */}
                <div className="bg-[#2A3E5C] p-6 sm:p-8 flex justify-between items-start shrink-0">
                    <div className="flex items-center gap-4 text-white">
                        <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md">
                            {icon}
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold">
                            {title}
                        </h3>
                    </div>
                    <button
                        onClick={(e) => {
                            e.nativeEvent.stopImmediatePropagation();
                            e.stopPropagation();
                            onClose();
                        }}
                        className="text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Modal Content - Scrollable */}
                <div
                    className="p-6 sm:p-8 overflow-y-auto custom-scrollbar overscroll-contain"
                    data-lenis-prevent
                >

                    {/* Description */}
                    <div className="mb-8">
                        <h4 className="text-lg font-bold text-[#2A3E5C] mb-3 uppercase tracking-wide opacity-80">Overview</h4>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            {description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Benefits */}
                        {benefits && benefits.length > 0 && (
                            <div>
                                <h4 className="text-lg font-bold text-[#00804c] mb-4 uppercase tracking-wide flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5" /> Key Benefits
                                </h4>
                                <ul className="space-y-3">
                                    {benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#00804c] mt-2 shrink-0"></div>
                                            <span className="text-gray-700">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Why Choose Us */}
                        {whyChooseUs && whyChooseUs.length > 0 && (
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <h4 className="text-lg font-bold text-[#2A3E5C] mb-4 uppercase tracking-wide">
                                    Why Choose This?
                                </h4>
                                <ul className="space-y-3">
                                    {whyChooseUs.map((reason, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#2A3E5C] mt-2 shrink-0"></div>
                                            <span className="text-gray-700 font-medium">{reason}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* Modal Footer */}
                <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end shrink-0">
                    <button
                        onClick={(e) => {
                            e.nativeEvent.stopImmediatePropagation();
                            e.stopPropagation();
                            onClose();
                        }}
                        className="px-6 py-2.5 bg-[#2A3E5C] hover:bg-[#1a237e] text-white font-medium rounded-xl transition-colors shadow-lg hover:shadow-xl"
                    >
                        Close Details
                    </button>
                </div>
            </div>
        </div>
    );
}
