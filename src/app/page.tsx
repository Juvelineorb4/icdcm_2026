import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import Identity from "@/components/sections/identity";
import Locations from "@/components/sections/locations";
import Ministries from "@/components/sections/ministries";
import AllMinistries from "@/components/sections/all-ministries";
import OnlineConnection from "@/components/sections/online-connection";
import Pastors from "@/components/sections/pastors";
import PrayerRequest from "@/components/sections/prayer-request";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header /> {/* Falta agregar mas rutas rapidas*/}
      <main className="flex-1">
        <Hero />
        <Identity />
        <Locations />
        <Ministries />
        <AllMinistries />
        <OnlineConnection />
        <Pastors />
        {/* <PrayerRequest /> */}
      </main>
      <Footer />
    </div>
  );
}
