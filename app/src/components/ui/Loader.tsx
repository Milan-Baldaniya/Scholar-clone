'use client';

import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import animationData from '../../../public/animations/loading.json';
import { useEffect, useState, useRef } from 'react';

export default function Loader() {
    const [isVisible, setIsVisible] = useState(true);
    const lottieRef = useRef<LottieRefCurrentProps>(null);
    useEffect(() => {
        // Optimize animation speed
        if (lottieRef.current) {
            lottieRef.current.setSpeed(2.5); // 2.5x speed (Slower, but faster than default)
        }

        // Hide after delay (Allows animation to complete)
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2000); // 2.0s duration

        return () => clearTimeout(timer);
    }, []); // Run only once on mount (Reload/Initial Load)

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-300">
            <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] relative flex items-center justify-center">
                <img
                    src="/Images/Logo.png"
                    alt="Scholar Clone Logo"
                    // Adjust top-[50%] and left-[50%] to change position.
                    // Adjust w-14 to change size.
                    className="absolute w-14 h-auto z-10 top-[62%] left-[51%] -translate-x-[50%] -translate-y-[50%]"
                />
                <Lottie
                    lottieRef={lottieRef}
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                />
            </div>
        </div>
    );
}
