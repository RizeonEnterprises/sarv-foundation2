import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import Initiatives from "@/components/sections/Initiatives";
import Impact from "@/components/sections/Impact";
import HowToHelp from "@/components/sections/HowToHelp";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <Initiatives />
      <Impact />
      <HowToHelp />
      <CTA />   {/* 👈 FINAL SECTION */}
    </>
  );
}