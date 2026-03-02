'use client';

import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { useRouter, usePathname } from 'next/navigation';

import Image from 'next/image';
import logoFull from '../assets/logo-full.png';
import logoSmall from '../assets/logo-small.png';

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);
  const router = useRouter();
  const pathname = usePathname();

  const isHomePage = pathname === '/';
  const isDarkText = pathname === '/contact' && !scrolled && !open;

  const links = [
    { label: "Servicios", id: "servicios", path: "/services" },
    { label: "Know-How", id: "know-how", path: "/know-how" },
    { label: "Contacto", id: "contacto", path: "/contact" },
  ];

  const handleNavigation = (id: string, path?: string) => {
    setOpen(false);

    if (id === 'contacto' || path) {
      router.push(path || '/');
      window.scrollTo(0, 0);
      return;
    }

    if (pathname !== '/') {
      router.push('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo(0, 0);
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo(0, 0);
      }
    }
  };

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed z-[100] mx-auto transition-all ease-out duration-500 antialiased',
        {
          /* Estado Scroll: Pastilla Flotante (Pill) Global */
          'top-4 left-4 right-4 md:left-0 md:right-0 md:w-[calc(100%-2rem)] max-w-5xl rounded-full bg-black/85 supports-[backdrop-filter]:bg-black/50 border border-white/10 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.3)]':
            scrolled && !open,

          /* Estado Abierto: Full width takeover */
          'top-0 left-0 right-0 w-full bg-black/95 rounded-none border-b border-white/5': open,

          /* Estado Top: Transparente y amplio */
          'top-4 left-0 right-0 w-full bg-transparent border-transparent pt-2 md:pt-4 max-w-[1400px]': !scrolled && !open,
        },
      )}
    >
      <nav
        className={cn(
          'flex w-full items-center justify-between transition-all ease-out duration-500',
          {
            'h-14 px-5 md:h-16 md:px-6': scrolled && !open,
            'h-20 px-6 md:h-24 md:px-8': !scrolled && !open,
            'h-20 px-6': open
          },
        )}
      >
        <div
          onClick={() => handleNavigation('inicio')}
          className="cursor-pointer flex items-center"
        >
          <Image
            src={scrolled ? logoSmall : logoFull}
            alt="Impact Channel"
            className={cn(
              "object-contain transition-all duration-300 ease-out",
              scrolled ? "h-6 sm:h-7 w-auto" : "h-10 sm:h-12 w-auto",
              !isDarkText && "invert brightness-0"
            )}
            priority
          />
        </div>

        <div className="hidden items-center gap-2 md:flex">
          {links.map((link, i) => (
            <button
              key={i}
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                "text-[15px] font-medium transition-colors hover:bg-transparent tracking-wide text-shadow-sm",
                isDarkText ? "text-black hover:text-black/70" : "text-white hover:text-white/80"
              )}
              onClick={() => handleNavigation(link.id, link.path)}
            >
              {link.label}
            </button>
          ))}
          <Button
            variant="primary"
            size="default"
            className="ml-2 rounded-full px-6 transition-all font-bold text-[15px]"
            onClick={() => window.open('https://mbnify.com', '_blank')}
          >
            Presupuesto
          </Button>
        </div>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setOpen(!open)}
          className={cn(
            "md:hidden transition-colors rounded-full",
            isDarkText ? "text-black hover:bg-black/5" : "text-white hover:bg-white/10"
          )}
        >
          <MenuToggleIcon open={open} className="size-6" duration={300} />
        </Button>
      </nav>

      <div
        className={cn(
          'bg-black/95 fixed top-16 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y md:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <div
          data-slot={open ? 'open' : 'closed'}
          className={cn(
            'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
            'flex h-full w-full flex-col justify-between gap-y-2 p-6 pt-10',
          )}
        >
          <div className="grid gap-y-4">
            {links.map((link) => (
              <button
                key={link.label}
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                    className: 'justify-start text-xl py-6 px-4 rounded-2xl bg-white/5 hover:bg-yellow-500/10 hover:text-yellow-500 transition-all border border-transparent hover:border-yellow-500/20 text-white',
                  }),
                )}
                onClick={() => handleNavigation(link.id, link.path)}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-4 mt-auto">
            <Button
              variant="primary"
              className="w-full py-6 text-xl rounded-2xl font-bold"
              onClick={() => window.open('https://mbnify.com', '_blank')}
            >
              Presupuesto
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
