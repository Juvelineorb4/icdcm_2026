import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const pastors = [
  {
    name: "Ps. German Diaz",
    title: "Pastor Presidente",
    imageId: "pastor-german-diaz"
  },
  {
    name: "Ps. Carlos Luna",
    title: "Sede Suba Turingia",
    imageId: "pastor-carlos-luna"
  },
  {
    name: "Ps. Mauricio Romero",
    title: "Sede Mosquera",
    imageId: "pastor-mauricio-romero"
  },
];

export default function Pastors() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nuestros Pastores
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            Guiados por el Espíritu Santo para servirte.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {pastors.map((pastor) => {
            const pastorImage = PlaceHolderImages.find(img => img.id === pastor.imageId);
            return (
              <div key={pastor.name} className="flex flex-col items-center text-center">
                <Avatar className="h-32 w-32 md:h-40 md:w-40 mb-4 border-4 border-primary/10 shadow-lg">
                  {pastorImage && (
                    <AvatarImage
                      src={pastorImage.imageUrl}
                      alt={pastor.name}
                      data-ai-hint={pastorImage.imageHint}
                    />
                  )}
                  <AvatarFallback>{pastor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold">{pastor.name}</h3>
                <p className="text-muted-foreground font-body">{pastor.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
