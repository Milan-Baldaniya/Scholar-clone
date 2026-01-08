'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Loader from './Loader';

export default function GlobalLoader() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Trigger loading state on path change
        setIsLoading(true);

        // Simulate "waiting for load" - in a real app, this would be tied to Suspense or actual data fetching
        // For standard navigation, we give a minimum transition time to feel smooth
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // 1.5s transition

        return () => clearTimeout(timer);
    }, [pathname, searchParams]);

    // Pass the state to the Loader component to control visibility/unmounting
    return <Loader isRouteLoading={isLoading} />;
}
