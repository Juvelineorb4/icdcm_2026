
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Youtube, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#sedes", label: "Sedes y Horarios" },
  { href: "#ministerios", label: "Ministerios" },
  { href: "#oracion", label: "Peticiones" },
];

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-lg font-headline text-primary">ICDCM</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="transition-colors hover:text-primary"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button
            className="hidden md:flex bg-accent text-accent-foreground hover:bg-accent/90"
            asChild
          >
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Youtube className="mr-2 h-4 w-4" /> Ver en Vivo
            </a>
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                   <Link href="/" className="mr-6 flex items-center space-x-2">
                     <span className="font-bold text-lg font-headline text-primary">ICDCM</span>
                   </Link>
                   <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                     <X className="h-5 w-5" />
                     <span className="sr-only">Cerrar menú</span>
                   </Button>
                </div>
                <nav className="flex flex-col space-y-4 p-4 text-lg">
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={label}
                      href={href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="transition-colors hover:text-primary"
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto p-4">
                  <Button
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                    asChild
                  >
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                      <Youtube className="mr-2 h-4 w-4" /> Ver en Vivo
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
