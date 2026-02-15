import { useCallback, useEffect, useRef } from "react";
import { Z_LAYERS } from "@/lib/z-layers";

interface DitherOverlayProps {
  className?: string;
  enabled?: boolean;
}

const CONFIG = {
  pixelSize: 3,
  revealRadius: 250,
  falloff: 500,
  color: { r: 10, g: 10, b: 10, a: 125 },
  smoothSpeed: 0.1,
};

const VERTEX_SHADER = `
attribute vec2 position;
void main(){
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2 uMouse;
uniform float uPixelSize;
uniform float uRevealRadius;
uniform float uFalloff;
uniform vec4 uColor;

float bayerValue(float x, float y) {
  if (y < 1.0) {
    if (x < 1.0) return 0.0;
    if (x < 2.0) return 48.0;
    if (x < 3.0) return 12.0;
    if (x < 4.0) return 60.0;
    if (x < 5.0) return 3.0;
    if (x < 6.0) return 51.0;
    if (x < 7.0) return 15.0;
    return 63.0;
  }
  if (y < 2.0) {
    if (x < 1.0) return 32.0;
    if (x < 2.0) return 16.0;
    if (x < 3.0) return 44.0;
    if (x < 4.0) return 28.0;
    if (x < 5.0) return 35.0;
    if (x < 6.0) return 19.0;
    if (x < 7.0) return 47.0;
    return 31.0;
  }
  if (y < 3.0) {
    if (x < 1.0) return 8.0;
    if (x < 2.0) return 56.0;
    if (x < 3.0) return 4.0;
    if (x < 4.0) return 52.0;
    if (x < 5.0) return 11.0;
    if (x < 6.0) return 59.0;
    if (x < 7.0) return 7.0;
    return 55.0;
  }
  if (y < 4.0) {
    if (x < 1.0) return 40.0;
    if (x < 2.0) return 24.0;
    if (x < 3.0) return 36.0;
    if (x < 4.0) return 20.0;
    if (x < 5.0) return 43.0;
    if (x < 6.0) return 27.0;
    if (x < 7.0) return 39.0;
    return 23.0;
  }
  if (y < 5.0) {
    if (x < 1.0) return 2.0;
    if (x < 2.0) return 50.0;
    if (x < 3.0) return 14.0;
    if (x < 4.0) return 62.0;
    if (x < 5.0) return 1.0;
    if (x < 6.0) return 49.0;
    if (x < 7.0) return 13.0;
    return 61.0;
  }
  if (y < 6.0) {
    if (x < 1.0) return 34.0;
    if (x < 2.0) return 18.0;
    if (x < 3.0) return 46.0;
    if (x < 4.0) return 30.0;
    if (x < 5.0) return 33.0;
    if (x < 6.0) return 17.0;
    if (x < 7.0) return 45.0;
    return 29.0;
  }
  if (y < 7.0) {
    if (x < 1.0) return 10.0;
    if (x < 2.0) return 58.0;
    if (x < 3.0) return 6.0;
    if (x < 4.0) return 54.0;
    if (x < 5.0) return 9.0;
    if (x < 6.0) return 57.0;
    if (x < 7.0) return 5.0;
    return 53.0;
  }
  if (x < 1.0) return 42.0;
  if (x < 2.0) return 26.0;
  if (x < 3.0) return 38.0;
  if (x < 4.0) return 22.0;
  if (x < 5.0) return 41.0;
  if (x < 6.0) return 25.0;
  if (x < 7.0) return 37.0;
  return 21.0;
}

void main() {
  vec2 pixelCoord = floor(gl_FragCoord.xy / uPixelSize);

  float bx = floor(fract(pixelCoord.x / 8.0) * 8.0);
  float by = floor(fract(pixelCoord.y / 8.0) * 8.0);

  vec2 pixelCenter = pixelCoord * uPixelSize + uPixelSize * 0.5;

  float dx = pixelCenter.x - uMouse.x;
  float dy = pixelCenter.y - uMouse.y;
  float dist = sqrt(dx * dx + dy * dy);

  float closeness = 1.0;
  if (dist > uRevealRadius) {
    closeness = 1.0 - clamp((dist - uRevealRadius) / uFalloff, 0.0, 1.0);
  }

  float threshold = bayerValue(bx, by) / 64.0;

  if (closeness > threshold) {
    discard;
  }

  gl_FragColor = uColor;
}
`;

export function DitherOverlay({
  className,
  enabled = true,
}: DitherOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const smoothMouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current.x = e.clientX;
    mouseRef.current.y = e.clientY;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    mouseRef.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
    smoothMouseRef.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: false,
      premultipliedAlpha: false,
    });
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    const vs = gl.createShader(gl.VERTEX_SHADER);
    const fs = gl.createShader(gl.FRAGMENT_SHADER);
    if (!(vs && fs)) {
      return;
    }

    gl.shaderSource(vs, VERTEX_SHADER);
    gl.shaderSource(fs, FRAGMENT_SHADER);
    gl.compileShader(vs);
    gl.compileShader(fs);

    if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
      console.error("Vertex shader error:", gl.getShaderInfoLog(vs));
    }
    if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
      console.error("Fragment shader error:", gl.getShaderInfoLog(fs));
      return;
    }

    const program = gl.createProgram();
    if (!program) {
      return;
    }

    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }

    // biome-ignore lint/correctness/useHookAtTopLevel: WebGL method, not React hook
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const positionLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    const uMouse = gl.getUniformLocation(program, "uMouse");
    const uPixelSize = gl.getUniformLocation(program, "uPixelSize");
    const uRevealRadius = gl.getUniformLocation(program, "uRevealRadius");
    const uFalloff = gl.getUniformLocation(program, "uFalloff");
    const uColor = gl.getUniformLocation(program, "uColor");

    gl.uniform1f(uPixelSize, CONFIG.pixelSize);
    gl.uniform1f(uRevealRadius, CONFIG.revealRadius);
    gl.uniform1f(uFalloff, CONFIG.falloff);
    gl.uniform4f(
      uColor,
      CONFIG.color.r / 255,
      CONFIG.color.g / 255,
      CONFIG.color.b / 255,
      CONFIG.color.a / 255
    );

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resize);
    resize();

    const render = () => {
      smoothMouseRef.current.x +=
        (mouseRef.current.x - smoothMouseRef.current.x) * CONFIG.smoothSpeed;
      smoothMouseRef.current.y +=
        (mouseRef.current.y - smoothMouseRef.current.y) * CONFIG.smoothSpeed;

      const dpr = Math.min(window.devicePixelRatio || 1, 1);
      gl.uniform2f(
        uMouse,
        smoothMouseRef.current.x * dpr,
        canvas.height - smoothMouseRef.current.y * dpr
      );

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, [handleMouseMove]);

  return (
    <canvas
      aria-hidden
      className={`pointer-events-none fixed inset-0 ${className ?? ""}`}
      ref={canvasRef}
      style={{
        imageRendering: "pixelated",
        opacity: enabled ? 1 : 0,
        transition: "opacity 150ms ease",
        zIndex: Z_LAYERS.DITHER,
      }}
    />
  );
}
