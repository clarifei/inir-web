import type * as React from "react";
import { cn } from "@/lib/utils";
import { Z_LAYERS } from "@/lib/z-layers";

interface ContentLayerProps {
  children: React.ReactNode;
  className?: string;
}

// Background stuff - gradients, particles, etc. (z-0)
export function BackgroundLayer({ children, className }: ContentLayerProps) {
  return (
    <div className={cn(className)} style={{ zIndex: Z_LAYERS.BACKGROUND }}>
      {children}
    </div>
  );
}

// Images and videos - dither goes on top of these (z-10)
export function MediaContainer({ children, className }: ContentLayerProps) {
  return (
    <div className={cn(className)} style={{ zIndex: Z_LAYERS.MEDIA }}>
      {children}
    </div>
  );
}

// Text, buttons, UI - sits above the dither effect (z-30)
export function ContentLayer({ children, className }: ContentLayerProps) {
  return (
    <div className={cn(className)} style={{ zIndex: Z_LAYERS.CONTENT }}>
      {children}
    </div>
  );
}
