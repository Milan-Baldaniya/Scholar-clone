"use client";

import Image from "next/image";
import Link from "next/link";

export default function InventoryHero() {
    return (
        <section className="bg-[#F9F9E0] pt-16 pb-8 md:pt-24 md:pb-12 px-4 relative overflow-visible">
            <div className="container mx-auto text-center max-w-7xl relative z-10">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E3A8A] mb-8 leading-tight whitespace-normal lg:whitespace-nowrap px-2 lg:-translate-x-6">
                    The Ultimate Solution for Smarter Resource Management!
                </h1>

                <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-xl md:text-3xl text-[#4B5563] font-medium mb-8">
                    <span className="flex items-center gap-3">
                        <span>📦</span> Smart Inventory.
                    </span>
                    <span className="flex items-center gap-3">
                        <span>💰</span> Smarter Purchasing.
                    </span>
                    <span className="flex items-center gap-3">
                        <span>🏛</span> Maximized Assets.
                    </span>
                </div>

                <p className="text-gray-600 mb-10 max-w-6xl mx-auto leading-relaxed text-lg md:text-xl px-4">
                    Managing inventory, procurement, and assets in higher education is
                    complex. From supplies to infrastructure, institutions handle vast
                    resources daily. This solution streamlines operations, cuts costs, and
                    ensures accountability with ease.
                </p>

                <div className="mb-12">
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-[#76C043] text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-[#5da331] transition-colors shadow-sm"
                    >
                        Get Your Free Demo <span className="text-xl">›</span>
                    </Link>
                </div>

                {/* To move the image: Change the values in translate-x-[...] (left/right) and translate-y-[...] (up/down) */}
                <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white lg:translate-x-[0px] lg:translate-y-[55px] z-20">
                    <Image
                        src="/assets/Hero_inventory.png"
                        alt="Inventory Management Dashboard"
                        width={1100}
                        height={900}
                        className="w-full h-auto object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
