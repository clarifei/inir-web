import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  colSpan?: string;
  delay?: number;
  hoverable?: boolean;
}

const BASE_ANIMATION_PROPS = {
  initial: { opacity: 0, y: 20 },
  transition: { duration: 0.6 },
  viewport: { once: true },
  whileInView: { opacity: 1, y: 0 },
} as const;

export function AnimatedCard({
  children,
  className,
  colSpan,
  delay = 0,
  hoverable = false,
}: AnimatedCardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-xl border border-border/40 bg-card",
        hoverable && "transition-colors hover:border-border/60",
        colSpan,
        className
      )}
      {...BASE_ANIMATION_PROPS}
      transition={{ ...BASE_ANIMATION_PROPS.transition, delay }}
    >
      {children}
    </motion.div>
  );
}

interface FeatureCardProps {
  children: ReactNode;
  className?: string;
  colSpan?: string;
  delay?: number;
  hoverable?: boolean;
  icon: LucideIcon;
}

export function FeatureCard({
  children,
  className,
  colSpan,
  delay = 0,
  hoverable = true,
  icon: Icon,
}: FeatureCardProps) {
  return (
    <AnimatedCard
      className={cn("p-5", className)}
      colSpan={colSpan}
      delay={delay}
      hoverable={hoverable}
    >
      <Icon className="mb-2 h-4 w-4 text-primary/70 transition-colors group-hover:text-primary" />
      {children}
    </AnimatedCard>
  );
}

interface FeatureTextProps {
  description: string;
  title: string;
}

export function FeatureText({ description, title }: FeatureTextProps) {
  return (
    <>
      <h3 className="mb-1 font-semibold text-sm">{title}</h3>
      <p className="text-muted-foreground text-xs leading-relaxed">
        {description}
      </p>
    </>
  );
}

interface ImageCardProps {
  alt: string;
  children: ReactNode;
  className?: string;
  colSpan?: string;
  delay?: number;
  src: string;
}

export function ImageCard({
  alt,
  children,
  className,
  colSpan,
  delay = 0,
  src,
}: ImageCardProps) {
  return (
    <AnimatedCard
      className={cn("overflow-hidden p-6", className)}
      colSpan={colSpan}
      delay={delay}
    >
      {children}
      <div className="mt-2 overflow-hidden rounded-lg border border-border/30">
        <img
          alt={alt}
          className="h-auto w-full"
          height={400}
          loading="lazy"
          src={src}
          width={800}
        />
      </div>
    </AnimatedCard>
  );
}

interface SectionHeaderProps {
  description: string;
  title: string;
}

export function SectionHeader({ description, title }: SectionHeaderProps) {
  return (
    <motion.div className="mb-16 text-center" {...BASE_ANIMATION_PROPS}>
      <h2 className="mb-3 font-medium font-serif text-3xl italic tracking-[-0.02em] md:text-4xl">
        {title}
      </h2>
      <p className="mx-auto max-w-md text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
