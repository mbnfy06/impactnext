"use client";

import { useRef, useState } from 'react';
import './Hero.css';
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision';
import { InteractiveHoverButton } from './ui/interactive-hover-button';

const Hero = () => {
    const [isShockwave, setIsShockwave] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleCollision = () => {
        setIsShockwave(true);
        setTimeout(() => setIsShockwave(false), 500); // Flash effect
    };

    return (
        <section id="inicio" className="hero section-dark">
            <BackgroundBeamsWithCollision
                className="absolute inset-0 z-0"
                interactiveRef={buttonRef}
                onCollision={handleCollision}
            >
                {/* Empty children for beams, content is separate or we can wrap content if we want beams behind */}
                <div className="hidden"></div>
            </BackgroundBeamsWithCollision>

            <div className="hero__container container">
                <div className="hero__content">
                    <span className="hero__badge">
                        <span className="hero__badge-dot"></span>
                        Retail & Trade Marketing Specialist
                    </span>

                    <h1 className="hero__title">
                        Agencia de Trade Marketing y <span className="text-yellow">PLV en Madrid</span> | Impact Channel
                    </h1>

                    <p className="hero__description">
                        We want to be your marketing partner. Acompañamos a marcas y retailers en el desarrollo y ejecución de proyectos de impresión, merchandising, PLV y digital signage.
                    </p>

                    <div className="hero__buttons flex flex-col sm:flex-row gap-4">
                        <InteractiveHoverButton
                            text="Pedir Presupuesto"
                            onClick={() => scrollToSection('contacto')}
                            className={`h-[54px] w-full sm:w-[280px] text-[15px] font-bold antialiased border-none shadow-[0_0_15px_rgba(0,0,0,0.5)] ${isShockwave ? 'shadow-[0_0_30px_rgba(245,166,35,0.6)] scale-105' : ''}`}
                        />
                        <button onClick={() => scrollToSection('servicios')} className="btn btn-secondary h-[54px] w-full sm:w-[280px] text-[15px] m-0 flex justify-center items-center">
                            Descubre nuestros servicios
                        </button>
                    </div>

                    <div className="hero__badges">
                        <div className="hero__badge-item">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="var(--primary-yellow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Sin compromiso</span>
                        </div>
                        <div className="hero__badge-item">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="var(--primary-yellow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Respuesta en 24h</span>
                        </div>
                        <div className="hero__badge-item">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 12L11 14L15 10M12 3L14.5 8L20 9L16 13L17 19L12 16L7 19L8 13L4 9L9.5 8L12 3Z" stroke="var(--primary-yellow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Calidad garantizada</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
