"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface TypewriterEffectProps {
    text: string;
    className?: string;
    speed?: number;
    delay?: number;
    cursor?: boolean;
}

export default function TypewriterEffect({
    text,
    className = "",
    speed = 0.05,
    delay = 0,
    cursor = true,
}: TypewriterEffectProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        if (isInView) {
            let currentIndex = 0;
            const timeout = setTimeout(() => {
                const interval = setInterval(() => {
                    if (currentIndex < text.length) {
                        setDisplayText((prev) => prev + text[currentIndex]);
                        currentIndex++;
                    } else {
                        clearInterval(interval);
                    }
                }, speed * 1000);
                return () => clearInterval(interval);
            }, delay * 1000);
            return () => clearTimeout(timeout);
        }
    }, [isInView, text, speed, delay]);

    return (
        <span ref={ref} className={className}>
            {displayText}
            {cursor && (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    className="inline-block w-[2px] h-[1em] bg-current ml-1 align-middle"
                />
            )}
        </span>
    );
}
