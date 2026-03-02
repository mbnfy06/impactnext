import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";
import Providers from "./providers";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Trade Marketing e Impresión en Madrid | Impact Channel",
  description: "Líderes en Trade Marketing, PLV e impresión gran formato en San Sebastián de los Reyes, Madrid. Impulsamos tu punto de venta con soluciones a medida. ¡Pide presupuesto!",
  icons: {
    icon: "https://storage.googleapis.com/gpt-engineer-file-uploads/aQxPghRgq4XEKv8QsnuVUOCKU1a2/uploads/1769964713349-impactchannel.es%20logo39.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Impact Channel",
              "image": "https://impactchannel.es/assets/logo-full.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. Fuente Nueva, 14, Nave 19A",
                "addressLocality": "San Sebastián de los Reyes",
                "addressRegion": "Madrid",
                "postalCode": "28703",
                "addressCountry": "ES"
              },
              "telephone": "+34918053400",
              "email": "info@impactchannel.es",
              "url": "https://impactchannel.es",
              "priceRange": "$$",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.552684,
                "longitude": -3.619069
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              }
            })
          }}
        />
      </head>
      <body className={`${outfit.variable} antialiased`}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingButton />
        </Providers>
      </body>
    </html>
  );
}
