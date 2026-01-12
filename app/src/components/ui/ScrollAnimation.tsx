"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollAnimationProps {
    children: ReactNode;
    direction?: "up" | "down" | "left" | "right";
    delay?: number;
    className?: string;
    width?: "full" | "fit"; // Control the width of the motion div
}

export default function ScrollAnimation({
    children,
    direction = "up",
    delay = 0,
    className = "",
    width = "full"
}: ScrollAnimationProps) {
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.8,
                delay: delay,
                ease: [0.25, 0.1, 0.25, 1] as any, // Cubic bezier for smoothness
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={variants}
            className={className}
            style={{ width: width === "full" ? "100%" : "fit-content" }}
        >
            {children}
        </motion.div>
    );
}
