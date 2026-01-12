"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollAnimationProps {
    children: ReactNode;
    direction?: "up" | "down" | "left" | "right" | "none";
    variant?: "fade" | "zoomIn" | "blurIn" | "scaleUp";
    delay?: number;
    className?: string;
    width?: "full" | "fit"; // Control the width of the motion div
    viewport?: any; // Allow custom viewport props
}

export default function ScrollAnimation({
    children,
    direction = "up",
    variant = "fade",
    delay = 0,
    className = "",
    width = "full",
    viewport
}: ScrollAnimationProps) {

    // Base hidden state calculation based on direction
    const getDirectionOffset = () => {
        if (direction === "none") return { x: 0, y: 0 };
        return {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        };
    };

    const directionOffset = getDirectionOffset();

    const variants = {
        hidden: {
            opacity: 0,
            x: directionOffset.x,
            y: directionOffset.y,
            scale: variant === "zoomIn" || variant === "scaleUp" ? 0.8 : 1,
            filter: variant === "blurIn" ? "blur(10px)" : "blur(0px)",
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
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
            viewport={viewport || { once: true, margin: "-50px" }}
            variants={variants}
            className={className}
            style={{ width: width === "full" ? "100%" : "fit-content" }}
        >
            {children}
        </motion.div>
    );
}
