import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/modules/hero";
import { Features } from "@/components/modules/features";
import { Performance } from "@/components/modules/performance";
import { CTA } from "@/components/modules/cta";

export default function Home() {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth bg-background text-foreground selection:bg-primary/30 grid-bg">
      <Navbar />
      <Hero />
      <Features />
      <Performance />
      <CTA />
      <Footer />
    </div>
  );
}
