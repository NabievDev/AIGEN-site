import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { ForWhom } from "@/components/sections/ForWhom";
import { Skills } from "@/components/sections/Skills";
import { Outcomes } from "@/components/sections/Outcomes";
import { Teachers } from "@/components/sections/Teachers";
import { Program } from "@/components/sections/Program";
import { Certificate } from "@/components/sections/Certificate";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-[#7C3AED]/30 selection:text-[#7C3AED]">
      <Header />
      <main>
        <Hero />
        <MarqueeStrip />
        <ForWhom />
        <Skills />
        <Outcomes />
        <Teachers />
        <Program />
        <Certificate />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
