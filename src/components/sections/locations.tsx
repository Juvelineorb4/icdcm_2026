import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";

const locations = [
  {
    name: "Sede Bogotá (Suba)",
    address: "Carrera 103B # 152C – 20, Barrio Suba Turingia.",
    pastor: "Carlos Luna",
    phones: ["311 444 2815", "300 269 8957"],
    mapLink: "https://maps.google.com/?q=Carrera+103B+%23+152C+%E2%80%93+20,+Suba+Turingia,+Bogota"
  },
  {
    name: "Sede Mosquera (El Poblado)",
    address: "Carrera 15 # 9C-08, El Poblado.",
    pastor: "Mauricio Romero",
    phones: ["310 243 8193", "314 627 9273"],
    mapLink: "https://maps.google.com/?q=Carrera+15+%23+9C-08,+El+Poblado,+Mosquera"
  }
];

export default function Locations() {
  return (
    <section id="sedes" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Encuentra tu lugar en casa
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            Te esperamos con los brazos abiertos en nuestras dos sedes presenciales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {locations.map((loc) => (
            <Card key={loc.name} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">{loc.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                  <p className="font-body">{loc.address}</p>
                </div>
                <p className="font-body"><strong>Pastor:</strong> {loc.pastor}</p>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                  <div className="flex flex-col font-body">
                    {loc.phones.map(phone => <a href={`tel:${phone.replace(/\s/g, '')}`} key={phone} className="hover:underline">{phone}</a>)}
                  </div>
                </div>
                <div className="pt-4 mt-auto">
                   <Button asChild>
                    <a href={loc.mapLink} target="_blank" rel="noopener noreferrer">
                      <MapPin className="mr-2 h-4 w-4" /> Cómo llegar
                    </a>
                   </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-primary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center justify-center text-2xl text-primary">
              <Clock className="mr-3 h-7 w-7" />
              Nuestros Horarios de Culto
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row justify-center items-center text-center md:space-x-12 space-y-4 md:space-y-0 font-body text-lg">
              <div>
                <p className="font-bold">Miércoles</p>
                <p>7:00 PM (Servicio de mitad de semana)</p>
              </div>
              <div className="w-px h-12 bg-border hidden md:block"></div>
              <div>
                <p className="font-bold">Domingo</p>
                <p>9:00 AM - 10:00 AM (Celebración dominical)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
