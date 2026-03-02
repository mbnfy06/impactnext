"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Providers({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent hydration mismatch
    if (!mounted) {
        return <div className="min-h-screen bg-white" />;
    }

    return <>{children}</>;
}
