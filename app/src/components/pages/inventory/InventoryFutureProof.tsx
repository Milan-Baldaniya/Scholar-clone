"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function InventoryFutureProof() {
    return (
        <section className="bg-[#FCFDFF] py-20 px-4">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#059669] mb-16 whitespace-normal lg:whitespace-nowrap">
                    Future-Proof Your Institution’s Resource Management
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-8">
                    {/* Image Side */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end lg:-translate-x-64">
                        <div className="relative w-full max-w-[500px] h-[300px] md:h-scaled-xl">
                            <Image
                                src="/assets/Fututreproof_inventory.png"
                                alt="Future Proof Inventory Management"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Text & CTA Side */}
                    <div className="w-full md:w-1/2 text-center flex flex-col items-center md:items-center lg:-translate-x-32">
                        <p className="text-[#1E3A8A] text-2xl md:text-3xl font-medium leading-relaxed mb-8 max-w-4xl text-center whitespace-nowrap">
                            Transform the way you manage institutional resources!
                            <br />
                            Contact us for a demo today.
                        </p>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-[#76C043] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#5da331] transition-colors shadow-sm"
                        >
                            Get Your Free Demo <span className="text-xl">›</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
