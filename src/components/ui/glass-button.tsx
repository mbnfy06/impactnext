import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const glassButtonVariants = cva(
    "relative isolate all-unset cursor-pointer rounded-full transition-all focus-visible:outline-none",
    {
        variants: {
            size: {
                default: "text-base font-medium",
                sm: "text-sm font-medium",
                lg: "text-lg font-medium",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            size: "default",
        },
    }
);

const glassButtonTextVariants = cva(
    "glass-button-text relative block select-none tracking-tight",
    {
        variants: {
            size: {
                default: "px-6 py-2.5",
                sm: "px-4 py-2",
                lg: "px-8 py-4",
                icon: "flex h-10 w-10 items-center justify-center",
            },
        },
        defaultVariants: {
            size: "default",
        },
    }
);

export interface GlassButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glassButtonVariants> {
    contentClassName?: string;
    size?: "default" | "sm" | "lg" | "icon";
}

const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
    ({ className, children, size, contentClassName, ...props }, ref) => {
        // Omita 'visible' if passed down from parent components mapping children
        const { visible, ...buttonProps } = props as any;
        return (
            <div
                className={cn(
                    "glass-button-wrap cursor-pointer rounded-full inline-block",
                    className
                )}
            >
                <button
                    className={cn("glass-button overflow-hidden", glassButtonVariants({ size }))}
                    ref={ref}
                    {...buttonProps}
                >
                    <span
                        className={cn(
                            glassButtonTextVariants({ size }),
                            contentClassName
                        )}
                    >
                        {children}
                    </span>
                </button>
                <div className="glass-button-shadow rounded-full"></div>
            </div>
        );
    }
);
GlassButton.displayName = "GlassButton";

export { GlassButton, glassButtonVariants };
