import {
  Home,
  Mic,
  Megaphone,
  Feather,
  Handshake,
  GraduationCap,
  Baby,
  Drama,
} from "lucide-react";

export default function AllMinistries() {
  const ministryList = [
    { name: "Grupos de Casas", icon: <Home className="h-8 w-8 text-primary" /> },
    { name: "Alabanza", icon: <Mic className="h-8 w-8 text-primary" /> },
    { name: "Comunicación", icon: <Megaphone className="h-8 w-8 text-primary" /> },
    { name: "Danza", icon: <Feather className="h-8 w-8 text-primary" /> },
    { name: "Ujieres", icon: <Handshake className="h-8 w-8 text-primary" /> },
    { name: "Seminarios", icon: <GraduationCap className="h-8 w-8 text-primary" /> },
    { name: "Ministerio Infantil", icon: <Baby className="h-8 w-8 text-primary" /> },
    { name: "Teatro", icon: <Drama className="h-8 w-8 text-primary" /> },
  ];

  return (
    <section id="all-ministries" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Todos los ministerios
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            Servimos a Dios y a las personas a través de diferentes áreas:
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {ministryList.map((ministry) => (
            <div
              key={ministry.name}
              className="flex flex-col items-center text-center space-y-3"
            >
              <div className="bg-primary/10 p-4 rounded-full">
                {ministry.icon}
              </div>
              <h3 className="text-xl font-bold font-headline">{ministry.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
