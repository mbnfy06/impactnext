import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
}

const InteractiveHoverButton = React.forwardRef<
    HTMLButtonElement,
    InteractiveHoverButtonProps
>(({ text = "Button", className, ...props }, ref) => {
    return (
        <button
            ref={ref}
            className={cn(
                "group relative cursor-pointer overflow-hidden rounded-[50px] border border-white/20 bg-white p-2 text-center font-bold text-black shadow-lg",
                className,
            )}
            {...props}
        >
            <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 antialiased">
                {text}
            </span>
            <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-black opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 antialiased">
                <span>{text}</span>
                <ArrowRight className="h-4 w-4" />
            </div>
            <div className="absolute left-4 top-[45%] h-2 w-2 scale-[1] rounded-lg bg-yellow-500 transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[2.5] group-hover:bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.5)]"></div>
        </button>
    );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
