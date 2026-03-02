import React, { forwardRef } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    id?: string;
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
    ({ children, onClick, className, id }, ref) => {
        return (
            <button
                ref={ref}
                id={id}
                onClick={onClick}
                className={cn(
                    "relative inline-flex items-center justify-start px-8 py-3.5 overflow-hidden font-semibold transition-all bg-white rounded-xl group border border-neutral-200/50 shadow-lg",
                    className
                )}
            >
                {/* Brand Yellow sliding background animation */}
                <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-in-out -translate-x-full translate-y-full bg-[#F5A623] group-hover:translate-x-0 group-hover:translate-y-0"></span>

                {/* Button content */}
                <span className="relative w-full text-left text-neutral-900 transition-colors duration-300 ease-in-out flex items-center gap-2">
                    {children}
                </span>
            </button>
        );
    }
);

AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton };
