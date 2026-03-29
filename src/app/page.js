import PhaseController from "./components/PhaseController";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tracks from "./components/Tracks";
import Timeline from "./components/Timeline";
import Sponsors from "./components/Sponsors";
import FAQ from "./components/FAQ";
import Venue from "./components/Venue";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <PhaseController>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tracks />
        <Timeline />
        <Sponsors />
        <FAQ />
        <Venue />
      </main>
      <Footer />
    </PhaseController>
  );
}
