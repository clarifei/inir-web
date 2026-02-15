import { useEffect, useRef } from "react";

interface DustParticlesProps {
  className?: string;
  color?: [number, number, number];
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  drift: number;
}

export function DustParticles({
  className,
  color = [210, 198, 175],
}: DustParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) {
      return;
    }

    canvas.style.willChange = "contents";

    const dpr = window.devicePixelRatio || 1;
    let animId: number;
    let isVisible = true;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;

    const [r, g, b] = color;

    const resize = () => {
      const parent = canvas.parentElement;
      const newWidth = parent?.offsetWidth ?? window.innerWidth;
      const newHeight = parent?.offsetHeight ?? window.innerHeight;

      if (width !== newWidth || height !== newHeight) {
        width = newWidth;
        height = newHeight;

        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        ctx.scale(dpr, dpr);
      }
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    const PARTICLE_COUNT = 60;

    const init = () => {
      particles = new Array(PARTICLE_COUNT);
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles[i] = {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.15,
          vy: -Math.random() * 0.3 - 0.05,
          size: Math.random() * 1.8 + 0.4,
          opacity: Math.random() * 0.25 + 0.05,
          drift: Math.random() * Math.PI * 2,
        };
      }
    };
    init();

    const handleVisibilityChange = () => {
      isVisible = document.visibilityState === "visible";
      if (isVisible && !animId) {
        animate();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const animate = () => {
      if (!isVisible) {
        animId = 0;
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const particleCount = particles.length;
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];

        p.drift += 0.003;
        p.x += p.vx + Math.sin(p.drift) * 0.08;
        p.y += p.vy;

        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        } else if (p.x < -10) {
          p.x = width + 10;
        } else if (p.x > width + 10) {
          p.x = -10;
        }

        const s = p.size * 2;
        const a = p.opacity;

        ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
        ctx.fillRect(p.x - s / 2, p.y - s / 2, s, s);
      }

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      isVisible = false;
      if (animId) {
        cancelAnimationFrame(animId);
      }
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      canvas.style.willChange = "auto";
    };
  }, [color]);

  return (
    <canvas
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className ?? ""}`}
      ref={canvasRef}
      tabIndex={-1}
    />
  );
}
