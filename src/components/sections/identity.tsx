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
            Querido lector el propósito de nuestra Iglesia,  es conectarte con una vida devocional profunda en la Palabra de Dios que te permita construir una relación sólida con tu creador, con tu redentor y con tu consolador eterno, además de estrechar vínculos con las personas que profesan tu mismo credo y hacen parte del ministerio del CIELO AL MUNDO. Nuestro interés es verte desarrollando un servicio con excelencia en los diferentes lugares que como persona te has de desempeñar y ver la mano de DIOS en los quehaceres de tu vida.
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
              Somos una iglesia Cristo y Bibliocéntrica, bajo la dirección del PADRE, del HIJO y del ESPIRITU SANTO. Comprometida en el cumplimiento de la Gran Comisión (Mateo 28:18-20), que ganará almas para CRISTO a través de diferentes estrategias de evangelización, promoviendo el bautismo en agua, buscando siempre la restauración de la familia, que se edificará con el fin de formar obreros enteramente capacitados para la obra del Señor, mediante el vinculo del amor y el servicio al prójimo.
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
              se visualiza como un organismo en constante crecimiento; proyectada para la formación permanente y fortalecimiento espiritual de siervos apasionados por la palabra de Dios, a través de sus diferentes frentes de trabajo denominados ministerios que como dice la palabra, forma seres humanos que se mantengan siempre firmes en el enfoque del desarrollo espiritual y servicio voluntario para el cumplimiento de la extensión del Reino de los cielos aquí en la tierra. (1ra Corintios 15:57-58).
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
