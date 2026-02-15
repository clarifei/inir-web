import {
  Gamepad2,
  Keyboard,
  Layers,
  Monitor,
  Palette,
  Settings,
  Sparkles,
  SwatchBook,
  Wrench,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { ContentLayer } from "@/components/content-layer";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: string;
  delay?: number;
  gradient?: string;
}

function BentoCard({
  children,
  className,
  colSpan,
  delay = 0,
  gradient,
}: BentoCardProps) {
  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/30 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-border/60 hover:shadow-lg hover:shadow-primary/5",
        colSpan,
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ once: true, margin: "-50px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {gradient && (
        <div
          className={cn(
            "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100",
            gradient
          )}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

interface FeaturePillProps {
  children: React.ReactNode;
  delay?: number;
  icon: React.ReactNode;
}

function FeaturePill({ children, delay = 0, icon }: FeaturePillProps) {
  return (
    <motion.div
      className="flex items-center gap-3 rounded-full border border-border/40 bg-background/80 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-background"
      initial={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, scale: 1 }}
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </span>
      <span className="font-medium text-sm">{children}</span>
    </motion.div>
  );
}

export function FeaturesSection() {
  return (
    <section className="relative overflow-hidden py-32" id="features">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-primary/[0.03] blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-primary/[0.02] blur-[100px]" />
      </div>

      <ContentLayer className="container relative mx-auto max-w-6xl px-4">
        {/* Section Header - Asymmetric */}
        <motion.div
          className="mb-20 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="max-w-xl">
            <motion.span
              className="mb-3 inline-block font-mono text-primary/70 text-xs uppercase tracking-widest"
              initial={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              Features
            </motion.span>
            <h2 className="font-medium font-serif text-4xl italic leading-[1.1] tracking-[-0.02em] md:text-5xl lg:text-6xl">
              Built for people who
              <br />
              <span className="text-primary not-italic">care.</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground text-sm leading-relaxed md:text-right">
            Every detail is polished. Every shortcut is customizable. This
            isn&apos;t a dotfile dump — it&apos;s a complete desktop experience.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
          {/* Large Feature - Panel Families */}
          <BentoCard
            className="md:col-span-7"
            colSpan="md:col-span-7"
            delay={0}
            gradient="bg-gradient-to-br from-primary/5 via-transparent to-transparent"
          >
            <div className="flex h-full flex-col">
              <div className="p-6 pb-4">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <Layers className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Two panel families
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Switch styles on the fly
                    </p>
                  </div>
                </div>
                <p className="max-w-md text-muted-foreground text-sm leading-relaxed">
                  Material Design floating bar or Windows 11-style taskbar. Both
                  fully customizable and switchable without restarting.
                </p>
              </div>
              <div className="relative mt-auto flex-1 overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-card/50 to-transparent" />
                <img
                  alt="Material ii panel"
                  className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  height={400}
                  loading="lazy"
                  src="https://picsum.photos/800/400?random=1"
                  width={800}
                />
              </div>
            </div>
          </BentoCard>

          {/* Stacked Features - Right Column */}
          <div className="flex flex-col gap-4 md:col-span-5">
            <BentoCard
              className="flex-1"
              colSpan="md:col-span-5"
              delay={0.1}
              gradient="bg-gradient-to-br from-purple-500/5 via-transparent to-transparent"
            >
              <div className="flex h-full flex-col justify-between p-5">
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10">
                    <Palette className="h-5 w-5 text-purple-500" />
                  </div>
                  <FeaturePill
                    delay={0.2}
                    icon={<Sparkles className="h-3 w-3" />}
                  >
                    Auto theming
                  </FeaturePill>
                </div>
                <div className="mt-4">
                  <h3 className="mb-1 font-semibold text-base">
                    Dynamic theming
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Matugen extracts colors from your wallpaper. Panel, sidebar,
                    and overview all match automatically.
                  </p>
                </div>
              </div>
            </BentoCard>

            <BentoCard
              className="flex-1"
              colSpan="md:col-span-5"
              delay={0.15}
              gradient="bg-gradient-to-br from-amber-500/5 via-transparent to-transparent"
            >
              <div className="flex h-full flex-col justify-between p-5">
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10">
                    <SwatchBook className="h-5 w-5 text-amber-500" />
                  </div>
                  <FeaturePill delay={0.25} icon={<Zap className="h-3 w-3" />}>
                    One-click apply
                  </FeaturePill>
                </div>
                <div className="mt-4">
                  <h3 className="mb-1 font-semibold text-base">
                    Theme presets
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Gruvbox, Catppuccin, or build your own. Save and restore any
                    theme instantly.
                  </p>
                </div>
              </div>
            </BentoCard>
          </div>

          {/* Visual Styles Showcase */}
          <BentoCard
            className="md:col-span-5"
            colSpan="md:col-span-5"
            delay={0.2}
            gradient="bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent"
          >
            <div className="flex h-full flex-col p-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10">
                  <Monitor className="h-5 w-5 text-cyan-500" />
                </div>
                <h3 className="font-semibold text-base">Three visual styles</h3>
              </div>
              <div className="mb-4 flex flex-wrap gap-2">
                {["Material", "Aurora", "Inir"].map((style, i) => (
                  <motion.span
                    className="rounded-lg border border-border/40 bg-background/50 px-3 py-1.5 font-medium text-xs backdrop-blur-sm transition-colors hover:border-primary/30 hover:bg-background"
                    initial={{ opacity: 0, y: 10 }}
                    key={style}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    {style}
                  </motion.span>
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Material (solid), Aurora (glass blur), and Inir (TUI-inspired).
                Each transforms the entire shell with a single click.
              </p>
            </div>
          </BentoCard>

          {/* Workspace Overview */}
          <BentoCard
            className="md:col-span-7"
            colSpan="md:col-span-7"
            delay={0.25}
            gradient="bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent"
          >
            <div className="flex h-full flex-col">
              <div className="p-5 pb-3">
                <div className="mb-2 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
                    <Layers className="h-5 w-5 text-emerald-500" />
                  </div>
                  <h3 className="font-semibold text-base">
                    Workspace overview
                  </h3>
                </div>
                <p className="max-w-md text-muted-foreground text-sm leading-relaxed">
                  See all workspaces at a glance. Adapted for Niri&apos;s
                  scrolling window model with smooth animations.
                </p>
              </div>
              <div className="relative flex-1 overflow-hidden px-5 pb-5">
                <div className="absolute inset-x-5 bottom-5 h-20 bg-gradient-to-t from-card/50 to-transparent" />
                <img
                  alt="Workspace overview"
                  className="h-40 w-full rounded-lg border border-border/20 object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  height={400}
                  loading="lazy"
                  src="https://picsum.photos/800/400?random=2"
                  width={800}
                />
              </div>
            </div>
          </BentoCard>

          {/* Tools Grid */}
          <BentoCard
            className="md:col-span-8"
            colSpan="md:col-span-8"
            delay={0.3}
            gradient="bg-gradient-to-br from-rose-500/5 via-transparent to-transparent"
          >
            <div className="flex h-full flex-col p-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10">
                  <Wrench className="h-5 w-5 text-rose-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-base">
                    Everything built in
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    No extra apps needed
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  "Window switcher",
                  "Clipboard manager",
                  "Screenshot tools",
                  "OCR",
                  "Color picker",
                  "Screen recording",
                ].map((tool, i) => (
                  <motion.div
                    className="flex items-center gap-2 rounded-lg border border-border/30 bg-background/40 px-3 py-2 backdrop-blur-sm transition-colors hover:border-border/50 hover:bg-background/60"
                    initial={{ opacity: 0, x: -10 }}
                    key={tool}
                    transition={{ duration: 0.4, delay: 0.35 + i * 0.05 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, x: 0 }}
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-rose-500/60" />
                    <span className="font-medium text-xs">{tool}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Bottom Row - Small Cards */}
          <div className="flex flex-col gap-4 md:col-span-4">
            <BentoCard
              className="flex-1"
              colSpan="md:col-span-4"
              delay={0.35}
              gradient="bg-gradient-to-br from-violet-500/5 via-transparent to-transparent"
            >
              <div className="flex h-full items-center gap-4 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110">
                  <Gamepad2 className="h-6 w-6 text-violet-500" />
                </div>
                <div>
                  <h3 className="mb-0.5 font-semibold text-base">GameMode</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Auto-disables effects when fullscreen apps are detected.
                    Zero lag when gaming.
                  </p>
                </div>
              </div>
            </BentoCard>

            <BentoCard
              className="flex-1"
              colSpan="md:col-span-4"
              delay={0.4}
              gradient="bg-gradient-to-br from-orange-500/5 via-transparent to-transparent"
            >
              <div className="flex h-full items-center gap-4 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110">
                  <Settings className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="mb-0.5 font-semibold text-base">
                    GUI Settings
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Configure everything graphically. No JSON, no dotfiles, no
                    guesswork.
                  </p>
                </div>
              </div>
            </BentoCard>
          </div>

          {/* Full Width Customization */}
          <BentoCard
            className="md:col-span-12"
            colSpan="md:col-span-12"
            delay={0.45}
            gradient="bg-gradient-to-r from-primary/5 via-transparent to-primary/5"
          >
            <div className="flex flex-col items-center justify-between gap-6 p-6 md:flex-row">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/15">
                  <Keyboard className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-lg">
                    Fully customizable
                  </h3>
                  <p className="max-w-md text-muted-foreground text-sm leading-relaxed">
                    Every keybind, every color, every behavior. Fork it, tweak
                    it, make it yours.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-2 md:justify-end">
                {["Keybinds", "Colors", "Behavior", "Layout"].map((item, i) => (
                  <motion.span
                    className="rounded-full border border-border/40 bg-background/60 px-4 py-1.5 font-medium text-xs backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-background"
                    initial={{ opacity: 0, scale: 0.8 }}
                    key={item}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, scale: 1 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </BentoCard>
        </div>
      </ContentLayer>
    </section>
  );
}
