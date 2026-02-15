import { memo } from "react";

interface DiscordPixelProps {
  size?: number;
  color?: string;
  className?: string;
}

export const DiscordPixel = memo(function DiscordPixel({
  size = 156,
  color = "currentColor",
  className,
}: DiscordPixelProps) {
  return (
    <svg
      className={className}
      height={size}
      shapeRendering="crispEdges"
      viewBox="0 0 156 156"
      width={size}
    >
      <title>Discord</title>
      <rect fill={color} height={6} width={24} x={36} y={24} />
      <rect fill={color} height={6} width={24} x={96} y={24} />
      <rect fill={color} height={6} width={108} x={24} y={30} />
      <rect fill={color} height={6} width={108} x={24} y={36} />
      <rect fill={color} height={6} width={120} x={18} y={42} />
      <rect fill={color} height={6} width={120} x={18} y={48} />
      <rect fill={color} height={6} width={132} x={12} y={54} />
      <rect fill={color} height={6} width={132} x={12} y={60} />
      <rect fill={color} height={6} width={138} x={6} y={66} />
      <rect fill={color} height={6} width={42} x={6} y={72} />
      <rect fill={color} height={6} width={36} x={60} y={72} />
      <rect fill={color} height={6} width={42} x={108} y={72} />
      <rect fill={color} height={6} width={36} x={6} y={78} />
      <rect fill={color} height={6} width={24} x={66} y={78} />
      <rect fill={color} height={6} width={36} x={114} y={78} />
      <rect fill={color} height={6} width={36} x={6} y={84} />
      <rect fill={color} height={6} width={24} x={66} y={84} />
      <rect fill={color} height={6} width={36} x={114} y={84} />
      <rect fill={color} height={6} width={42} x={6} y={90} />
      <rect fill={color} height={6} width={36} x={60} y={90} />
      <rect fill={color} height={6} width={42} x={108} y={90} />
      <rect fill={color} height={6} width={144} x={6} y={96} />
      <rect fill={color} height={6} width={144} x={6} y={102} />
      <rect fill={color} height={6} width={144} x={6} y={108} />
      <rect fill={color} height={6} width={144} x={6} y={114} />
      <rect fill={color} height={6} width={36} x={18} y={120} />
      <rect fill={color} height={6} width={36} x={102} y={120} />
      <rect fill={color} height={6} width={18} x={30} y={126} />
      <rect fill={color} height={6} width={18} x={108} y={126} />
    </svg>
  );
});
