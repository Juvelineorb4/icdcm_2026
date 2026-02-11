import { Button } from "@/components/ui/button";
import { Sunrise, Users, MonitorPlay } from "lucide-react";

const onlineEvents = [
  {
    title: 'Devocional "Tiempo con Dios"',
    schedule: "Lunes a Viernes (8:00 AM - 8:30 AM) | Sábados (6:00 AM)",
    icon: <Sunrise className="h-8 w-8 text-accent" />
  },
  {
    title: 'Oración "Unidos en un Clamor"',
    schedule: "Clamando por necesidades (5:30 AM - 6:30 AM)",
    icon: <Users className="h-8 w-8 text-accent" />
  },
  {
    title: "Seminario Enoc",
    schedule: "Martes 8:00 PM",
    icon: <MonitorPlay className="h-8 w-8 text-accent" />
  },
];

export default function OnlineConnection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Conectados en el Espíritu
          </h2>
          <p className="text-lg text-primary-foreground/80 font-body">
            Si no puedes asistir presencialmente o quieres empezar tu día con Dios, únete a nuestras reuniones virtuales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
          {onlineEvents.map((event) => (
            <div key={event.title} className="flex flex-col items-center">
              <div className="p-4 bg-primary-foreground/10 rounded-full mb-4">
                {event.icon}
              </div>
              <h3 className="text-xl font-bold font-headline">{event.title}</h3>
              <p className="text-primary-foreground/80 font-body">{event.schedule}</p>
            </div>
          ))}
        </div>

        {/* <div className="text-center">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6 px-8"
          >
            Unirme a la reunión
          </Button>
        </div> */}
      </div>
    </section>
  );
}
