import Link from "next/link";
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Youtube } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#1E293B] text-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
                <div className="xl:grid xl:grid-cols-4 xl:gap-8">
                    {/* Column 1: Brand */}
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="relative flex h-10 w-10 items-center justify-center rounded bg-white/10">
                                <GraduationCap className="h-6 w-6 text-[#76B900]" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold leading-none text-white">
                                    Scholar
                                </span>
                                <span className="text-xl font-bold leading-none text-[#76B900]">
                                    Clone
                                </span>
                            </div>
                        </Link>

                        <div className="space-y-4">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    className="w-full rounded bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                                />
                            </div>
                            <button className="w-full rounded bg-[#0066CC] px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-[#005bb5] transition-colors">
                                Contact Us
                            </button>
                        </div>
                    </div>

                    {/* Column 2: Home / About */}
                    <div className="mt-16 xl:mt-0">
                        <h3 className="text-sm font-semibold leading-6 text-slate-200">Home</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            <li><Link href="#" className="text-sm leading-6 text-slate-400 hover:text-white">Home</Link></li>
                            <li><Link href="#" className="text-sm leading-6 text-slate-400 hover:text-white">About Us</Link></li>
                            <li><Link href="#" className="text-sm leading-6 text-slate-400 hover:text-white">Who We Serve</Link></li>
                            <li><Link href="#" className="text-sm leading-6 text-slate-400 hover:text-white">Blogs & Brochures</Link></li>
                            <li><Link href="#" className="text-sm leading-6 text-slate-400 hover:text-white">Request a Demo</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: K-12 Solution */}
                    <div className="mt-16 xl:mt-0">
                        <h3 className="text-sm font-semibold leading-6 text-slate-200">K-12 Solution</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            <li><Link href="#" className="text-sm leading-6 text-slate-400 hover:text-white">Home</Link></li>
                            <li><Link href="#" className="text-sm leading-6 text-slate-400 hover:text-white">About Us</Link></li>
                            <li><Link href="#" className="text-sm leading-6 text-slate-400 hover:text-white">Products</Link></li>
                            <li><Link href="#" className="text-sm leading-6 text-slate-400 hover:text-white">Services</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Higher Education */}
                    <div className="mt-16 xl:mt-0">
                        <h3 className="text-sm font-semibold leading-6 text-slate-200">Higher Education</h3>
                        <ul role="list" className="mt-6 space-y-4">
                            <li><Link href="#" className="text-sm leading-6 text-slate-400 hover:text-white">Home</Link></li>
                            <li><Link href="#" className="text-sm leading-6 text-slate-400 hover:text-white">About Us</Link></li>
                            <li><Link href="#" className="text-sm leading-6 text-slate-400 hover:text-white">Products</Link></li>
                            <li><Link href="#" className="text-sm leading-6 text-slate-400 hover:text-white">Services</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs leading-5 text-slate-400">
                        All Rights Are Reserved By 2024 © Triz Innovation PVT LTD.
                    </p>
                    <div className="flex space-x-6">
                        <Link href="#" className="text-slate-400 hover:text-white"><Instagram className="h-5 w-5" /></Link>
                        <Link href="#" className="text-slate-400 hover:text-white"><Linkedin className="h-5 w-5" /></Link>
                        <Link href="#" className="text-slate-400 hover:text-white"><span className="font-bold text-lg">G</span></Link>
                        <Link href="#" className="text-slate-400 hover:text-white"><Facebook className="h-5 w-5" /></Link>
                        <Link href="#" className="text-slate-400 hover:text-white"><Youtube className="h-5 w-5" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
