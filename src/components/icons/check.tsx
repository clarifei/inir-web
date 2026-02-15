import { memo } from "react";

interface CheckPixelProps {
  size?: number;
  color?: string;
  className?: string;
}

export const CheckPixel = memo(function CheckPixel({
  size = 156,
  color = "currentColor",
  className,
}: CheckPixelProps) {
  return (
    <svg
      className={className}
      height={size}
      shapeRendering="crispEdges"
      viewBox="0 0 156 156"
      width={size}
    >
      <title>Check</title>
      <rect fill={color} height={6} width={12} x={126} y={30} />
      <rect fill={color} height={6} width={18} x={120} y={36} />
      <rect fill={color} height={6} width={24} x={114} y={42} />
      <rect fill={color} height={6} width={24} x={108} y={48} />
      <rect fill={color} height={6} width={24} x={102} y={54} />
      <rect fill={color} height={6} width={24} x={96} y={60} />
      <rect fill={color} height={6} width={24} x={90} y={66} />
      <rect fill={color} height={6} width={18} x={18} y={72} />
      <rect fill={color} height={6} width={24} x={84} y={72} />
      <rect fill={color} height={6} width={24} x={18} y={78} />
      <rect fill={color} height={6} width={24} x={78} y={78} />
      <rect fill={color} height={6} width={24} x={24} y={84} />
      <rect fill={color} height={6} width={24} x={72} y={84} />
      <rect fill={color} height={6} width={24} x={30} y={90} />
      <rect fill={color} height={6} width={24} x={66} y={90} />
      <rect fill={color} height={6} width={48} x={36} y={96} />
      <rect fill={color} height={6} width={36} x={42} y={102} />
      <rect fill={color} height={6} width={24} x={48} y={108} />
      <rect fill={color} height={6} width={12} x={54} y={114} />
    </svg>
  );
});
