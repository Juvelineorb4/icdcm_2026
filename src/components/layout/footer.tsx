import Link from "next/link";
import { Youtube, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1: Logo & Socials */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <Link href="/" className="font-bold text-xl font-headline text-white">
              ICDCM
            </Link>
            <div className="flex space-x-4">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">Youtube</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-2">
            <h4 className="font-bold text-white mb-2 font-headline">Enlaces Rápidos</h4>
            <ul className="space-y-2 font-body">
              <li><Link href="#inicio" className="hover:text-accent transition-colors">Inicio</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Soy Nuevo</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Donaciones</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Política de Privacidad</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-2">
            <h4 className="font-bold text-white mb-2 font-headline">Contacto General</h4>
            <ul className="space-y-2 font-body">
              <li><a href="tel:3114442815" className="hover:text-accent transition-colors">311 444 2815</a></li>
              <li><a href="tel:3002698957" className="hover:text-accent transition-colors">300 269 8957</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-slate-950 py-4">
        <div className="container text-center text-sm text-slate-500 font-body">
          © {new Date().getFullYear()} Iglesia Cristiana del Cielo al Mundo. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
