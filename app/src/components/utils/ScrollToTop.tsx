"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
    useEffect(() => {
        // Disable browser's default scroll restoration
        window.history.scrollRestoration = 'manual';

        // Force scroll to top
        window.scrollTo(0, 0);
    }, []);

    return null;
}
