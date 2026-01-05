'use client';
import { useState } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const menuItems = [
        { label: 'HOME', href: '/' },
        { label: 'PRODUCTS', href: '/products' },
        { label: 'SERVICES', href: '/services' },
        { label: 'ABOUT US', href: '/about' },
        { label: 'COMPANY', href: '/company' },
    ]

    return (
        <header className="w-full bg-header-background shadow-[0px_8px_10px_#2a3e5c7f] p-1">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center w-full">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Image
                            src="/images/img_header_logo.png"
                            alt="Scholar Clone Logo"
                            width={112}
                            height={50}
                            className="w-[112px] h-[50px] object-contain"
                            priority
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center justify-center flex-1 max-w-[800px]">
                        <div className="flex items-center gap-[78px]">
                            {menuItems.map((item, index) => (
                                <button
                                    key={index}
                                    role="menuitem"
                                    className="text-xl font-medium leading-normal text-header-text hover:text-primary-light transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-background focus:ring-opacity-50 rounded px-2 py-1"
                                    onClick={() => console.log(`Navigate to ${item.href}`)}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </nav>

                    {/* Desktop Contact Button */}
                    <div className="hidden lg:block">
                        <Button
                            text="Contact Us"
                            text_font_size="text-xl"
                            text_font_family="Inter"
                            text_font_weight="font-bold"
                            text_line_height="leading-normal"
                            text_color="text-primary-foreground"
                            fill_background_color="bg-button-primary-background"
                            border_border_radius="rounded-md"
                            padding="px-[18px] py-[6px]"
                            className="hover:bg-primary-dark transition-colors duration-200"
                            onClick={() => console.log('Contact us clicked')}
                        />
                    </div>

                    {/* Mobile Hamburger Menu */}
                    <button
                        className="lg:hidden p-2 text-header-text hover:text-primary-light"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden mt-4 pb-4 border-t border-secondary-light`}>
                    <div className="flex flex-col space-y-4 pt-4">
                        {menuItems.map((item, index) => (
                            <button
                                key={index}
                                className="text-lg font-medium text-header-text hover:text-primary-light transition-colors px-3 py-2 text-left"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
