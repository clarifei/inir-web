import type * as React from "react";
import { cn } from "@/lib/utils";
import { Z_LAYERS, type ZLayer } from "@/lib/z-layers";

interface LayerProps {
  children: React.ReactNode;
  className?: string;
  layer: ZLayer;
}

/**
 * Unified layer component for z-index management
 * @param layer - The layer type: 'BACKGROUND' | 'MEDIA' | 'CONTENT' | 'DITHER' | 'HUD' | 'NOISE'
 */
export function Layer({ children, className, layer }: LayerProps) {
  return (
    <div className={cn(className)} style={{ zIndex: Z_LAYERS[layer] }}>
      {children}
    </div>
  );
}

// Convenience exports for backward compatibility
export const BackgroundLayer = ({
  children,
  className,
}: Omit<LayerProps, "layer">) => (
  <Layer className={className} layer="BACKGROUND">
    {children}
  </Layer>
);

export const MediaContainer = ({
  children,
  className,
}: Omit<LayerProps, "layer">) => (
  <Layer className={className} layer="MEDIA">
    {children}
  </Layer>
);

export const ContentLayer = ({
  children,
  className,
}: Omit<LayerProps, "layer">) => (
  <Layer className={className} layer="CONTENT">
    {children}
  </Layer>
);
