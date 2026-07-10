import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyMavrienza } from "@/components/sections/WhyMavrienza";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { Process } from "@/components/sections/Process";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { MouseParallax } from "@/components/ui/MouseParallax";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <MouseParallax />
      <div className="gradient-mesh pointer-events-none fixed inset-0 z-[1]" />
      <div className="line-grid pointer-events-none fixed inset-0 z-[1] opacity-40" />

      <Navbar />
      <Hero />
      <Services />
      <WhyMavrienza />
      <Projects />
      <Testimonials />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}
