"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MenuToggleIconProps {
    open: boolean;
    className?: string;
    duration?: number;
}

export const MenuToggleIcon = ({ open, className, duration = 300 }: MenuToggleIconProps) => {
    const transition = { duration: duration / 1000 };

    return (
        <div className={cn("relative flex items-center justify-center", className)}>
            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" stroke="currentColor">
                <motion.path
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={false}
                    animate={open ? "open" : "closed"}
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" },
                    }}
                    transition={transition}
                />
                <motion.path
                    strokeWidth="3"
                    strokeLinecap="round"
                    d="M 2 9.423 L 20 9.423"
                    initial={false}
                    animate={open ? "open" : "closed"}
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                    }}
                    transition={transition}
                />
                <motion.path
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={false}
                    animate={open ? "open" : "closed"}
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" },
                    }}
                    transition={transition}
                />
            </svg>
        </div>
    );
};
