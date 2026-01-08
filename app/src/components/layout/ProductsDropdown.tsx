'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { PRODUCTS_DROPDOWN_DATA } from '@/lib/data';
import * as Icons from 'lucide-react';

export default function ProductsDropdown({
    isOpen,
    onClose,
    onMouseEnter,
    onMouseLeave
}: {
    isOpen: boolean;
    onClose: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}) {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(null);

    if (!isOpen) return null;

    // Helper to dynamically get icon component
    const getIcon = (iconName: string, className?: string) => {
        // @ts-ignore
        const IconComponent = Icons[iconName];
        return IconComponent ? <IconComponent className={className} strokeWidth={1.5} /> : null;
    };

    const activeCategory = activeCategoryIndex !== null ? PRODUCTS_DROPDOWN_DATA[activeCategoryIndex] : null;

    return (
        <div
            className="fixed left-0 right-0 top-[70px] z-40 flex justify-center"
            onMouseLeave={onMouseLeave}
            onMouseEnter={onMouseEnter}
        >
            {/* Backdrop for click-outside closing */}
            <div className="absolute inset-0 h-screen bg-transparent" onClick={onClose} />

            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className={`
                    relative z-50 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex min-h-[500px] transition-all duration-300 ease-in-out
                    ${activeCategory ? 'w-[90vw] max-w-6xl' : 'w-auto'}
                `}
            >
                {/* LEFT SIDEBAR: Categories */}
                <div className={`
                    bg-slate-50 border-r border-slate-100 flex flex-col py-6 transition-all duration-300
                    ${activeCategory ? 'w-1/3' : 'w-[320px]'} 
                `}>
                    <h3 className="px-6 text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                        Product Categories
                    </h3>
                    <div className="flex flex-col gap-1 px-4">
                        {PRODUCTS_DROPDOWN_DATA.map((category, idx) => (
                            <button
                                key={idx}
                                onMouseEnter={() => setActiveCategoryIndex(idx)}
                                className={`
                                    flex items-center gap-4 px-4 py-3 rounded-xl text-left transition-all duration-200 group
                                    ${activeCategoryIndex === idx
                                        ? 'bg-white shadow-md text-blue-700'
                                        : 'text-slate-600 hover:bg-slate-200/50 hover:text-slate-900'}
                                `}
                            >
                                <div className={`
                                    p-2 rounded-lg transition-colors
                                    ${activeCategoryIndex === idx ? 'bg-blue-50 text-blue-600' : 'bg-white text-slate-400 group-hover:text-slate-600'}
                                `}>
                                    {getIcon(category.icon, "w-5 h-5")}
                                </div>
                                <div className="flex-1">
                                    <span className="block font-semibold text-sm">
                                        {category.category}
                                    </span>
                                </div>
                                <ChevronRight className={`w-4 h-4 transition-transform ${activeCategoryIndex === idx ? 'opacity-100 text-blue-400 translate-x-1' : 'opacity-0 -translate-x-2'}`} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* RIGHT CONTENT: Products Grid */}
                {activeCategory && (
                    <div className="w-2/3 bg-white p-8 flex flex-col animate-in fade-in slide-in-from-left-4 duration-300 fill-mode-forwards">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategoryIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="h-full flex flex-col"
                            >
                                {/* Category Header */}
                                <div className="mb-8 border-b border-slate-100 pb-6">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 bg-blue-100 rounded-lg text-blue-700">
                                            {getIcon(activeCategory.icon, "w-6 h-6")}
                                        </div>
                                        <h2 className="text-2xl font-bold text-slate-900">
                                            {activeCategory.category}
                                        </h2>
                                    </div>
                                    <p className="text-slate-500 text-base max-w-xl">
                                        {activeCategory.description}
                                    </p>
                                </div>

                                {/* Products Grid */}
                                <div className="grid grid-cols-2 gap-4">
                                    {activeCategory.products.map((product, pIdx) => (
                                        <Link
                                            key={pIdx}
                                            href={product.href}
                                            onClick={onClose}
                                            className="group flex items-start gap-4 p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-200 hover:shadow-sm"
                                        >
                                            <div className="p-2.5 bg-white rounded-lg shadow-sm border border-slate-100 group-hover:border-blue-100 group-hover:text-blue-600 transition-colors">
                                                {getIcon(product.icon, "w-6 h-6 text-slate-400 group-hover:text-blue-600")}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-slate-900 group-hover:text-blue-700 transition-colors mb-1">
                                                    {product.name}
                                                </h4>
                                                <span className="text-xs font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                                                    Explore Solution <ChevronRight className="w-3 h-3" />
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>

                                {/* CTA / Footer Area */}
                                <div className="mt-auto pt-8 flex items-center justify-between text-sm text-slate-400 border-t border-slate-50">
                                    <span>Need help exploring?</span>
                                    <Link href="/contact" className="text-blue-600 font-semibold hover:underline">
                                        Talk to an Expert &rarr;
                                    </Link>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                )}
            </motion.div>
        </div>
    );
}
