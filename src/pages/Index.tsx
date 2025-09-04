import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Governance from "@/components/Governance";
import About from "@/components/About";
import Logistics from "@/components/Logistics";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="statistics">
        <Statistics />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="governance">
        <Governance />
      </div>
      <div id="logistics">
        <Logistics />
      </div>
    </div>
  );
};

export default Index;