import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const ministries = [
  {
    title: "Grupos de Casa",
    description: "Espacios cercanos para jóvenes, adolescentes y mujeres (Talita Cumi & Casita de Pan).",
    imageId: "ministry-small-group"
  },
  {
    title: "Seminario Enoc",
    description: "Formación bíblica profunda (Martes 8:00 PM Online).",
    imageId: "ministry-seminar"
  },
  {
    title: "Ministerio Infantil",
    description: "Un espacio seguro y divertido para que los niños conozcan a Jesús.",
    imageId: "ministry-kids"
  },
  {
    title: "Artes y Servicio",
    description: "Danza, Teatro, Alabanza, Comunicación y Ujieres.",
    imageId: "ministry-arts"
  },
];

export default function Ministries() {
  return (
    <section id="ministerios" className="py-16 md:py-24 bg-secondary/50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Hay un lugar para ti y tu familia
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            No solo somos una iglesia de domingo. Descubre cómo involucrarte y crecer.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ministries.map((ministry) => {
            const ministryImage = PlaceHolderImages.find(img => img.id === ministry.imageId);
            return (
              <Card key={ministry.title} className="overflow-hidden group">
                <CardHeader className="p-0">
                  <div className="relative h-48 w-full">
                    {ministryImage && (
                      <Image
                        src={ministryImage.imageUrl}
                        alt={ministryImage.description}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={ministryImage.imageHint}
                      />
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">{ministry.title}</CardTitle>
                  <p className="text-muted-foreground font-body text-sm">
                    {ministry.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
