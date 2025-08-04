import FaqSection from "./sections/FaqSection";
import Hero from "./sections/Hero";
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
    </div>
  );
}
