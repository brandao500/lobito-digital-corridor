import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Governance from "@/components/Governance";
import About from "@/components/About";
import Logistics from "@/components/Logistics";
import RouteVisualization from "@/components/RouteVisualization";
import LiveStats from "@/components/LiveStats";
import Testimonials from "@/components/Testimonials";
import BusinessBenefits from "@/components/BusinessBenefits";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <LiveStats />
      <div id="statistics">
        <Statistics />
      </div>
      <BusinessBenefits />
      <div id="about">
        <About />
      </div>
      <div id="governance">
        <Governance />
      </div>
      <div id="logistics">
        <Logistics />
      </div>
      <div id="route-visualization">
        <RouteVisualization />
      </div>
      <Testimonials />
    </div>
  );
}
