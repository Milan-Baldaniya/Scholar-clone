"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Users, Briefcase, Handshake } from "lucide-react";
import { cn } from "@/lib/utils";
import ProductsDropdown from "./ProductsDropdown";

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

    // Timeout ref for handling dropdown hover delays
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setProductsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setProductsDropdownOpen(false);
        }, 150); // 150ms delay to allow moving cursor to dropdown
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-[#2A3E5C] text-white shadow-[0_8px_10px_0px_rgba(42,62,92,0.5)]">
            <nav className="mx-auto w-full flex h-20 items-center justify-between px-4 lg:px-8" aria-label="Global">
                {/* Left: Logo */}
                <div className="flex flex-none">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
                        <img
                            src="/assets/Logo.png"
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
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
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
                                    <ProductsDropdown
                                        isOpen={productsDropdownOpen}
                                        onClose={() => setProductsDropdownOpen(false)}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    />
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
                    "lg:hidden fixed inset-x-0 top-20 z-50 bg-[#2A3E5C] border-t border-slate-700 shadow-lg transition-all duration-300 ease-in-out origin-top overflow-y-auto max-h-[calc(100dvh-5rem)]",
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
                                                { name: "Analytics & Reporting Tools", href: "/products/analytics-reporting" },
                                                { name: "University & College Management System", href: "/products/university-management" },
                                                { name: "Alumni & Exam Management", href: "/products/alumni-management" },
                                                { name: "Research & Collaboration Platform", href: "/products/research-collaboration" },
                                                { name: "Timetable & Attendance Management", href: "/products/timetable-attendance" },
                                                { name: "Transport & Vehicle Management", href: "/products/transport-management" },
                                                { name: "Inventory & Asset Management", href: "/products/inventory-management" },
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
