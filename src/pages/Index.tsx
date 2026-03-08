import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import ReasonsSection from "@/components/ReasonsSection";
import TimelineSection from "@/components/TimelineSection";
import ClosingSection from "@/components/ClosingSection";

const Index = () => (
  <div className="relative min-h-screen bg-background overflow-hidden">
    <FloatingHearts />
    <div className="relative z-10">
      <HeroSection />
      <ReasonsSection />
      <TimelineSection />
      <ClosingSection />
    </div>
  </div>
);

export default Index;
