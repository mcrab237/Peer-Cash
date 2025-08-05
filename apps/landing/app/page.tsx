import Footer from "./sections/Footer";
import FaqSection from "./sections/FaqSection";
import Hero from "./sections/Hero";
import InternationSection from "./sections/InternationSection";
import MetricsSection from "./sections/MetricsSection";
import SpendingSections from "./sections/SpendingSections";
import TransformationSection from "./sections/TransformationSection";
import Trusted from "./sections/Trusted";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Trusted />
      <SpendingSections />
      <TransformationSection />
      <FaqSection />
      <InternationSection/>
      <MetricsSection/>
      <Footer/>
    </div>
  );
}
