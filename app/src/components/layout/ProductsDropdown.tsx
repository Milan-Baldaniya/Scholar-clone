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
            className="absolute right-0 top-full z-50 pt-2"
            onMouseLeave={onMouseLeave}
            onMouseEnter={onMouseEnter}
        >
            {/* Backdrop for click-outside closing */}
            <div className="fixed inset-0 h-screen w-screen bg-transparent z-40" onClick={onClose} />

            <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`
                    relative z-50 rounded-2xl overflow-hidden flex min-h-[520px] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] origin-top-right
                    backdrop-blur-xl bg-white/95 border border-white/20 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] ring-1 ring-black/5
                    ${activeCategory ? 'w-[950px]' : 'w-[340px]'}
                `}
            >
                {/* LEFT SIDEBAR: Categories */}
                <div className={`
                    flex flex-col py-6 relative z-10 transition-all duration-500 bg-slate-50/50
                    ${activeCategory ? 'w-[35%]' : 'w-full'} 
                `}>
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 to-slate-100/50 pointer-events-none" />

                    <h3 className="relative px-6 text-xs font-extrabold text-slate-400 uppercase tracking-[0.2em] mb-5 pl-8">
                        Categories
                    </h3>

                    <div className="flex flex-col gap-1 px-3 relative">
                        {PRODUCTS_DROPDOWN_DATA.map((category, idx) => (
                            <button
                                key={idx}
                                onMouseEnter={() => setActiveCategoryIndex(idx)}
                                className={`
                                    relative flex items-center gap-4 px-5 py-4 rounded-xl text-left transition-all duration-300 group overflow-hidden
                                    ${activeCategoryIndex === idx
                                        ? 'bg-gradient-to-r from-[#2A3E5C] to-[#3B5478] text-white shadow-lg shadow-[#2A3E5C]/30 translate-x-1'
                                        : 'text-slate-600 hover:bg-white hover:shadow-sm hover:text-[#2A3E5C]'}
                                `}
                            >
                                <div className={`
                                    p-2 rounded-lg transition-all duration-300 backdrop-blur-sm
                                    ${activeCategoryIndex === idx
                                        ? 'bg-white/20 text-white rotate-0'
                                        : 'bg-slate-200/50 text-slate-500 group-hover:bg-[#2A3E5C]/10 group-hover:text-[#2A3E5C] group-hover:-rotate-3'}
                                `}>
                                    {getIcon(category.icon, "w-5 h-5")}
                                </div>
                                <div className="flex-1 z-10">
                                    <span className={`block text-sm font-bold tracking-tight ${activeCategoryIndex === idx ? 'text-white' : ''}`}>
                                        {category.category}
                                    </span>
                                </div>
                                {activeCategoryIndex === idx && (
                                    <motion.div
                                        layoutId="active-indicator"
                                        className="absolute right-3"
                                        initial={{ opacity: 0, x: -5 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <ChevronRight className="w-3.5 h-3.5 text-white/90" />
                                    </motion.div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* RIGHT CONTENT: Products Grid */}
                <AnimatePresence mode="popLayout" initial={false}>
                    {activeCategory && (
                        <motion.div
                            className="w-[65%] bg-white/60 p-8 flex flex-col relative"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.03] pointer-events-none" />

                            <motion.div
                                key={activeCategoryIndex}
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.05
                                        }
                                    }
                                }}
                                className="h-full flex flex-col relative z-10"
                            >
                                {/* Category Header */}
                                <motion.div
                                    variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                                    className="mb-6"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-3 bg-gradient-to-br from-[#2A3E5C]/10 to-[#3B5478]/5 rounded-xl text-[#2A3E5C] shadow-sm ring-1 ring-[#2A3E5C]/10">
                                            {getIcon(activeCategory.icon, "w-6 h-6")}
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-slate-900 leading-tight">
                                                {activeCategory.category}
                                            </h2>
                                            <p className="text-slate-500 text-sm mt-0.5 line-clamp-1">
                                                Explore our {activeCategory.category.toLowerCase()} suite
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-slate-500 text-base leading-relaxed border-l-2 border-[#2A3E5C]/30 pl-3">
                                        {activeCategory.description}
                                    </p>
                                </motion.div>

                                {/* Products Grid */}
                                <div className="grid grid-cols-2 gap-4">
                                    {activeCategory.products.map((product, pIdx) => (
                                        <motion.div
                                            key={pIdx}
                                            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                                        >
                                            <Link
                                                href={product.href}
                                                onClick={onClose}
                                                className="group flex flex-col gap-2 p-4 rounded-xl border border-slate-100 bg-white hover:border-[#2A3E5C]/30 hover:shadow-lg hover:shadow-[#2A3E5C]/5 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-br from-[#2A3E5C]/0 via-[#2A3E5C]/0 to-[#2A3E5C]/5 group-hover:via-[#2A3E5C]/5 transition-all duration-500" />

                                                <div className="flex items-start gap-3 relative z-10">
                                                    <div className="p-2.5 bg-slate-50 rounded-lg group-hover:bg-[#2A3E5C] group-hover:text-white transition-colors duration-300 shadow-sm">
                                                        {getIcon(product.icon, "w-5 h-5 text-slate-400 group-hover:text-white transition-colors")}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-sm text-slate-800 group-hover:text-[#2A3E5C] transition-colors leading-snug mb-0.5">
                                                            {product.name}
                                                        </h4>
                                                        <div className="flex items-center gap-1 text-xs font-medium text-slate-400 group-hover:text-[#2A3E5C] transition-colors">
                                                            <span>View Details</span>
                                                            <ChevronRight className="w-2.5 h-2.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* CTA / Footer Area */}
                                <motion.div
                                    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                                    className="mt-auto pt-6 flex items-center justify-between text-xs font-medium text-slate-400 border-t border-slate-100/80"
                                >
                                    <span>Looking for custom solutions?</span>
                                    <Link href="/contact" className="flex items-center gap-1 text-[#2A3E5C] hover:text-[#3B5478] hover:underline transition-colors pb-0.5">
                                        Contact Sales <ChevronRight className="w-3 h-3" />
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
