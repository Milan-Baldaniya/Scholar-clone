"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Briefcase, Handshake } from "lucide-react";
import { cn } from "@/lib/utils";
import ProductsDropdown from "./ProductsDropdown";
import CompanyDropdown from "./CompanyDropdown";
import { gsap } from "gsap";

import { MAIN_NAVIGATION } from "@/lib/data";

const navigation = MAIN_NAVIGATION;

interface NavPillProps {
    label: string;
    href?: string;
    onClick?: () => void;
    isActive?: boolean;
    children?: React.ReactNode;
    className?: string;
    dropdownOpen?: boolean;
    variant?: "ghost" | "solid";
}

const NavPill = ({ label, href, onClick, isActive, children, className, dropdownOpen, variant = "ghost" }: NavPillProps) => {
    const circleRef = useRef<HTMLSpanElement>(null);
    const labelRef = useRef<HTMLSpanElement>(null);
    const labelHoverRef = useRef<HTMLSpanElement>(null);
    const iconRef = useRef<HTMLSpanElement>(null);
    const iconHoverRef = useRef<HTMLSpanElement>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const activeTweenRef = useRef<gsap.core.Tween | null>(null);

    useEffect(() => {
        if (!circleRef.current || !labelRef.current || !labelHoverRef.current) return;

        const circle = circleRef.current;
        const labelEl = labelRef.current;
        const hoverEl = labelHoverRef.current;
        const pill = circle.parentElement as HTMLElement;

        // Wait for fonts to load for accurate measurement
        const layout = () => {
            if (!pill) return;
            const rect = pill.getBoundingClientRect();
            const { width: w, height: h } = rect;

            // Calculate geometry for the circle expansion
            const R = ((w * w) / 4 + h * h) / (2 * h);
            const D = Math.ceil(2 * R) + 2;
            const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
            const originY = D - delta;

            circle.style.width = `${D}px`;
            circle.style.height = `${D}px`;
            circle.style.bottom = `-${delta}px`;

            gsap.set(circle, {
                xPercent: -50,
                scale: 0,
                transformOrigin: `50% ${originY}px`
            });

            gsap.set(labelEl, { y: 0 });
            gsap.set(hoverEl, { y: h + 12, opacity: 0 });

            // Create Timeline
            const tl = gsap.timeline({ paused: true });

            tl.to(circle, { scale: 1.2, xPercent: -50, duration: 0.6, ease: "power3.out" }, 0);
            tl.to(labelEl, { y: -(h + 8), duration: 0.6, ease: "power3.out" }, 0);

            gsap.set(hoverEl, { y: Math.ceil(h + 20), opacity: 0 });
            tl.to(hoverEl, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, 0);

            tlRef.current = tl;
        };

        layout();
        window.addEventListener('resize', layout);
        return () => window.removeEventListener('resize', layout);
    }, [label]);


    const handleEnter = () => {
        if (!tlRef.current) return;
        activeTweenRef.current?.kill();
        activeTweenRef.current = tlRef.current.tweenTo(tlRef.current.duration(), {
            duration: 0.4,
            ease: "power3.out",
            overwrite: "auto"
        });
    };

    const handleLeave = () => {
        if (!tlRef.current) return;
        // Keep active if dropdown is open
        if (dropdownOpen) return;

        activeTweenRef.current?.kill();
        activeTweenRef.current = tlRef.current.tweenTo(0, {
            duration: 0.3,
            ease: "power3.out",
            overwrite: "auto"
        });
    };

    // Force open state if dropdown is open
    useEffect(() => {
        if (dropdownOpen) {
            handleEnter();
        } else {
            // Only close if we are not hovering (difficult to detect here, strict mode: close)
            if (!tlRef.current) return;
            // We rely on mouseLeave to close, but if state changes externally:
            activeTweenRef.current = tlRef.current.tweenTo(0, {
                duration: 0.3,
                ease: "power3.out",
                overwrite: "auto"
            });
        }
    }, [dropdownOpen]);


    const textColorClass = variant === "solid" ? "text-white" : "text-slate-200";

    const content = (
        <>
            {/* The expanding circle */}
            <span
                ref={circleRef}
                className="absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none bg-white"
                aria-hidden="true"
            />

            {/* Label Stack */}
            <span className="relative inline-block leading-[1] z-[2] overflow-hidden">
                <span
                    ref={labelRef}
                    className={`relative z-[2] inline-block font-medium ${textColorClass}`}
                >
                    {label}
                </span>
                <span
                    ref={labelHoverRef}
                    className="absolute left-0 top-0 z-[3] inline-block font-medium text-[#2A3E5C]" // Inverse color text
                    aria-hidden="true"
                >
                    {label}
                </span>
            </span>

            {/* Dropdown Chevron (if any) */}
            {children && (
                <span className="relative z-[10] ml-1 inline-flex items-center justify-center overflow-hidden h-4 w-4 align-middle">
                    {/* Default Icon */}
                    <span
                        ref={iconRef}
                        className={`relative z-[2] inline-flex items-center justify-center ${textColorClass}`}
                    >
                        {children}
                    </span>
                    {/* Hover Icon (Dark Blue) */}
                    <span
                        ref={iconHoverRef}
                        className="absolute left-0 top-0 z-[3] inline-flex items-center justify-center text-[#2A3E5C]"
                        aria-hidden="true"
                    >
                        {children}
                    </span>
                </span>
            )}
        </>
    );

    const baseClasses = cn(
        "relative overflow-hidden inline-flex items-center justify-center rounded-full px-5 py-2 transition-colors",
        variant === "solid" ? "bg-[#0066CC] shadow-sm hover:bg-[#005bb5]" : "",
        className
    );

    if (href) {
        return (
            <Link
                href={href}
                className={baseClasses}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
            >
                {content}
            </Link>
        );
    }

    return (
        <button
            onClick={onClick}
            className={baseClasses}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
        >
            {content}
        </button>
    );
};

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
        <header className="fixed top-0 left-0 z-50 w-full bg-[#2A3E5C] text-white shadow-[0_8px_10px_0px_rgba(42,62,92,0.5)]">
            <nav className="mx-auto w-full flex h-20 items-center justify-between px-4 lg:px-8" aria-label="Global">
                {/* Left: Logo */}
                <div className="flex flex-none">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3 group">
                        {/* Logo Rotation Animation */}
                        <img
                            src="/assets/Logo.png"
                            alt="Scholar Clone Logo"
                            className="h-12 w-auto transition-transform duration-500 group-hover:rotate-[360deg]"
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
                <div className="hidden lg:flex flex-1 items-center justify-end gap-x-4">
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
                                    <NavPill
                                        label={item.name}
                                        onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                                        dropdownOpen={productsDropdownOpen}
                                    >
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            style={{ zIndex: 20 }} // Ensure on top
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </NavPill>

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
                                    <NavPill
                                        label={item.name}
                                        onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
                                        dropdownOpen={companyDropdownOpen}
                                    >
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-200 ${companyDropdownOpen ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            style={{ zIndex: 20 }}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </NavPill>

                                    {/* Company Dropdown Component */}
                                    <CompanyDropdown
                                        isOpen={companyDropdownOpen}
                                        onClose={() => setCompanyDropdownOpen(false)}
                                        onMouseEnter={() => setCompanyDropdownOpen(true)}
                                        onMouseLeave={() => setCompanyDropdownOpen(false)}
                                    />
                                </div>
                            );
                        } else {
                            return (
                                <NavPill
                                    key={item.name}
                                    label={item.name}
                                    href={item.href}
                                />
                            );
                        }
                    })}
                    <NavPill
                        label="Contact Us"
                        href="/contact"
                        variant="solid"
                        className="ml-4 z-20"
                    />
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
                                                { name: "Higher Education Institute Management System", href: "/products/administrative-management" },
                                                { name: "Alumni & Exam Management", href: "/products/administrative-management" },
                                                { name: "Research & Collaboration Platform", href: "/products/research-collaboration" },
                                                { name: "Timetable & Attendance Management", href: "/products/administrative-management" },
                                                { name: "Transport & Vehicle Management", href: "/products/administrative-management" },
                                                { name: "Inventory & Asset Management", href: "/products/administrative-management" },
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
