import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/pages/1-hero-section";
import { FeaturesSection } from "@/components/pages/2-features-section";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}
