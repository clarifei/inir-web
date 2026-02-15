import {
  Gamepad2,
  Layers,
  Palette,
  Settings,
  Sparkles,
  SwatchBook,
  Wrench,
} from "lucide-react";
import { motion } from "motion/react";
import { ContentLayer } from "@/components/content-layer";

export function FeaturesSection() {
  return (
    <section className="relative py-24" id="features">
      <ContentLayer className="container relative mx-auto max-w-5xl px-4">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="mb-3 font-medium font-serif text-3xl italic tracking-[-0.02em] md:text-4xl">
            Built for people who care about their desktop.
          </h2>
          <p className="mx-auto max-w-md text-muted-foreground text-sm leading-relaxed">
            Every detail is polished. Every shortcut is customizable. This
            isn&apos;t a dotfile dump — it&apos;s a complete desktop experience.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-6">
          {/* Big card — panel families with screenshot */}
          <motion.div
            className="group relative overflow-hidden rounded-xl border border-border/40 bg-card p-6 md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
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
            <div className="mt-2 overflow-hidden rounded-lg border border-border/30">
              <img
                alt="Material ii panel"
                className="h-auto w-full"
                height={400}
                loading="lazy"
                src="https://picsum.photos/800/400"
                width={800}
              />
            </div>
          </motion.div>

          {/* Text cards — stacked */}
          <div className="flex flex-col gap-3 md:col-span-2">
            <motion.div
              className="group flex-1 rounded-xl border border-border/40 bg-card p-5 transition-colors hover:border-border/60"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Palette className="mb-2 h-4 w-4 text-primary/70 transition-colors group-hover:text-primary" />
              <h3 className="mb-1 font-semibold text-sm">Dynamic theming</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Matugen extracts colors from your wallpaper. Your panel,
                sidebar, and overview all match automatically.
              </p>
            </motion.div>
            <motion.div
              className="group flex-1 rounded-xl border border-border/40 bg-card p-5 transition-colors hover:border-border/60"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Sparkles className="mb-2 h-4 w-4 text-primary/70 transition-colors group-hover:text-primary" />
              <h3 className="mb-1 font-semibold text-sm">
                Three visual styles
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Material (solid), Aurora (glass blur), and Inir (TUI-inspired).
                Each transforms the entire shell.
              </p>
            </motion.div>
            <motion.div
              className="group flex-1 rounded-xl border border-border/40 bg-card p-5 transition-colors hover:border-border/60"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <SwatchBook className="mb-2 h-4 w-4 text-primary/70 transition-colors group-hover:text-primary" />
              <h3 className="mb-1 font-semibold text-sm">Theme presets</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Gruvbox, Catppuccin, or build your own. Save and restore any
                theme in one click.
              </p>
            </motion.div>
          </div>

          {/* Medium card — workspace overview with screenshot */}
          <motion.div
            className="overflow-hidden rounded-xl border border-border/40 bg-card p-6 md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="mb-1 flex items-center gap-2">
              <Layers className="h-4 w-4 text-primary/70" />
              <h3 className="font-semibold text-base">Workspace overview</h3>
            </div>
            <p className="mb-3 text-muted-foreground text-sm">
              See all workspaces at a glance. Adapted for Niri&apos;s scrolling
              model.
            </p>
            <div className="overflow-hidden rounded-lg border border-border/30">
              <img
                alt="Workspace overview"
                className="h-auto w-full"
                height={400}
                loading="lazy"
                src="https://picsum.photos/800/400"
                width={800}
              />
            </div>
          </motion.div>

          {/* Medium card — tools */}
          <motion.div
            className="overflow-hidden rounded-xl border border-border/40 bg-card p-6 md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="mb-1 flex items-center gap-2">
              <Wrench className="h-4 w-4 text-primary/70" />
              <h3 className="font-semibold text-base">Everything built in</h3>
            </div>
            <p className="mb-3 text-muted-foreground text-sm">
              Window switcher, clipboard manager, screenshot tools, OCR, color
              picker, screen recording — no extra apps needed.
            </p>
            <div className="overflow-hidden rounded-lg border border-border/30">
              <img
                alt="Waffle panel with tools"
                className="h-auto w-full"
                height={400}
                loading="lazy"
                src="https://picsum.photos/800/400"
                width={800}
              />
            </div>
          </motion.div>

          {/* Small cards row */}
          <motion.div
            className="group rounded-xl border border-border/40 bg-card p-5 transition-colors hover:border-border/60 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Gamepad2 className="mb-2 h-4 w-4 text-primary/70 transition-colors group-hover:text-primary" />
            <h3 className="mb-1 font-semibold text-sm">GameMode</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Auto-disables effects when fullscreen apps are detected. Zero lag
              when gaming.
            </p>
          </motion.div>

          <motion.div
            className="group rounded-xl border border-border/40 bg-card p-5 transition-colors hover:border-border/60 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Settings className="mb-2 h-4 w-4 text-primary/70 transition-colors group-hover:text-primary" />
            <h3 className="mb-1 font-semibold text-sm">GUI Settings</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Configure everything graphically. No JSON, no dotfiles, no
              guesswork.
            </p>
          </motion.div>

          <motion.div
            className="group rounded-xl border border-border/40 bg-card p-5 transition-colors hover:border-border/60 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Wrench className="mb-2 h-4 w-4 text-primary/70 transition-colors group-hover:text-primary" />
            <h3 className="mb-1 font-semibold text-sm">Fully customizable</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Every keybind, every color, every behavior. Fork it, tweak it,
              make it yours.
            </p>
          </motion.div>
        </div>
      </ContentLayer>
    </section>
  );
}
