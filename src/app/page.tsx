import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/modules/hero";
import { Features } from "@/components/modules/features";
import { Performance } from "@/components/modules/performance";
import { CTA } from "@/components/modules/cta";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "g-draft",
    description:
      "High-performance AI assistant for your terminal. Automate commits, PR descriptions, and rigorous code audits with your preferred local AI agents.",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Linux, macOS, Windows",
    author: {
      "@type": "Person",
      name: "Godswill Ezeala",
      url: "https://github.com/Bobbyjsx",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Conventional Commits Automation",
      "Context-Aware PR Descriptions",
      "Expert Code Audits",
      "Bring Your Own Agent support (Claude, Gemini, OpenAI)",
    ],
  };

  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth bg-background text-foreground selection:bg-primary/30 grid-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <Features />
      <Performance />
      <CTA />
      <Footer />
    </div>
  );
}
