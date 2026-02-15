import { useEffect, useState } from "react";
import { useDither } from "@/hooks/use-dither";
import { useIsMobile } from "@/hooks/use-mobile";
import { Z_LAYERS } from "@/lib/z-layers";

const RIGHT_CHARS = ["⠁", "⠂", "⠄", "⠆", "⠇", "⠧", "⠷", "⠿"];

interface GridCell {
  id: string;
  char: string;
}

// Triangular right-aligned pattern: row 0 has 1, row 1 has 2, row 2 has 3
const TRIANGLE_PATTERN = [
  false,
  false,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
];

const useAnimatedTriangle = (chars: string[], interval = 500) => {
  const [cells, setCells] = useState<GridCell[]>(() =>
    Array.from({ length: 9 }, (_, i) => ({
      id: `tri-${i}`,
      char: TRIANGLE_PATTERN[i] ? (chars[i % chars.length] ?? "⊚") : "",
    }))
  );

  useEffect(() => {
    let step = 0;

    const id = setInterval(() => {
      step = (step + 1) % chars.length;

      setCells((prev) =>
        prev.map((cell, i) => {
          if (!TRIANGLE_PATTERN[i]) {
            return { id: cell.id, char: "" };
          }
          return {
            id: cell.id,
            char: chars[(step + i) % chars.length] ?? "⊚",
          };
        })
      );
    }, interval);

    return () => clearInterval(id);
  }, [chars, interval]);

  return cells;
};

const GRID_CLASS =
  "hidden select-none grid-cols-3 gap-0 text-xs leading-3 opacity-40 md:grid";

function Grid({ cells }: { cells: GridCell[] }) {
  return (
    <div aria-hidden className={GRID_CLASS}>
      {cells.map((c) => (
        <span className="text-center" key={c.id}>
          {c.char}
        </span>
      ))}
    </div>
  );
}

function CornerRight() {
  return <Grid cells={useAnimatedTriangle(RIGHT_CHARS)} />;
}

// Shared label component to avoid repetition
function LabelText({ children }: { children: string }) {
  return (
    <span className="text-[9px] text-foreground/50 leading-none">
      {children}
    </span>
  );
}

function getBrowserName(): string {
  if (typeof navigator === "undefined") {
    return "Unknown";
  }
  const ua = navigator.userAgent;
  if (ua.includes("Firefox")) {
    return "Firefox";
  }
  if (ua.includes("Chrome")) {
    return "Chrome";
  }
  if (ua.includes("Safari")) {
    return "Safari";
  }
  return "Unknown";
}

function DitherToggle() {
  const { enabled, toggle } = useDither();

  return (
    <button
      className="flex cursor-pointer items-center space-x-1 transition-opacity hover:opacity-80"
      onClick={toggle}
      type="button"
    >
      <LabelText>DITHER:</LabelText>
      <span
        className={`text-[9px] leading-none ${enabled ? "text-green-400" : "text-destructive"}`}
      >
        {enabled ? "TRUE" : "FALSE"}
      </span>
    </button>
  );
}

function ClientInfo() {
  const [browser, setBrowser] = useState("Unknown");
  const [viewport, setViewport] = useState("-");
  const [depth, setDepth] = useState("-");
  const isMobile = useIsMobile();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const update = () => {
      setBrowser(getBrowserName());
      setViewport(`${window.innerWidth}x${window.innerHeight}`);
      setDepth(`${screen.colorDepth}BIT`);
    };

    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div aria-hidden className="hidden select-none text-xs md:block">
      <div className="space-y-0.5">
        <InfoRow label="CLIENT:" value={browser} />
        <InfoRow label="VIEWPORT:" numeric value={viewport} />
        <InfoRow label="DEPTH:" numeric value={depth} />
        {!isMobile && <DitherToggle />}
      </div>
    </div>
  );
}

function InfoRow({
  label,
  value,
  numeric,
  align = "left",
}: {
  label: string;
  value: string;
  numeric?: boolean;
  align?: "left" | "right";
}) {
  return (
    <div
      className={`flex items-center space-x-1 ${align === "right" ? "justify-end" : ""}`}
    >
      <LabelText>{label}</LabelText>
      <span
        className={`text-[10px] text-foreground/70 leading-none ${numeric ? "tabular-nums" : ""}`}
      >
        {value}
      </span>
    </div>
  );
}

function formatTime(d: Date): string {
  return d.toTimeString().slice(0, 8);
}

function getTimezoneOffset(): string {
  const offset = -new Date().getTimezoneOffset() / 60;
  return `GMT${offset >= 0 ? "+" : ""}${offset}`;
}

function TimeSync() {
  const [utc, setUtc] = useState("--:--:--");
  const [local, setLocal] = useState("--:--:--");
  const [unix, setUnix] = useState("0");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setUtc(formatTime(new Date(now.toUTCString())));
      setLocal(formatTime(now));
      setUnix(Math.floor(now.getTime() / 1000).toString());
    };

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div aria-hidden className="hidden select-none text-xs md:block">
      <div className="space-y-0.5 text-right">
        <div className="flex items-center justify-end space-x-3">
          <InfoRow align="right" label="UTC:" numeric value={utc} />
          <InfoRow align="right" label="LOCAL:" numeric value={local} />
        </div>
        <InfoRow align="right" label="UNIX:" numeric value={unix} />
        <div className="flex items-center justify-end space-x-3">
          <InfoRow align="right" label="ZONE:" value={getTimezoneOffset()} />
          <div className="flex items-center space-x-1">
            <LabelText>STATUS:</LabelText>
            <div className="h-1 w-1 rounded-full bg-green-400" />
            <span className="text-[9px] text-foreground/70 leading-none">
              ON
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HudOverlay() {
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || isMobile) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed right-0 bottom-0 left-0"
      style={{ zIndex: Z_LAYERS.HUD }}
    >
      <div className="flex w-full justify-between px-4 pb-4">
        <div className="pointer-events-auto flex items-end gap-4">
          <ClientInfo />
        </div>
        <div className="pointer-events-auto flex items-end gap-4">
          <TimeSync />
          <CornerRight />
        </div>
      </div>
    </div>
  );
}
