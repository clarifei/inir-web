import { Link } from "@tanstack/react-router";
import * as React from "react";
import { DiscordPixel } from "@/components/icons/discord";
import { GeminiFillPixel } from "@/components/icons/gemini";
import { GithubPixel } from "@/components/icons/github";
import { cn } from "@/lib/utils";
import { Z_LAYERS } from "@/lib/z-layers";

const links = [
  { label: "Features", href: "#features" },
  { label: "Gallery", href: "#gallery" },
  { label: "Install", href: "#install" },
  { label: "Docs", href: "#docs" },
];

export function Navbar() {
  const [mounted, setMounted] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header
      className="fixed top-0 right-0 left-0 flex justify-center transition-all duration-500 ease-out"
      style={{ zIndex: Z_LAYERS.HUD }}
    >
      <div
        className={cn(
          "flex w-full items-center justify-between transition-all duration-500 ease-out",
          scrolled
            ? "mt-3 h-11 max-w-xl rounded-full border border-border/50 bg-card/80 px-5 shadow-black/10 shadow-lg backdrop-blur-xl"
            : "container mx-auto mt-0 h-14 max-w-5xl border border-transparent bg-transparent px-4"
        )}
      >
        <Link
          activeOptions={{ exact: true }}
          activeProps={{
            className: "flex items-center gap-2 font-medium tracking-tight",
          }}
          className="flex items-center gap-2 font-medium tracking-tight"
          to="/"
        >
          <GeminiFillPixel className="text-foreground" size={18} />
          <span>iNiR SHELL</span>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {links.map((link) => (
            <a
              className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            className="text-muted-foreground transition-colors hover:text-foreground"
            href="https://discord.gg/pAPTfAhZUJ"
            rel="noreferrer"
            target="_blank"
          >
            <DiscordPixel
              className="text-muted-foreground hover:text-foreground"
              size={18}
            />
          </a>
          <a
            className="text-muted-foreground transition-colors hover:text-foreground"
            href="https://github.com/snowarch/inir"
            rel="noreferrer"
            target="_blank"
          >
            <GithubPixel
              className="text-muted-foreground hover:text-foreground"
              size={18}
            />
          </a>
        </div>
      </div>
    </header>
  );
}
