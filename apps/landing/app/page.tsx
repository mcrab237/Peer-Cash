import Hero from "./sections/Hero";
import SpendingSections from "./sections/SpendingSections";
import Trusted from "./sections/Trusted";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Trusted />
      <SpendingSections/>
    </div>
  );
}
