'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const VALUES_DATA = [
    {
        title: "Career Growth & Development",
        description: "Gain hands-on experience with structured learning, mentorship, and leadership training in AI, EdTech, and SaaS."
    },
    {
        title: "Work That Matters",
        description: "Create impactful AI-driven education solutions that empower students, educators, and institutions globally."
    },
    {
        title: "Culture of Innovation",
        description: "Thrive in a collaborative, data-driven environment that values bold thinking and creative problem-solving."
    }
];

export default function CareerValues() {
    const values = VALUES_DATA;

    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    // Animation Transforms
    // 1. Title Fades In
    const titleOpacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);
    const titleY = useTransform(scrollYProgress, [0.05, 0.15], [50, 0]);

    // 2. Line Expands
    const lineScaleX = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
    const lineOpacity = useTransform(scrollYProgress, [0.2, 0.25], [0, 1]);

    // 3. Cards Appear Sequentially
    const card1Opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
    const card1Y = useTransform(scrollYProgress, [0.4, 0.5], [50, 0]);

    const card2Opacity = useTransform(scrollYProgress, [0.55, 0.65], [0, 1]);
    const card2Y = useTransform(scrollYProgress, [0.55, 0.65], [50, 0]);

    const card3Opacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
    const card3Y = useTransform(scrollYProgress, [0.7, 0.8], [50, 0]);

    return (
        <section
            ref={targetRef}
            className="
                // Height defines the scroll distance (300vh = 3 screens worth of scrolling)
                h-[300vh] 
                bg-white 
                relative
                // [MANUAL CONTROL] SECTION Y POSITION (Move entire section Up/Down)
                mt-[-150px]
            "
        >
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">

                {/* Background Line/Block */}
                <motion.div
                    className={`
                        absolute w-full h-full bg-white z-0
                        // [MANUAL CONTROL] LINE X POSITION (Move Left/Right)
                        left-[0px]
                        // [MANUAL CONTROL] LINE Y POSITION (Move Up/Down behind cards)
                        top-[500px]
                        // Reduced shadow spread for a sharper "block" edge
                        shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.1),_0_-15px_25px_-15px_rgba(0,0,0,0.1)]
                    `}
                    style={{
                        scaleX: lineScaleX,
                        opacity: lineOpacity,
                        originX: 0
                    }}
                ></motion.div>

                <div className="container mx-auto px-4 relative z-10">
                    {/* Section Title */}
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-20"
                        style={{ opacity: titleOpacity, y: titleY }}
                    >
                        What’s in It for You?
                    </motion.h2>

                    {/* Cards Container */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                        {/* Card 1 */}
                        <motion.div
                            className={`
                                bg-slate-50 border-2 border-blue-200 p-8 rounded-3xl shadow-sm
                                flex flex-col items-center justify-center text-center
                                cursor-pointer
                                w-full max-w-[320px]
                                min-h-[300px] 
                            `}
                            style={{ opacity: card1Opacity, y: card1Y }}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                                borderColor: "#3b82f6"
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <h3 className="text-xl font-bold text-blue-900 mb-6">
                                {values[0].title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-base">
                                {values[0].description}
                            </p>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            className={`
                                bg-slate-50 border-2 border-blue-200 p-8 rounded-3xl shadow-sm
                                flex flex-col items-center justify-center text-center
                                cursor-pointer
                                w-full max-w-[320px]
                                min-h-[300px] 
                            `}
                            style={{ opacity: card2Opacity, y: card2Y }}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                                borderColor: "#3b82f6"
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <h3 className="text-xl font-bold text-blue-900 mb-6">
                                {values[1].title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-base">
                                {values[1].description}
                            </p>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            className={`
                                bg-slate-50 border-2 border-blue-200 p-8 rounded-3xl shadow-sm
                                flex flex-col items-center justify-center text-center
                                cursor-pointer
                                w-full max-w-[320px]
                                min-h-[300px] 
                            `}
                            style={{ opacity: card3Opacity, y: card3Y }}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                                borderColor: "#3b82f6"
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <h3 className="text-xl font-bold text-blue-900 mb-6">
                                {values[2].title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-base">
                                {values[2].description}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
