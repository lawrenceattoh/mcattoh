import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Services from "@/components/Services";
import RecentWork from "@/components/RecentWork";
import Testimonials from "@/components/Testimonials";
import HumanAgency from "@/components/HumanAgency";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Metrics />
      <Services />
      <RecentWork />
      <Testimonials />
      {/* <Expertise /> */}
      <HumanAgency />
      <Footer />
    </div>
  );
}
