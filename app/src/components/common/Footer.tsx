'use client';
import Image from 'next/image';
import Button from '../ui/Button';
import EditText from '../ui/EditText';

const Footer = () => {
    const footerSections = [
        {
            title: 'Home',
            links: ['Home', 'About Us', 'Who We Serve', 'Changes and Benefits', 'Blogs and brochures', 'Contact us', 'Request a free demo']
        },
        {
            title: 'K-12 Solution',
            links: ['Home', 'About Us', 'Products', 'Services', 'Resources & Blogs', 'Contact us', 'Book Demo']
        },
        {
            title: 'Higher Education',
            links: ['Home', 'About Us', 'Products', 'Services', 'Resources & Blogs', 'Contact us', 'Book Demo']
        },
        {
            title: 'Corporate Solution',
            links: ['Home', 'About Us', 'Products', 'Services', 'Resources & Blogs', 'Contact us', 'Book Demo']
        }
    ]

    const socialIcons = [
        { src: '/images/img_social_icons.svg', alt: 'Instagram' },
        { src: '/images/img_vector_white_a700.svg', alt: 'LinkedIn' },
        { src: '/images/img_social_icons_white_a700.svg', alt: 'Google' },
        { src: '/images/img_social_icons_white_a700_50x50.svg', alt: 'Facebook' },
        { src: '/images/img_social_icons_white_a700_50x56.svg', alt: 'YouTube' },
    ]

    return (
        <footer className="w-full bg-footer-background mt-[-352px]">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-[408px]">
                <div className="flex flex-col gap-[68px]">
                    {/* Main Footer Content */}
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0 mt-[18px] mr-0 lg:mr-[60px]">
                        {/* Company Info & Contact */}
                        <div className="w-full lg:w-[22%] flex flex-col items-center lg:items-start">
                            <div className="flex items-center gap-[6px] ml-0 lg:ml-[70px] mb-8">
                                <Image
                                    src="/Images/Logo.png"
                                    alt="Scholar Clone Logo"
                                    width={102}
                                    height={100}
                                    className="w-[102px] h-[100px] object-contain"
                                />
                                <h2 className="text-5xl font-bold leading-[48px] text-left text-primary-foreground font-['Cormorant_Garamond']">
                                    Scholar<br />Clone
                                </h2>
                            </div>

                            <div className="w-full max-w-[400px]">
                                <h3 className="text-4xl font-bold leading-relaxed text-left text-link-secondary mb-[10px]">
                                    Contact Us
                                </h3>

                                <EditText
                                    fill_background_color="bg-input-background"
                                    border_border_radius="rounded-md"
                                    layout_width="full"
                                    padding="p-[12px]"
                                    margin="mt-[10px]"
                                    placeholder="Enter your message"
                                    className="w-full mb-[20px]"
                                />

                                <Button
                                    text="Contact Us"
                                    text_font_size="text-xl"
                                    text_font_weight="font-bold"
                                    text_color="text-primary-foreground"
                                    fill_background_color="bg-button-primary-background"
                                    border_border_radius="rounded-2xl"
                                    padding="px-[20px] py-[6px]"
                                    margin="mt-[20px]"
                                    className="hover:bg-primary-dark transition-colors duration-200"
                                />
                            </div>
                        </div>

                        {/* Footer Navigation Links */}
                        <div className="w-full lg:w-[60%] flex flex-col sm:flex-row justify-between gap-8 lg:gap-0 mt-0 lg:mt-[20px]">
                            {footerSections.map((section, index) => (
                                <div key={index} className="w-full sm:w-auto flex flex-col gap-[14px]">
                                    <h4 className="text-2xl font-bold leading-[30px] text-left text-header-text">
                                        {section.title}
                                    </h4>
                                    <ul className="flex flex-col gap-[14px]">
                                        {section.links.map((link, linkIndex) => (
                                            <li key={linkIndex}>
                                                <button className="text-lg font-medium text-header-text hover:text-primary-light transition-colors">
                                                    {link}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Footer */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mr-0 md:mr-[62px] pb-[40px]">
                        <p className="text-xl font-medium text-header-text">
                            All Rights Are Reserved By 2024 © Triz Innovation PVT LTD.
                        </p>

                        <div className="flex justify-center items-center gap-8">
                            {socialIcons.map((icon, index) => (
                                <button key={index} className="w-[50px] h-[50px] hover:scale-110 transition-transform">
                                    <Image src={icon.src} alt={icon.alt} width={50} height={50} className="w-full h-full object-contain" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
