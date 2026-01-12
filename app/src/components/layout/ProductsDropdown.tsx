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
                    relative z-50 rounded-2xl overflow-hidden flex h-[85vh] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] origin-top-right
                    backdrop-blur-xl bg-white/95 border border-white/20 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] ring-1 ring-black/5
                    ${activeCategory ? 'w-[1100px]' : 'w-[340px]'}
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
                            <Link
                                key={idx}
                                href={category.href || "#"}
                                onClick={onClose}
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
                            </Link>

                        ))}
                    </div>
                </div>

                {/* RIGHT CONTENT: Products Grid */}
                {/* RIGHT CONTENT: Products Grid - SCROLLABLE */}
                <AnimatePresence mode="popLayout" initial={false}>
                    {activeCategory && (
                        <motion.div
                            className="w-[65%] bg-white/60 p-8 flex flex-col relative h-full overflow-y-auto custom-scrollbar"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.03] pointer-events-none sticky top-0" />

                            <motion.div
                                key={activeCategoryIndex}
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.03 // Faster stagger for many items
                                        }
                                    }
                                }}
                                className="flex flex-col relative z-10"
                            >
                                {/* Category Header */}
                                <motion.div
                                    variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                                    className="mb-6 shrink-0"
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
                                                {activeCategory.products.length} Modules Included
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-slate-500 text-base leading-relaxed border-l-2 border-[#2A3E5C]/30 pl-3">
                                        {activeCategory.description}
                                    </p>
                                </motion.div>

                                {/* Products Grid - UPDATED: 3 Cols, Scrollable */}
                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pb-8">
                                    {activeCategory.products.map((product, pIdx) => (
                                        <motion.div
                                            key={pIdx}
                                            variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }}
                                        >
                                            <div
                                                className="group relative h-[160px] bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-default border border-slate-100"
                                            >
                                                {/* Card Content (Default State) */}
                                                <div className="absolute inset-0 p-4 flex flex-col items-center justify-center text-center transition-transform duration-300 group-hover:-translate-y-2">
                                                    <div className="p-2.5 bg-[#2A3E5C]/5 rounded-full text-[#2A3E5C] mb-2 group-hover:scale-110 transition-transform duration-300">
                                                        {getIcon(product.icon, "w-7 h-7")}
                                                    </div>
                                                    <h4 className="font-bold text-xs text-slate-800 leading-tight">
                                                        {product.name}
                                                    </h4>
                                                </div>

                                                {/* Hover Overlay (Slide Up) */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#2A3E5C] via-[#2A3E5C] to-[#3B5478] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex flex-col items-center justify-center p-4 text-center">
                                                    <h4 className="font-bold text-xs text-white mb-2 leading-tight">
                                                        {product.name}
                                                    </h4>

                                                    {product.description && (
                                                        <p className="text-[10px] text-white/80 leading-relaxed mb-2 line-clamp-2">
                                                            {product.description}
                                                        </p>
                                                    )}

                                                    <span className="px-2 py-0.5 bg-white/20 backdrop-blur-md rounded-full text-[9px] font-bold text-white uppercase tracking-wider border border-white/10">
                                                        Preview
                                                    </span>
                                                </div>
                                            </div>
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
