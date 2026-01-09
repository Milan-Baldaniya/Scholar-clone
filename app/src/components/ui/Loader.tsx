'use client';

import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import animationData from '../../../public/animations/loading.json';
import { useEffect, useState, useRef } from 'react';

export default function Loader({ isRouteLoading = false }: { isRouteLoading?: boolean }) {
    const [isVisible, setIsVisible] = useState(true);
    const lottieRef = useRef<LottieRefCurrentProps>(null);

    useEffect(() => {
        // Initial load logic
        if (lottieRef.current) {
            lottieRef.current.setSpeed(2.5);
        }

        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    // Combine initial load state with route transition state
    const showLoader = isVisible || isRouteLoading;

    if (!showLoader) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-300">
            <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] relative flex items-center justify-center">
                <img
                    src="/assets/Logo.png"
                    alt="Scholar Clone Logo"
                    className="absolute w-14 h-auto z-10 top-[62%] left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
                <Lottie
                    lottieRef={lottieRef}
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                />
            </div>
            <h2 className="text-lg md:text-xl font-bold text-[#2A518A] -mt-6 animate-pulse">
                Welcome to Scholar Clone
            </h2>
        </div>
    );
}
