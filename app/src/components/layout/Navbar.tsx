"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Users, Briefcase, Handshake } from "lucide-react";
import { cn } from "@/lib/utils";

import { MAIN_NAVIGATION } from "@/lib/data";

const navigation = MAIN_NAVIGATION;

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
    const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
    const productsDropdownRef = useRef<HTMLDivElement>(null);
    const companyDropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdowns when clicking outside (desktop only)
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const target = event.target as Node;

            // Handle Products Dropdown
            if (productsDropdownOpen && productsDropdownRef.current && !productsDropdownRef.current.contains(target)) {
                setProductsDropdownOpen(false);
            }

            // Handle Company Dropdown
            if (companyDropdownOpen && companyDropdownRef.current && !companyDropdownRef.current.contains(target)) {
                setCompanyDropdownOpen(false);
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [productsDropdownOpen, companyDropdownOpen]);

    return (
        <header className="sticky top-0 z-50 w-full bg-[#2A3E5C] text-white shadow-[0_8px_10px_0px_rgba(42,62,92,0.5)]">
            <nav className="mx-auto w-full flex h-20 items-center justify-between px-4 lg:px-8" aria-label="Global">
                {/* Left: Logo */}
                <div className="flex flex-none">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
                        <img
                            src="/Images/Logo.png"
                            alt="Scholar Clone Logo"
                            className="h-12 w-auto"
                        />
                        <div className="flex flex-col">
                            <span className="text-xl font-bold leading-none text-white">
                                Scholar
                            </span>
                            <span className="text-xl font-bold leading-none text-white">
                                Clone
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex lg:hidden ml-auto">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-300 hover:text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        )}
                    </button>
                </div>

                {/* Center: Navigation Items */}
                <div className="hidden lg:flex flex-1 items-center justify-end gap-x-8">
                    {navigation.map((item) => {
                        if (item.name === "PRODUCTS") {
                            return (
                                <div
                                    key={item.name}
                                    className="relative h-full flex items-center"
                                    ref={productsDropdownRef}
                                    onMouseEnter={() => setProductsDropdownOpen(true)}
                                    onMouseLeave={() => setProductsDropdownOpen(false)}
                                >
                                    <button
                                        className="text-sm font-medium leading-6 text-slate-200 hover:text-white transition-colors uppercase tracking-wide flex items-center gap-1 h-full py-2"
                                        onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                                        suppressHydrationWarning
                                    >
                                        {item.name}
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {/* Products Mega Menu Dropdown */}
                                    <div
                                        className={`fixed left-1/2 -translate-x-1/2 top-20 w-[1200px] transition-all duration-200 z-50 pt-4 ${productsDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                                    >
                                        <div className="bg-white rounded-lg shadow-2xl border border-slate-200 p-8">
                                            {/* Top 6 Categories */}
                                            <div className="grid grid-cols-3 gap-6 mb-8 pb-8 border-b border-slate-200">
                                                <div className="flex items-start gap-3 hover:bg-slate-50 p-3 rounded-lg transition-colors cursor-pointer">
                                                    <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold text-slate-900 text-base">Administrative Management Systems</h3>
                                                    </div>
                                                </div>

                                                <div className="flex items-start gap-3 hover:bg-slate-50 p-3 rounded-lg transition-colors cursor-pointer">
                                                    <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold text-slate-900 text-base">Student Lifecycle & Academic Management</h3>
                                                    </div>
                                                </div>

                                                <div className="flex items-start gap-3 hover:bg-slate-50 p-3 rounded-lg transition-colors cursor-pointer">
                                                    <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold text-slate-900 text-base">Examination & Assessment Solutions</h3>
                                                    </div>
                                                </div>

                                                <div className="flex items-start gap-3 hover:bg-slate-50 p-3 rounded-lg transition-colors cursor-pointer">
                                                    <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold text-slate-900 text-base">Learning & Teaching Platforms</h3>
                                                    </div>
                                                </div>

                                                <div className="flex items-start gap-3 hover:bg-slate-50 p-3 rounded-lg transition-colors cursor-pointer">
                                                    <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold text-slate-900 text-base">Research, Collaboration & Institutional Growth</h3>
                                                    </div>
                                                </div>

                                                <div className="flex items-start gap-3 hover:bg-slate-50 p-3 rounded-lg transition-colors cursor-pointer">
                                                    <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold text-slate-900 text-base">Finance & HR Solutions</h3>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Product Grid */}
                                            <div className="grid grid-cols-4 gap-4">
                                                {[
                                                    { name: "University & College Management System", icon: "🏛️" },
                                                    { name: "Alumni Management System", icon: "👥" },
                                                    { name: "Timetable & Attendance Management System", icon: "📅" },
                                                    { name: "Transport & Vehicle Management System", icon: "🚌" },
                                                    { name: "Inventory, Purchase & Asset Management", icon: "📦" },
                                                    { name: "Accreditation & Compliance Management", icon: "📋" },
                                                    { name: "Affiliation & Licensing Module", icon: "🎓" },
                                                    { name: "Event & Guest House Booking Management", icon: "📆" },
                                                    { name: "Website Management System", icon: "💻" },
                                                    { name: "Lapses & Grievance Management", icon: "⏱️" },
                                                    { name: "360° Feedback System", icon: "💬" },
                                                    { name: "Application/document Tracking System, Document Journey Management", icon: "📄" },
                                                    { name: "Convocation Management System", icon: "🎓" },
                                                    { name: "National & International Linkages management system", icon: "🌐" },
                                                    { name: "", icon: "" },
                                                    { name: "", icon: "" },
                                                ].map((product, idx) => (
                                                    product.name ? (
                                                        <Link
                                                            key={idx}
                                                            href={product.name === "University & College Management System" ? "/products/university-management" : "#"}
                                                            className="flex items-start gap-2 p-3 rounded-lg hover:bg-slate-50 transition-colors group/item"
                                                            onClick={() => setProductsDropdownOpen(false)}
                                                        >
                                                            <span className="text-2xl flex-shrink-0">{product.icon}</span>
                                                            <span className="text-base text-slate-700 group-hover/item:text-slate-900 leading-tight">{product.name}</span>
                                                        </Link>
                                                    ) : (
                                                        <div key={idx}></div>
                                                    )
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        } else if (item.name === "COMPANY") {
                            return (
                                <div
                                    key={item.name}
                                    className="relative h-full flex items-center"
                                    ref={companyDropdownRef}
                                    onMouseEnter={() => setCompanyDropdownOpen(true)}
                                    onMouseLeave={() => setCompanyDropdownOpen(false)}
                                >
                                    <button
                                        className="text-sm font-medium leading-6 text-slate-200 hover:text-white transition-colors uppercase tracking-wide flex items-center gap-1 h-full py-2"
                                        onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
                                        suppressHydrationWarning
                                    >
                                        {item.name}
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-200 ${companyDropdownOpen ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {/* Company Dropdown */}
                                    <div
                                        className={`absolute right-0 top-16 w-60 transition-all duration-200 z-50 pt-2 ${companyDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                                    >
                                        <div className="bg-white rounded-lg shadow-xl border border-slate-200 py-2 overflow-hidden">
                                            <Link
                                                href="/company/careers"
                                                className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors group/item"
                                                onClick={() => setCompanyDropdownOpen(false)}
                                            >
                                                <Briefcase className="w-5 h-5 text-slate-500 group-hover/item:text-blue-600 transition-colors" />
                                                <span className="text-sm font-medium text-slate-700 group-hover/item:text-slate-900">Careers</span>
                                            </Link>
                                            <Link
                                                href="/company/partners"
                                                className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors group/item"
                                                onClick={() => setCompanyDropdownOpen(false)}
                                            >
                                                <Handshake className="w-5 h-5 text-slate-500 group-hover/item:text-blue-600 transition-colors" />
                                                <span className="text-sm font-medium text-slate-700 group-hover/item:text-slate-900">Partners</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm font-medium leading-6 text-slate-200 hover:text-white transition-colors uppercase tracking-wide"
                                >
                                    {item.name}
                                </Link>
                            );
                        }
                    })}
                    <Link
                        href="/contact"
                        className="rounded-[20px] bg-[#0066CC] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#005bb5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066CC] transition-colors ml-4"
                    >
                        Contact Us
                    </Link>
                </div>
            </nav>
            {/* Mobile Menu */}
            <div
                className={cn(
                    "lg:hidden fixed inset-x-0 top-20 z-50 bg-[#2A3E5C] border-t border-slate-700 shadow-lg transition-all duration-300 ease-in-out origin-top overflow-y-auto max-h-[calc(100vh-5rem)]",
                    mobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                )}
            >
                <div className="space-y-1 px-4 pb-3 pt-2">
                    {navigation.map((item) => {
                        if (item.name === "PRODUCTS") {
                            return (
                                <div key={item.name}>
                                    <button
                                        onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                                        className="w-full flex items-center justify-between rounded-md px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-white"
                                    >
                                        {item.name}
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {/* Mobile Products Dropdown */}
                                    <div className={cn(
                                        "overflow-hidden transition-all duration-300",
                                        productsDropdownOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                    )}>
                                        <div className="pl-4 pr-2 py-2 space-y-1">
                                            {[
                                                { name: "University & College Management System", href: "/products/university-management" },
                                                { name: "Alumni Management System", href: "#" },
                                                { name: "Timetable & Attendance Management", href: "#" },
                                                { name: "Transport & Vehicle Management", href: "#" },
                                                { name: "Inventory & Asset Management", href: "#" },
                                            ].map((product) => (
                                                <Link
                                                    key={product.name}
                                                    href={product.href}
                                                    className="block rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                                                    onClick={() => {
                                                        setProductsDropdownOpen(false);
                                                        setMobileMenuOpen(false);
                                                    }}
                                                >
                                                    {product.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        } else if (item.name === "COMPANY") {
                            return (
                                <div key={item.name}>
                                    <button
                                        onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
                                        className="w-full flex items-center justify-between rounded-md px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-white"
                                    >
                                        {item.name}
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-200 ${companyDropdownOpen ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {/* Mobile Company Dropdown */}
                                    <div className={cn(
                                        "overflow-hidden transition-all duration-300",
                                        companyDropdownOpen ? "max-h-[150px] opacity-100" : "max-h-0 opacity-0"
                                    )}>
                                        <div className="pl-4 pr-2 py-2 space-y-1">
                                            <Link
                                                href="/company/careers"
                                                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                                                onClick={() => {
                                                    setCompanyDropdownOpen(false);
                                                    setMobileMenuOpen(false);
                                                }}
                                            >
                                                <Briefcase className="w-4 h-4" />
                                                Careers
                                            </Link>
                                            <Link
                                                href="/company/partners"
                                                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white"
                                                onClick={() => {
                                                    setCompanyDropdownOpen(false);
                                                    setMobileMenuOpen(false);
                                                }}
                                            >
                                                <Handshake className="w-4 h-4" />
                                                Partners
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-white"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            );
                        }
                    })}
                    <Link
                        href="/contact"
                        className="mt-4 block w-full rounded-md bg-[#0066CC] px-3 py-2 text-center text-base font-medium text-white hover:bg-[#005bb5]"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </header>
    );
}
