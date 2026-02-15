import { motion } from "motion/react";

import {
  BackgroundLayer,
  ContentLayer,
  MediaContainer,
} from "@/components/content-layer";
import { DustParticles } from "@/components/dust-particles";
import { InstallCommand } from "@/components/ui/install-command";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-0">
      {/* Background layer - particles & gradient (z-0) */}
      <BackgroundLayer className="pointer-events-none absolute inset-0">
        <DustParticles color={[255, 255, 255]} />
        <div className="absolute top-0 left-1/2 h-150 w-200 -translate-x-1/2 rounded-full bg-primary/[0.07] blur-[120px]" />
      </BackgroundLayer>

      {/* Hero image (z-10) - sits under the dither effect */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="container relative mx-auto max-w-5xl px-4 pt-100 md:pt-120 lg:pt-130"
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <MediaContainer className="mx-auto">
          <div className="overflow-hidden rounded-t-xl border border-border/40 shadow-2xl shadow-primary/5">
            <img
              alt="iNiR desktop with Material ii panel"
              className="h-auto w-full"
              height={800}
              src="https://picsum.photos/1280/800"
              width={1280}
            />
          </div>
          {/* Bottom fade gradient */}
          <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-62 bg-linear-to-t from-background to-transparent" />
        </MediaContainer>
      </motion.div>

      {/* Content layer (z-30) - sits above the dither effect */}
      <ContentLayer className="container absolute top-0 right-0 left-0 mx-auto px-4 pt-40 text-center">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Main headline */}
          <h1 className="mb-5 font-medium font-serif text-5xl italic leading-[0.95] tracking-[-0.02em] sm:text-6xl md:text-7xl lg:text-[80px]">
            Your Niri desktop,
            <br />
            <span className="text-primary not-italic">perfected.</span>
          </h1>

          <p className="mx-auto mb-8 max-w-lg text-base text-muted-foreground leading-relaxed md:text-lg">
            A feature-rich Quickshell configuration for the Niri compositor,
            with two customizable panel families, dynamic theming, and a
            complete GUI settings app.
          </p>

          {/* Install command */}
          <div className="mx-auto mb-16 flex flex-col items-center gap-2 px-4">
            <InstallCommand command="curl -fsSL github.io/inir/install.sh | sh" />
            <p className="text-muted-foreground text-xs">
              Built primarily for Arch Linux.{" "}
              <a
                className="text-foreground underline-offset-2 hover:underline"
                href="https://github.com/snowarch/iNiR/blob/main/docs/INSTALL.md"
                rel="noreferrer"
                target="_blank"
              >
                Other distros
              </a>
            </p>
          </div>
        </motion.div>
      </ContentLayer>
    </section>
  );
}
