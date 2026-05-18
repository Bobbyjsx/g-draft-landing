import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/modules/hero";
import { Features } from "@/components/modules/features";
import { Performance } from "@/components/modules/performance";
import { CTA } from "@/components/modules/cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <section id="features">
          <Features />
        </section>
        <Performance />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
