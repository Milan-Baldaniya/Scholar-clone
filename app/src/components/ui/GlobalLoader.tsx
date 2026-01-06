'use client';

import dynamic from 'next/dynamic';

// Dynamically import the Loader with SSR disabled to prevent ChunkLoadErrors and Server Component issues
const Loader = dynamic(() => import('./Loader'), { ssr: false });

export default function GlobalLoader() {
    return <Loader />;
}
