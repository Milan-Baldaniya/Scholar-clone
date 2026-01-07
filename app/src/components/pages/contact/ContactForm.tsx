"use client";

import Lottie from 'lottie-react';
import animationData from '../../../../public/animations/form_contactus.json';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactForm() {
    return (
        <section className="relative z-10 -mt-24 mb-20">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden">
                    <div className="flex flex-col lg:flex-row">

                        {/* LEFT COLUMN: Input Form */}
                        <div className="w-full lg:w-1/2 p-8 lg:p-12">
                            <h2 className="text-xl font-medium text-slate-800 mb-8">Enter Your Full name</h2>
                            <div className="space-y-6">
                                <div>
                                    <input
                                        type="text"
                                        className="w-full bg-[#EBEBEB] rounded-full px-6 py-4 outline-none focus:ring-2 focus:ring-blue-500/20"
                                    />
                                </div>

                                <div>
                                    <h2 className="text-xl font-medium text-slate-800 mb-2">Enter Your Email Address</h2>
                                    <input
                                        type="email"
                                        className="w-full bg-[#EBEBEB] rounded-full px-6 py-4 outline-none focus:ring-2 focus:ring-blue-500/20"
                                    />
                                </div>

                                <div>
                                    <h2 className="text-xl font-medium text-slate-800 mb-2">Enter Your Mobile Number</h2>
                                    <input
                                        type="tel"
                                        className="w-full bg-[#EBEBEB] rounded-full px-6 py-4 outline-none focus:ring-2 focus:ring-blue-500/20"
                                    />
                                </div>

                                <div>
                                    <h2 className="text-xl font-medium text-slate-800 mb-2">Enter Your Message</h2>
                                    <textarea
                                        rows={4}
                                        className="w-full bg-[#EBEBEB] rounded-3xl px-6 py-4 outline-none focus:ring-2 focus:ring-blue-500/20 resize-none"
                                    />
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4">
                                    <button className="bg-[#4169E1] hover:bg-[#3154C4] text-white px-8 py-3 rounded-full font-bold text-lg transition-colors shadow-lg whitespace-nowrap">
                                        Send Message
                                    </button>
                                    <p className="text-xs text-slate-500 max-w-xs">
                                        We appreciate your message! Our team will connect with you soon.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Lottie & Info */}
                        <div className="w-full lg:w-1/2 p-6 lg:p-8 border-t lg:border-t-0 lg:border-l-2 border-slate-300 flex flex-col justify-center items-center lg:items-start bg-white">

                            <div className="w-full max-w-md mx-auto">
                                {/* Lottie Animation */}
                                <div className="w-full max-w-[480px] mx-auto mb-6 transform scale-[1.15]">
                                    <Lottie
                                        animationData={animationData}
                                        loop={true}
                                        autoplay={true}
                                    />
                                </div>

                                {/* Contact Details */}
                                <div className="space-y-5 w-full pl-0 lg:pl-4">
                                    <div className="flex items-start gap-4 mx-auto lg:mx-0 max-w-sm">
                                        <MapPin className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                                        <p className="text-slate-800 text-base font-semibold leading-tight">
                                            23, Sundar Chambers, Near Choksi wadi, Adajan Patiya, Surat, Gujarat, 395009
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-4 mx-auto lg:mx-0 max-w-sm">
                                        <Mail className="w-6 h-6 text-black flex-shrink-0" />
                                        <p className="text-slate-800 text-base font-semibold">
                                            kalpesh@triz.co.in
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-4 mx-auto lg:mx-0 max-w-sm">
                                        <Phone className="w-6 h-6 text-black flex-shrink-0" />
                                        <p className="text-slate-800 text-base font-semibold">
                                            98241 54142
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
