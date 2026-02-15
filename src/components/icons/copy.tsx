import { memo } from "react";

interface CopyPixelProps {
  size?: number;
  color?: string;
  className?: string;
}

export const CopyPixel = memo(function CopyPixel({
  size = 156,
  color = "currentColor",
  className,
}: CopyPixelProps) {
  return (
    <svg
      className={className}
      height={size}
      shapeRendering="crispEdges"
      viewBox="0 0 156 156"
      width={size}
    >
      <title>Copy</title>
      <rect fill={color} height={6} width={90} x={12} y={6} />
      <rect fill={color} height={6} width={102} x={6} y={12} />
      <rect fill={color} height={6} width={108} x={6} y={18} />
      <rect fill={color} height={6} width={18} x={6} y={24} />
      <rect fill={color} height={6} width={18} x={96} y={24} />
      <rect fill={color} height={6} width={18} x={6} y={30} />
      <rect fill={color} height={6} width={6} x={102} y={30} />
      <rect fill={color} height={6} width={18} x={6} y={36} />
      <rect fill={color} height={6} width={18} x={6} y={42} />
      <rect fill={color} height={6} width={78} x={60} y={42} />
      <rect fill={color} height={6} width={18} x={6} y={48} />
      <rect fill={color} height={6} width={96} x={48} y={48} />
      <rect fill={color} height={6} width={18} x={6} y={54} />
      <rect fill={color} height={6} width={102} x={48} y={54} />
      <rect fill={color} height={6} width={18} x={6} y={60} />
      <rect fill={color} height={6} width={18} x={42} y={60} />
      <rect fill={color} height={6} width={18} x={132} y={60} />
      <rect fill={color} height={6} width={18} x={6} y={66} />
      <rect fill={color} height={6} width={18} x={42} y={66} />
      <rect fill={color} height={6} width={18} x={132} y={66} />
      <rect fill={color} height={6} width={18} x={6} y={72} />
      <rect fill={color} height={6} width={18} x={42} y={72} />
      <rect fill={color} height={6} width={18} x={132} y={72} />
      <rect fill={color} height={6} width={18} x={6} y={78} />
      <rect fill={color} height={6} width={18} x={42} y={78} />
      <rect fill={color} height={6} width={18} x={132} y={78} />
      <rect fill={color} height={6} width={18} x={6} y={84} />
      <rect fill={color} height={6} width={18} x={42} y={84} />
      <rect fill={color} height={6} width={18} x={132} y={84} />
      <rect fill={color} height={6} width={18} x={6} y={90} />
      <rect fill={color} height={6} width={18} x={42} y={90} />
      <rect fill={color} height={6} width={18} x={132} y={90} />
      <rect fill={color} height={6} width={24} x={6} y={96} />
      <rect fill={color} height={6} width={18} x={42} y={96} />
      <rect fill={color} height={6} width={18} x={132} y={96} />
      <rect fill={color} height={6} width={24} x={12} y={102} />
      <rect fill={color} height={6} width={18} x={42} y={102} />
      <rect fill={color} height={6} width={18} x={132} y={102} />
      <rect fill={color} height={6} width={12} x={18} y={108} />
      <rect fill={color} height={6} width={18} x={42} y={108} />
      <rect fill={color} height={6} width={18} x={132} y={108} />
      <rect fill={color} height={6} width={18} x={42} y={114} />
      <rect fill={color} height={6} width={18} x={132} y={114} />
      <rect fill={color} height={6} width={18} x={42} y={120} />
      <rect fill={color} height={6} width={18} x={132} y={120} />
      <rect fill={color} height={6} width={18} x={42} y={126} />
      <rect fill={color} height={6} width={18} x={132} y={126} />
      <rect fill={color} height={6} width={108} x={42} y={132} />
      <rect fill={color} height={6} width={102} x={48} y={138} />
      <rect fill={color} height={6} width={90} x={54} y={144} />
    </svg>
  );
});
