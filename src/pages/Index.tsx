import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import ReasonsSection from "@/components/ReasonsSection";
import QuotesSection from "@/components/QuotesSection";
import ClosingSection from "@/components/ClosingSection";

const Index = () => (
  <div className="relative min-h-screen bg-background overflow-hidden">
    <FloatingHearts />
    <div className="relative z-10">
      <HeroSection />
      <ReasonsSection />
      <QuotesSection />
      <ClosingSection />
    </div>
  </div>
);

export default Index;
