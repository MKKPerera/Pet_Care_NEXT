import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PetCategories from "./components/PetCategories";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <PetCategories />
    </main>
  );
}
