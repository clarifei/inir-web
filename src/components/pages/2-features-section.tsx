import {
  Gamepad2,
  Layers,
  Palette,
  Settings,
  Sparkles,
  SwatchBook,
  Wrench,
} from "lucide-react";
import {
  FeatureCard,
  FeatureText,
  ImageCard,
  SectionHeader,
} from "@/components/animated-card";
import { ContentLayer } from "@/components/content-layer";

export function FeaturesSection() {
  return (
    <section className="relative py-24" id="features">
      <ContentLayer className="container relative mx-auto max-w-5xl px-4">
        <SectionHeader
          description="Every detail is polished. Every shortcut is customizable. This isn't a dotfile dump — it's a complete desktop experience."
          title="Built for people who care about their desktop."
        />

        <div className="grid grid-cols-1 gap-3 md:grid-cols-6">
          <ImageCard
            alt="Material ii panel"
            className="group relative md:col-span-4"
            colSpan="md:col-span-4"
            src="https://picsum.photos/800/400"
          >
            <div className="relative z-10 mb-4">
              <div className="mb-1 flex items-center gap-2">
                <Layers className="h-4 w-4 text-primary/70" />
                <h3 className="font-semibold text-base">Two panel families</h3>
              </div>
              <p className="max-w-sm text-muted-foreground text-sm">
                Material Design floating bar or Windows 11-style taskbar. Switch
                on the fly without restarting.
              </p>
            </div>
          </ImageCard>

          <div className="flex flex-col gap-3 md:col-span-2">
            <FeatureCard delay={0.05} icon={Palette}>
              <FeatureText
                description="Matugen extracts colors from your wallpaper. Your panel, sidebar, and overview all match automatically."
                title="Dynamic theming"
              />
            </FeatureCard>
            <FeatureCard delay={0.1} icon={Sparkles}>
              <FeatureText
                description="Material (solid), Aurora (glass blur), and Inir (TUI-inspired). Each transforms the entire shell."
                title="Three visual styles"
              />
            </FeatureCard>
            <FeatureCard delay={0.15} icon={SwatchBook}>
              <FeatureText
                description="Gruvbox, Catppuccin, or build your own. Save and restore any theme in one click."
                title="Theme presets"
              />
            </FeatureCard>
          </div>

          <ImageCard
            alt="Workspace overview"
            className="md:col-span-3"
            colSpan="md:col-span-3"
            delay={0.08}
            src="https://picsum.photos/800/400"
          >
            <div className="mb-1 flex items-center gap-2">
              <Layers className="h-4 w-4 text-primary/70" />
              <h3 className="font-semibold text-base">Workspace overview</h3>
            </div>
            <p className="mb-3 text-muted-foreground text-sm">
              See all workspaces at a glance. Adapted for Niri&apos;s scrolling
              model.
            </p>
          </ImageCard>

          <ImageCard
            alt="Waffle panel with tools"
            className="md:col-span-3"
            colSpan="md:col-span-3"
            delay={0.12}
            src="https://picsum.photos/800/400"
          >
            <div className="mb-1 flex items-center gap-2">
              <Wrench className="h-4 w-4 text-primary/70" />
              <h3 className="font-semibold text-base">Everything built in</h3>
            </div>
            <p className="mb-3 text-muted-foreground text-sm">
              Window switcher, clipboard manager, screenshot tools, OCR, color
              picker, screen recording — no extra apps needed.
            </p>
          </ImageCard>

          <FeatureCard
            className="md:col-span-2"
            colSpan="md:col-span-2"
            delay={0.16}
            icon={Gamepad2}
          >
            <FeatureText
              description="Auto-disables effects when fullscreen apps are detected. Zero lag when gaming."
              title="GameMode"
            />
          </FeatureCard>

          <FeatureCard
            className="md:col-span-2"
            colSpan="md:col-span-2"
            delay={0.2}
            icon={Settings}
          >
            <FeatureText
              description="Configure everything graphically. No JSON, no dotfiles, no guesswork."
              title="GUI Settings"
            />
          </FeatureCard>

          <FeatureCard
            className="md:col-span-2"
            colSpan="md:col-span-2"
            delay={0.24}
            icon={Wrench}
          >
            <FeatureText
              description="Every keybind, every color, every behavior. Fork it, tweak it, make it yours."
              title="Fully customizable"
            />
          </FeatureCard>
        </div>
      </ContentLayer>
    </section>
  );
}
