import {
    Printer, BookOpen, Package, Flag, Briefcase, Gift,
    Palette, Globe, Monitor
} from "lucide-react";

export interface ServiceItem {
    name: string;
    image?: string;
}

export interface ServiceCategory {
    id: string;
    label: string;
    icon: typeof Printer;
    description: string;
    items: ServiceItem[];
}

export const serviceCatalog: ServiceCategory[] = [
    {
        id: "impresion-digital",
        label: "Impresión Digital",
        icon: Printer,
        description: "Impresión de gran formato, rotulación, vinilos, lonas y todo tipo de materiales. Calidad profesional con plazos ágiles.",
        items: [
            { name: "Rotulación todos materiales" },
            { name: "Lonas Publicitarias", image: "/images/products/lonas-publicitarias.png" },
            { name: "Vinilos", image: "/images/products/vinilos.png" },
            { name: "Carteles", image: "/images/products/carteles.png" },
            { name: "Cartería" },
            { name: "Materiales Flexibles" },
            { name: "Cartón Pluma", image: "/images/products/cartonpluma.png" },
            { name: "Forex - PVC", image: "/images/products/forex.png" },
            { name: "Aluminio" },
            { name: "Foam" },
            { name: "Nido de Abeja" },
            { name: "Metacrilato" },
            { name: "Cartón Corrugado" },
            { name: "Dibond" },
            { name: "Impresión Gran Formato" }
        ]
    },
    {
        id: "imprenta",
        label: "Imprenta",
        icon: BookOpen,
        description: "Catálogos, revistas, dossiers corporativos, libros y todo tipo de encuadernación y papelería de alta calidad.",
        items: [
            { name: "Catálogos Gran Tirada" }, { name: "Revistas Corporativas" }, { name: "Dossier Corporativo" },
            { name: "Libros" }, { name: "Encuadernación" }, { name: "Etiquetas Adhesivas" }, { name: "Stickers" },
            { name: "Dípticos" }, { name: "Trípticos" }, { name: "Catálogos y Manuales" }
        ]
    },
    {
        id: "packaging",
        label: "Packaging",
        icon: Package,
        description: "Cajas, embalajes y packaging personalizado para e-commerce, retail y promociones especiales.",
        items: [
            { name: "CartonBox" }, { name: "Embalajes" }, { name: "Peonitos Personalizados" },
            { name: "Cajas Corporativas" }, { name: "Cajas para envío" }, { name: "Cajas Fulfillment" }
        ]
    },
    {
        id: "material-publicitario",
        label: "Material Publicitario · PLV",
        icon: Flag,
        description: "Displays, expositores, roll-ups, banderolas y todo el material para el punto de venta y eventos.",
        items: [
            { name: "Displays" }, { name: "Flyers" }, { name: "Folletos" }, { name: "Marcapáginas" }, { name: "Etiquetas" },
            { name: "Luminosos de Exterior" }, { name: "Luminosos de Interior" }, { name: "Banderines" },
            { name: "Banderolas" }, { name: "RollUps" }, { name: "Banderas" }, { name: "Expositores PLV" }, { name: "Photocall" },
            { name: "Carpas personalizadas" }, { name: "Mostradores" }
        ]
    },
    {
        id: "material-oficina",
        label: "Oficina y Corporativo",
        icon: Briefcase,
        description: "Tarjetas de visita, carpetas, agendas, calendarios y todo el material corporativo para tu empresa.",
        items: [
            { name: "Tarjetas" }, { name: "Carpetas" }, { name: "Carpetas de Archivo" }, { name: "Planificador" },
            { name: "Agendas" }, { name: "Sobres Corporativos" }, { name: "Dosier Corporativo" }, { name: "Calendarios" },
            { name: "Post-it Corporativos" }, { name: "Archivadores de Anillas" }, { name: "Talonarios" },
            { name: "Sellos" }, { name: "Pegatinas Personalizadas" }, { name: "Hojas de carta" },
            { name: "Libretas Personalizadas" }
        ]
    },
    {
        id: "merchandising",
        label: "Merchandising",
        icon: Gift,
        description: "Regalo publicitario y merchandising personalizado: camisetas, bolsas, botellas, mochilas y más.",
        items: [
            { name: "Camisetas personalizadas" }, { name: "Sudaderas personalizadas" },
            { name: "Textil Deportivo" }, { name: "Ropa de Trabajo personalizada" },
            { name: "Bolsas Personalizadas" }, { name: "Mochilas personalizadas" },
            { name: "Botellas personalizadas" }, { name: "Toallas personalizadas" }, { name: "Gorras" },
            { name: "Paraguas personalizados" }, { name: "Pulseras personalizadas" },
            { name: "Lanyards personalizados" }, { name: "Identificaciones y Credenciales" },
            { name: "Caramelos personalizados" }, { name: "Chapas personalizadas" }, { name: "Llaveros" },
            { name: "Tazas personalizadas" }, { name: "Bolígrafos" }
        ]
    },
    {
        id: "estudio-diseno",
        label: "Estudio de Diseño",
        icon: Palette,
        description: "Estudio creativo integral: branding, identidad corporativa, logotipos y estrategia de imagen de marca.",
        items: [
            { name: "Estudio creativo" }, { name: "Llave en mano" }, { name: "Estrategia" },
            { name: "Branding e imagen de marca" }, { name: "Logotipos" },
            { name: "Identidad corporativa" }, { name: "Publicidad" }
        ]
    },
    {
        id: "productos-digitales",
        label: "Productos Digitales",
        icon: Globe,
        description: "Desarrollo web, landings, SEO, SEM, gestión de redes sociales, campañas digitales e influencers.",
        items: [
            { name: "Diseño Web" }, { name: "Landings Promocionales" }, { name: "Google MyBusiness" },
            { name: "Hosting y Correo Electrónico" }, { name: "Mantenimiento Web" },
            { name: "Desarrollo UX y UI" }, { name: "SEO, SEM e IA" }, { name: "Campañas digitales" },
            { name: "Gestión de Redes" }, { name: "Influencers y Microinfluencers" }
        ]
    },
    {
        id: "digital-signage",
        label: "Digital Signage",
        icon: Monitor,
        description: "Pantallas LED, cartelería digital, totems interactivos y soluciones cloud para comunicación en el punto de venta.",
        items: [
            { name: "Led Videowalls" }, { name: "Cartelería Digital" }, { name: "Totems Digitales" },
            { name: "Pantallas táctiles" }, { name: "Servicios Cloud" }
        ]
    }
];
