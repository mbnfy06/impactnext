import Image, { StaticImageData } from "next/image";
import { InfiniteSlider } from "./infinite-slider";
import { cn } from "../../lib/utils";

type Logo = {
    src: string | StaticImageData;
    alt: string;
    width?: number;
    height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
    logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
    return (
        <div
            {...props}
            className={cn(
                "overflow-hidden py-4 w-full relative z-10",
                className
            )}
        >
            {/* Increased height and removed mask for debugging visibility */}
            <InfiniteSlider gap={42} reverse speed={25} className="h-24 py-2">
                {logos.map((logo, idx) => (
                    <div key={`logo-container-${logo.alt}-${idx}`} className="mx-4 relative h-16 w-32 grayscale hover:grayscale-0 transition-all duration-300">
                        <Image
                            alt={logo.alt}
                            className="object-contain select-none cursor-pointer"
                            src={logo.src}
                            fill
                            sizes="(max-width: 768px) 100vw, 150px"
                        />
                    </div>
                ))}
            </InfiniteSlider>
        </div>
    );
}
