import { memo } from "react";

interface GithubPixelProps {
  size?: number;
  color?: string;
  className?: string;
}

export const GithubPixel = memo(function GithubPixel({
  size = 156,
  color = "currentColor",
  className,
}: GithubPixelProps) {
  return (
    <svg
      className={className}
      height={size}
      shapeRendering="crispEdges"
      viewBox="0 0 156 156"
      width={size}
    >
      <title>GitHub</title>
      <rect fill={color} height={6} width={24} x={24} y={6} />
      <rect fill={color} height={6} width={24} x={108} y={6} />
      <rect fill={color} height={6} width={108} x={24} y={12} />
      <rect fill={color} height={6} width={108} x={24} y={18} />
      <rect fill={color} height={6} width={108} x={24} y={24} />
      <rect fill={color} height={6} width={18} x={24} y={30} />
      <rect fill={color} height={6} width={18} x={114} y={30} />
      <rect fill={color} height={6} width={18} x={24} y={36} />
      <rect fill={color} height={6} width={18} x={114} y={36} />
      <rect fill={color} height={6} width={18} x={18} y={42} />
      <rect fill={color} height={6} width={18} x={120} y={42} />
      <rect fill={color} height={6} width={18} x={18} y={48} />
      <rect fill={color} height={6} width={18} x={120} y={48} />
      <rect fill={color} height={6} width={18} x={18} y={54} />
      <rect fill={color} height={6} width={18} x={120} y={54} />
      <rect fill={color} height={6} width={18} x={18} y={60} />
      <rect fill={color} height={6} width={18} x={120} y={60} />
      <rect fill={color} height={6} width={18} x={18} y={66} />
      <rect fill={color} height={6} width={18} x={120} y={66} />
      <rect fill={color} height={6} width={24} x={18} y={72} />
      <rect fill={color} height={6} width={24} x={114} y={72} />
      <rect fill={color} height={6} width={24} x={24} y={78} />
      <rect fill={color} height={6} width={24} x={108} y={78} />
      <rect fill={color} height={6} width={36} x={30} y={84} />
      <rect fill={color} height={6} width={36} x={90} y={84} />
      <rect fill={color} height={6} width={36} x={36} y={90} />
      <rect fill={color} height={6} width={36} x={84} y={90} />
      <rect fill={color} height={6} width={18} x={6} y={96} />
      <rect fill={color} height={6} width={24} x={48} y={96} />
      <rect fill={color} height={6} width={24} x={84} y={96} />
      <rect fill={color} height={6} width={24} x={6} y={102} />
      <rect fill={color} height={6} width={18} x={48} y={102} />
      <rect fill={color} height={6} width={18} x={90} y={102} />
      <rect fill={color} height={6} width={30} x={6} y={108} />
      <rect fill={color} height={6} width={18} x={48} y={108} />
      <rect fill={color} height={6} width={18} x={90} y={108} />
      <rect fill={color} height={6} width={48} x={18} y={114} />
      <rect fill={color} height={6} width={18} x={90} y={114} />
      <rect fill={color} height={6} width={42} x={24} y={120} />
      <rect fill={color} height={6} width={18} x={90} y={120} />
      <rect fill={color} height={6} width={18} x={48} y={126} />
      <rect fill={color} height={6} width={18} x={90} y={126} />
      <rect fill={color} height={6} width={18} x={48} y={132} />
      <rect fill={color} height={6} width={18} x={90} y={132} />
      <rect fill={color} height={6} width={18} x={48} y={138} />
      <rect fill={color} height={6} width={18} x={90} y={138} />
      <rect fill={color} height={6} width={12} x={54} y={144} />
      <rect fill={color} height={6} width={12} x={90} y={144} />
    </svg>
  );
});
