'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronsRight } from 'lucide-react';
import { PRODUCTS_DROPDOWN_DATA } from '@/lib/data';
import * as Icons from 'lucide-react';
import ModuleModal from '../common/ModuleModal';
import { Product } from '@/types';

export default function ProductsDropdown({
    isOpen,
    onClose
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(null);
    const [selectedModule, setSelectedModule] = useState<Product | null>(null);

    const handleModalClose = () => {
        setSelectedModule(null);
    };

    // Preload all images when component mounts (even if null return, strict React might not run effect, but here we return null if !isOpen.
    // So preloading happens when isOpen becomes true. This is usually acceptable as user sees list first.
    // However, to be extra safe, we'll render the hidden images in the main return flow if we moved the null check down, but better to keep component simple.
    // Since Next.js preloads priority images, we can use <link rel="preload"> but hidden <img> is easiest for dynamic lists.

    if (!isOpen) return null;

    // Helper to dynamically get icon component
    const getIcon = (iconName: string, className?: string) => {
        const IconComponent = Icons[iconName as keyof typeof Icons] as React.ElementType;
        if (!IconComponent) return null;
        return <IconComponent className={className} strokeWidth={1.5} />;
    };

    const activeCategory = activeCategoryIndex !== null ? PRODUCTS_DROPDOWN_DATA[activeCategoryIndex] : null;

    return (
        <div
            className={`fixed top-20 z-50 pt-2 backdrop-blur-sm transition-[left] duration-300 ${activeCategory
                ? "left-[calc(50%-700px)] translate-x-0"
                : "left-1/2 -translate-x-1/2"
                }`}
        >
            {/* Preload Hidden Images */}
            <div className="hidden">
                {PRODUCTS_DROPDOWN_DATA.map((cat, idx) => (
                    cat.image && <img key={idx} src={cat.image} alt="" aria-hidden="true" />
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`
                    relative z-50 rounded-xl overflow-hidden flex h-[85vh] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] origin-top
                    backdrop-blur-xl bg-white/95 border border-white/20 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] ring-1 ring-black/5
                    w-fit mx-auto
                `}
            >
                {/* LEFT SIDEBAR: Categories */}
                <div className={`
                    flex flex-col py-6 relative z-10 transition-all duration-500 bg-slate-50/50 flex-shrink-0
                    ${activeCategory ? 'w-[340px]' : 'w-[340px]'}
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
                                    relative flex items-center gap-4 px-5 py-4 rounded-lg text-left transition-all duration-300 group overflow-hidden
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

                {/* MIDDLE: Products Grid - SCROLLABLE */}
                <AnimatePresence mode="popLayout" initial={false}>
                    {activeCategory && (
                        <motion.div
                            className="bg-white/60 p-8 flex flex-col relative h-full overflow-y-auto custom-scrollbar flex-shrink-0 overscroll-contain"
                            data-lenis-prevent
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: 700, opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
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
                                        <div className="p-3 bg-gradient-to-br from-[#2A3E5C]/10 to-[#3B5478]/5 rounded-lg text-[#2A3E5C] shadow-sm ring-1 ring-[#2A3E5C]/10">
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
                                            <div className="group relative flex flex-col gap-2 cursor-default">
                                                <div
                                                    className="relative h-[120px] bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-100"
                                                >
                                                    {/* Card Content (Default State) */}
                                                    <div className="absolute inset-0 flex items-center justify-center text-center transition-transform duration-300 group-hover:scale-105">
                                                        {(product as Product).image ? (
                                                            <div className="relative w-full h-full bg-slate-50">
                                                                <Image
                                                                    src={(product as Product).image!}
                                                                    alt={product.name}
                                                                    fill
                                                                    className="object-cover"
                                                                    sizes="(max-width: 768px) 100vw, 33vw"
                                                                />
                                                                <div className="absolute inset-0 bg-black/5" />
                                                            </div>
                                                        ) : (
                                                            <div className="p-3 bg-[#2A3E5C]/5 rounded-full text-[#2A3E5C]">
                                                                {getIcon(product.icon || "Circle", "w-8 h-8")}
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Hover Overlay (Slide Up) */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A3E5C]/95 via-[#2A3E5C]/90 to-[#2A3E5C]/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex flex-col items-center justify-center p-3 text-center backdrop-blur-[2px]">
                                                        {product.description && (
                                                            <p className="text-[10px] text-white/90 leading-relaxed mb-3 line-clamp-3 px-2">
                                                                {product.description}
                                                            </p>
                                                        )}

                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setSelectedModule(product as Product);
                                                            }}
                                                            className="px-4 py-1.5 bg-white text-[#2A3E5C] hover:bg-white/90 rounded-md text-[10px] font-bold transition-all flex items-center gap-1.5 shadow-lg active:scale-95"
                                                        >
                                                            View Details <ChevronsRight className="w-3.5 h-3.5" />
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* Text Module Name - Outside Card */}
                                                <h4 className="font-bold text-[11px] text-slate-700 leading-tight text-center px-1 group-hover:text-[#2A3E5C] transition-colors">
                                                    {product.name}
                                                </h4>
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
                    )
                    }
                </AnimatePresence >

                {/* RIGHTMOST: Category Image Preview */}
                < AnimatePresence mode="wait" >
                    {activeCategory && activeCategory.image && (
                        <motion.div
                            key={activeCategory.category}
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: 360, opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                            className="relative h-full overflow-hidden z-0 flex-shrink-0"
                        >
                            <div className="absolute inset-0 bg-slate-100">
                                <Image
                                    src={activeCategory.image}
                                    alt={activeCategory.category}
                                    fill
                                    className="object-cover opacity-90"
                                    sizes="360px"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence >
            </motion.div >

            {/* Module Detail Modal */}
            < ModuleModal
                isOpen={!!selectedModule}
                onClose={handleModalClose}
                title={selectedModule?.name || ""}
                description={selectedModule?.description || ""}
                icon={selectedModule?.image ? (
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden shadow-inner ring-1 ring-white/20 bg-white/10 backdrop-blur-sm">
                        <Image
                            src={selectedModule.image}
                            alt={selectedModule?.name || "Module Icon"}
                            fill
                            className="object-cover"
                            sizes="80px"
                        />
                    </div>
                ) : selectedModule ? getIcon(selectedModule.icon, "w-8 h-8") : null}
                benefits={selectedModule?.benefits}
                whyChooseUs={selectedModule?.whyChooseUs}
            />
        </div >
    );
}
