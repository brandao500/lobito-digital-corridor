import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Governance from "@/components/Governance";
import About from "@/components/About";
import Logistics from "@/components/Logistics";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Statistics />
      <About />
      <Governance />
      <Logistics />
    </div>
  );
};

export default Index;