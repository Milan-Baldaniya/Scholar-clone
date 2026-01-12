"use client";

import Link from "next/link";
import { FOOTER_LINKS } from "@/lib/data";

export function Footer() {
    return (
        <footer className="bg-[#2A3E5C] text-white">
            <div className="mx-auto max-w-[1600px] px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-8">

                    {/* Left Column: Logo & Contact Form */}
                    <div className="md:col-span-2 lg:col-span-2 space-y-6">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <img
                                src="/assets/Logo.png"
                                alt="Scholar Clone Logo"
                                className="h-12 w-auto"
                            />
                            <div>
                                <div className="text-xl font-bold">Scholar</div>
                                <div className="text-xl font-bold">Clone</div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-slate-300">Contact Us</h3>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 rounded-full bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#76B900]"
                                suppressHydrationWarning
                            />
                            <button
                                className="bg-[#4A90E2] hover:bg-[#3A7BC8] text-white font-semibold px-8 py-3 rounded-full transition-all"
                                suppressHydrationWarning
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>

                    {/* Navigation Column 1: Home */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold mb-4">Home</h3>
                        <ul className="space-y-2 text-sm text-slate-300">
                            {FOOTER_LINKS.home.map((link) => (
                                <li key={link.name}><Link href={link.href} className="hover:text-white transition-colors">{link.name}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Navigation Column 2: K-12 Solution */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold mb-4">K-12 Solution</h3>
                        <ul className="space-y-2 text-sm text-slate-300">
                            {FOOTER_LINKS.k12.map((link) => (
                                <li key={link.name}><Link href={link.href} className="hover:text-white transition-colors">{link.name}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Navigation Column 3: Higher Education */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold mb-4">Higher Education</h3>
                        <ul className="space-y-2 text-sm text-slate-300">
                            {FOOTER_LINKS.higherEd.map((link) => (
                                <li key={link.name}><Link href={link.href} className="hover:text-white transition-colors">{link.name}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Navigation Column 4: Corporate Solution */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold mb-4">Corporate Solution</h3>
                        <ul className="space-y-2 text-sm text-slate-300">
                            {FOOTER_LINKS.corporate.map((link) => (
                                <li key={link.name}><Link href={link.href} className="hover:text-white transition-colors">{link.name}</Link></li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Bottom Section: Copyright & Social Media */}
                <div className="mt-12 pt-8 border-t border-slate-600 flex flex-col lg:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-slate-400">
                        All Rights Are Reserved By 2024 © Scholar Clon.
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex gap-6">
                        <Link href="#" className="text-white hover:text-[#76B900] transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </Link>
                        <Link href="#" className="text-white hover:text-[#76B900] transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </Link>
                        <Link href="#" className="text-white hover:text-[#76B900] transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .533 5.333.533 12S5.867 24 12.48 24c3.44 0 6.04-1.133 7.973-3.04 1.96-1.96 2.533-4.707 2.533-6.947 0-.68-.067-1.333-.173-1.987h-10.333z" />
                            </svg>
                        </Link>
                        <Link href="#" className="text-white hover:text-[#76B900] transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </Link>
                        <Link href="#" className="text-white hover:text-[#76B900] transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
