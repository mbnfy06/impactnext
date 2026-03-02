"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { serviceCatalog, type ServiceCategory } from "@/data/servicesCatalogData";
import { ArrowLeft, ImageIcon } from "lucide-react";
import { useRouter } from "next/navigation";

/* ─── animation variants ─── */
const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05 } },
    exit: { transition: { staggerChildren: 0.02, staggerDirection: -1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.92 },
    visible: {
        opacity: 1, y: 0, scale: 1,
        transition: { type: "spring" as const, stiffness: 300, damping: 26 },
    },
    exit: { opacity: 0, y: -16, scale: 0.95, transition: { duration: 0.12 } },
};

/* ─── Category Tab ─── */
function CategoryTab({
    cat,
    active,
    onClick,
    tabRef,
}: {
    cat: ServiceCategory;
    active: boolean;
    onClick: () => void;
    tabRef: (el: HTMLButtonElement | null) => void;
}) {
    const Icon = cat.icon;
    return (
        <button
            ref={tabRef}
            onClick={onClick}
            className="relative flex flex-col items-center gap-2 px-3 pb-4 pt-2 transition-all duration-300 group"
        >
            <div className={`
        w-[52px] h-[52px] rounded-2xl flex items-center justify-center transition-all duration-300
        ${active
                    ? "bg-[rgba(245,166,35,0.12)] border border-[rgba(245,166,35,0.3)] shadow-[0_0_24px_rgba(245,166,35,0.15)]"
                    : "bg-transparent border border-transparent group-hover:bg-white/[0.04] group-hover:border-white/[0.08]"
                }
      `}>
                <Icon strokeWidth={active ? 2.5 : 2} className={`w-6 h-6 transition-all duration-300 ${active ? "text-[var(--primary-yellow)]" : "text-neutral-500 group-hover:text-neutral-300"}`} />
            </div>
            <span className={`text-[13px] font-semibold transition-colors duration-300 whitespace-nowrap
        ${active ? "text-[var(--primary-yellow)]" : "text-neutral-500 group-hover:text-neutral-300"}
      `}>
                {cat.label}
            </span>
            <div className={`
        absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] rounded-full transition-all duration-300
        ${active ? "w-8 bg-[var(--primary-yellow)] shadow-[0_0_8px_rgba(245,166,35,0.5)]" : "w-0 bg-transparent"}
      `} />
        </button>
    );
}

/* ─── Product Card with Image Placeholder ─── */
function ProductCard({ name, image, index }: { name: string; image?: string; index: number }) {
    return (
        <motion.div
            variants={itemVariants}
            className="group cursor-pointer"
        >
            {/* Image placeholder */}
            <div className="relative aspect-square rounded-2xl overflow-hidden mb-3
                      bg-neutral-800/50 border border-white/[0.04]
                      transition-all duration-400
                      group-hover:border-[rgba(245,166,35,0.2)] group-hover:bg-neutral-800/80
                      group-hover:shadow-[0_8px_32px_rgba(245,166,35,0.08)]">
                {image ? (
                    <img src={image} alt={name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <ImageIcon className="w-8 h-8 text-neutral-700 group-hover:text-neutral-500 transition-colors duration-300" />
                    </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            {/* Product name */}
            <p className="text-[13px] text-neutral-400 group-hover:text-white transition-colors duration-300 leading-snug px-1">
                {name}
            </p>
        </motion.div>
    );
}

/* ─── Main Page ─── */
export default function ServicesPage() {
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(0);
    const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

    const activeCat = serviceCatalog[activeIndex];

    // Handle hash on mount
    useEffect(() => {
        const hash = window.location.hash.replace("#", "");
        if (hash) {
            const idx = serviceCatalog.findIndex((c) => c.id === hash);
            if (idx >= 0) setActiveIndex(idx);
        }
    }, []);

    return (
        <div className="min-h-screen bg-[var(--bg-dark)] pt-32 pb-20 relative overflow-hidden">
            {/* Background texture */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(245,166,35,0.06),transparent)]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* ─── Header ─── */}
                <div className="mb-14">
                    <button
                        onClick={() => router.push("/")}
                        className="inline-flex items-center gap-2 text-neutral-500 hover:text-white text-sm mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Volver al Inicio
                    </button>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
                    >
                        Nuestro Catálogo
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed"
                    >
                        Explora todas nuestras soluciones. Desde impresión digital hasta
                        digital signage, cubrimos cada necesidad de tu marca.
                    </motion.p>
                </div>

                {/* ─── Category Tabs ─── */}
                <div className="relative mb-12 border-b border-white/[0.06]">
                    <div className="flex flex-wrap justify-center gap-1 pb-px">
                        {serviceCatalog.map((cat, i) => (
                            <CategoryTab
                                key={cat.id}
                                cat={cat}
                                active={activeIndex === i}
                                onClick={() => setActiveIndex(i)}
                                tabRef={(el) => { tabsRef.current[i] = el; }}
                            />
                        ))}
                    </div>
                </div>

                {/* ─── Active Category Content ─── */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCat.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Category header */}
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <motion.h2
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="text-2xl md:text-3xl font-bold text-white"
                                >
                                    {activeCat.label}
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.05 }}
                                    className="text-neutral-500 text-sm mt-1"
                                >
                                    {activeCat.description}
                                </motion.p>
                            </div>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-neutral-600 text-sm hidden sm:block"
                            >
                                {activeCat.items.length} Productos
                            </motion.span>
                        </div>

                        {/* Product grid */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
                        >
                            {activeCat.items.map((item, i) => (
                                <ProductCard key={`${activeCat.id}-${item.name}`} name={item.name} image={item.image} index={i} />
                            ))}
                        </motion.div>
                    </motion.div>
                </AnimatePresence>

                {/* ─── CTA Footer ─── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-24 text-center"
                >
                    <div className="rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl p-10 md:p-14">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                            ¿No encuentras lo que buscas?
                        </h3>
                        <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">
                            Tenemos un catálogo mucho más amplio. Cuéntanos qué necesitas y te
                            preparamos un presupuesto a medida.
                        </p>
                        <button
                            onClick={() => router.push("/contact")}
                            className="px-8 py-3.5 rounded-full bg-[var(--primary-yellow)] text-black font-bold text-[15px]
                         hover:bg-[var(--primary-yellow-hover)] transition-all duration-300
                         shadow-[0_0_20px_rgba(245,166,35,0.3)] hover:shadow-[0_0_35px_rgba(245,166,35,0.5)]
                         hover:-translate-y-0.5"
                        >
                            Pedir Presupuesto
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
