"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 p-4 rounded-full bg-[#2A3E5C] text-white border-2 border-white/30 shadow-xl transition-all duration-300 z-50 
            hover:bg-[#354e70] hover:scale-110 hover:border-white hover:shadow-2xl 
            active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2A3E5C] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
                }`}
            aria-label="Back to top"
        >
            <ArrowUp className="w-7 h-7" />
        </button>
    );
}
