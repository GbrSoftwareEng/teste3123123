import FloatingEmbers from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import CharactersSection from "@/components/CharactersSection";
import ReasonsSection from "@/components/ReasonsSection";
import QuotesSection from "@/components/QuotesSection";
import ClosingSection from "@/components/ClosingSection";

const Index = () => (
  <div className="relative min-h-screen bg-background overflow-hidden">
    <FloatingEmbers />
    <div className="relative z-10">
      <HeroSection />
      <CharactersSection />
      <ReasonsSection />
      <QuotesSection />
      <ClosingSection />
    </div>
  </div>
);

export default Index;
