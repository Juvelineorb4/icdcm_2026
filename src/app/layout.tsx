import type { Metadata } from "next";
import { Montserrat, Merriweather } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-headline",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Iglesia Cristiana del Cielo al Mundo | Suba y Mosquera | +20 Años de Fe",
  description: "Bienvenidos a la Iglesia Cristiana del Cielo al Mundo. Una familia en Cristo en Bogotá (Suba) y Mosquera. Únete a nuestros servicios, grupos de casa y formación bíblica. Restauración familiar y servicio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased",
          montserrat.variable,
          merriweather.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
