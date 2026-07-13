import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Subjects } from "@/components/sections/Subjects";
import { Programs } from "@/components/sections/Programs";
import { WhyUs } from "@/components/sections/WhyUs";
import { LeadForm } from "@/components/sections/LeadForm";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Subjects />
        <Programs />
        <WhyUs />
        <LeadForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
