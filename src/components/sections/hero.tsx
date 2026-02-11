import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Youtube } from "lucide-react";

export default function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-background");

  return (
    <section id="inicio" className="relative h-[80vh] min-h-[500px] w-full flex items-center justify-center text-white">
      {heroImage && (
        <Image
          src="/assets/Hero.jpg"
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
        // data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
          Iglesia Cristiana del Cielo al Mundo
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-neutral-200 drop-shadow-md font-body">
          Más que una iglesia, somos una familia comprometida con la restauración, el amor y la verdad bíblica.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6 px-8"
          >
            <a
              href="#horarios"
            >
              Ver Horarios
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg py-6 px-8 bg-transparent border-white text-white hover:bg-white hover:text-black"
          >
            <a
              href="#sedes"
            >
              Nuestras Sedes
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
