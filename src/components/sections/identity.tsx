import { BookOpen, Sprout } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Identity() {
  return (
    <section id="nosotros" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            ¿Quiénes Somos?
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            Somos una iglesia Cristo y Bibliocéntrica, guiada por la trinidad divina. Nuestro propósito es conectarte con una vida devocional profunda y construir una relación sólida con tu Creador. Buscamos la restauración de la familia y la formación de líderes de excelencia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0">
              <div className="bg-primary/10 p-4 rounded-full">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Nuestra Misión</h3>
              <p className="text-muted-foreground font-body">
                Ganar almas para Cristo y formar obreros capacitados mediante el vínculo del amor y el servicio al prójimo (Mateo 28:18-20).
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0">
              <div className="bg-primary/10 p-4 rounded-full">
                <Sprout className="h-8 w-8 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Nuestra Visión</h3>
              <p className="text-muted-foreground font-body">
                Ser un organismo en constante crecimiento, formando siervos apasionados por la Palabra y firmes en el servicio para la extensión del Reino (1 Corintios 15:57-58).
              </p>
            </div>
          </div>
        </div>

        <Card className="bg-secondary border-secondary-foreground/20 shadow-lg">
          <CardContent className="p-8 md:p-12">
            <p className="text-center text-xl md:text-2xl font-body italic text-secondary-foreground">
              "Queremos ver tu vida completamente restaurada, recibiendo las promesas del dador de toda buena dádiva. Convirtamos este año en la más grande aventura de FE."
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
