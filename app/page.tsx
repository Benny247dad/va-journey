import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Milestones from "@/components/Milestones";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-950 text-white">
      <section id="home">
        <Hero />
      </section>

      <section id="features" className="scroll-mt-20">
        <Features />
      </section>

      <section id="milestones" className="scroll-mt-20">
        <Milestones />
      </section>

      <section id="cta" className="scroll-mt-20">
        <CTA />
      </section>
    </main>
  );
}

