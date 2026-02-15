import { memo } from "react";

interface ArchlinuxPixelProps {
  size?: number;
  className?: string;
}

export const ArchlinuxPixel = memo(function ArchlinuxPixel({
  size = 156,
  className,
}: ArchlinuxPixelProps) {
  return (
    <svg
      className={className}
      height={size}
      shapeRendering="crispEdges"
      viewBox="0 0 156 156"
      width={size}
    >
      <title>Arch Linux</title>
      <rect fill="currentColor" height={6} width={12} x={72} y={0} />
      <rect fill="currentColor" height={6} width={12} x={72} y={6} />
      <rect fill="currentColor" height={6} width={24} x={66} y={12} />
      <rect fill="currentColor" height={6} width={24} x={66} y={18} />
      <rect fill="currentColor" height={6} width={36} x={60} y={24} />
      <rect fill="currentColor" height={6} width={36} x={60} y={30} />
      <rect fill="currentColor" height={6} width={42} x={60} y={36} />
      <rect fill="currentColor" height={6} width={36} x={66} y={42} />
      <rect fill="currentColor" height={6} width={54} x={54} y={48} />
      <rect fill="currentColor" height={6} width={60} x={48} y={54} />
      <rect fill="currentColor" height={6} width={72} x={42} y={60} />
      <rect fill="currentColor" height={6} width={72} x={42} y={66} />
      <rect fill="currentColor" height={6} width={84} x={36} y={72} />
      <rect fill="currentColor" height={6} width={84} x={36} y={78} />
      <rect fill="currentColor" height={6} width={96} x={30} y={84} />
      <rect fill="currentColor" height={6} width={42} x={30} y={90} />
      <rect fill="currentColor" height={6} width={42} x={84} y={90} />
      <rect fill="currentColor" height={6} width={48} x={24} y={96} />
      <rect fill="currentColor" height={6} width={42} x={84} y={96} />
      <rect fill="currentColor" height={6} width={42} x={24} y={102} />
      <rect fill="currentColor" height={6} width={36} x={90} y={102} />
      <rect fill="currentColor" height={6} width={48} x={18} y={108} />
      <rect fill="currentColor" height={6} width={30} x={90} y={108} />
      <rect fill="currentColor" height={6} width={48} x={18} y={114} />
      <rect fill="currentColor" height={6} width={48} x={90} y={114} />
      <rect fill="currentColor" height={6} width={54} x={12} y={120} />
      <rect fill="currentColor" height={6} width={54} x={90} y={120} />
      <rect fill="currentColor" height={6} width={48} x={12} y={126} />
      <rect fill="currentColor" height={6} width={48} x={96} y={126} />
      <rect fill="currentColor" height={6} width={54} x={6} y={132} />
      <rect fill="currentColor" height={6} width={54} x={96} y={132} />
      <rect fill="currentColor" height={6} width={48} x={6} y={138} />
      <rect fill="currentColor" height={6} width={48} x={102} y={138} />
      <rect fill="currentColor" height={6} width={36} x={0} y={144} />
      <rect fill="currentColor" height={6} width={36} x={120} y={144} />
      <rect fill="currentColor" height={6} width={18} x={0} y={150} />
      <rect fill="currentColor" height={6} width={18} x={138} y={150} />
    </svg>
  );
});
