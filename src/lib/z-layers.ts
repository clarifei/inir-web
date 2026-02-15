/**
 * Z-index stack order - higher number = on top
 *
 * 50: Noise (grain overlay)
 * 40: HUD (corner UI)
 * 30: Content (text, buttons)
 * 20: Dither (the mouse-following effect)
 * 10: Media (images, videos)
 * 0:  Background (gradients, particles)
 */
export const Z_LAYERS = {
  NOISE: 50,
  HUD: 40,
  CONTENT: 30,
  DITHER: 20,
  MEDIA: 10,
  BACKGROUND: 0,
} as const;

export type ZLayer = keyof typeof Z_LAYERS;
