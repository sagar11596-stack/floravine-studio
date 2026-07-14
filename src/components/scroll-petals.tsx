import { useEffect, useRef } from "react";

/**
 * ScrollPetals — a fixed, full-viewport overlay of slowly drifting SVG petals.
 * Motion is driven by scroll position (petals rotate + drift as the page scrolls),
 * layered behind all content, and respects prefers-reduced-motion.
 */

type Petal = {
  x: number;      // vw
  y: number;      // vh (start)
  size: number;   // px
  hue: string;    // fill
  rotate: number; // base rotation
  drift: number;  // horizontal drift range
  speed: number;  // scroll parallax factor
  delay: number;  // gentle idle float offset
  opacity: number;
};

const PETALS: Petal[] = [
  { x: 6,  y: 12, size: 46, hue: "#EAD9C8", rotate: -18, drift: 22, speed: 0.18, delay: 0.0, opacity: 0.55 },
  { x: 18, y: 68, size: 32, hue: "#F2E4D4", rotate: 32,  drift: -18, speed: 0.28, delay: 1.2, opacity: 0.5 },
  { x: 28, y: 30, size: 24, hue: "#D9C3AE", rotate: 12,  drift: 14, speed: 0.42, delay: 0.6, opacity: 0.4 },
  { x: 42, y: 88, size: 54, hue: "#EFDFCB", rotate: -40, drift: -26, speed: 0.15, delay: 2.1, opacity: 0.5 },
  { x: 55, y: 20, size: 28, hue: "#E4CFB6", rotate: 55,  drift: 18, speed: 0.35, delay: 1.6, opacity: 0.45 },
  { x: 68, y: 55, size: 40, hue: "#F0E0CC", rotate: -12, drift: -20, speed: 0.22, delay: 0.4, opacity: 0.55 },
  { x: 78, y: 8,  size: 34, hue: "#D6BFA6", rotate: 22,  drift: 16, speed: 0.32, delay: 2.4, opacity: 0.42 },
  { x: 88, y: 74, size: 48, hue: "#ECDBC5", rotate: -28, drift: -14, speed: 0.19, delay: 1.0, opacity: 0.5 },
  { x: 94, y: 38, size: 22, hue: "#C9B196", rotate: 8,   drift: 24, speed: 0.46, delay: 1.8, opacity: 0.38 },
  { x: 12, y: 46, size: 30, hue: "#E7D3BC", rotate: 42,  drift: -22, speed: 0.30, delay: 0.9, opacity: 0.44 },
];

function PetalShape({ fill }: { fill: string }) {
  // A soft, elongated petal — quiet, editorial, not cartoonish.
  return (
    <svg viewBox="0 0 40 60" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <radialGradient id={`pg-${fill.slice(1)}`} cx="50%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="60%" stopColor={fill} stopOpacity="0.95" />
          <stop offset="100%" stopColor={fill} stopOpacity="0.6" />
        </radialGradient>
      </defs>
      <path
        d="M20 1 C31 12, 36 28, 32 46 C29 55, 24 59, 20 59 C16 59, 11 55, 8 46 C4 28, 9 12, 20 1 Z"
        fill={`url(#pg-${fill.slice(1)})`}
        stroke={fill}
        strokeOpacity="0.35"
        strokeWidth="0.5"
      />
    </svg>
  );
}

export function ScrollPetals() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const raf = useRef<number | null>(null);
  const target = useRef(0);
  const current = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const onScroll = () => {
      target.current = window.scrollY;
      if (raf.current == null) tick();
    };

    const tick = () => {
      current.current += (target.current - current.current) * 0.08;
      const y = current.current;
      const el = wrapRef.current;
      if (el) {
        el.style.setProperty("--scroll", `${y}`);
      }
      if (Math.abs(target.current - current.current) > 0.4) {
        raf.current = requestAnimationFrame(tick);
      } else {
        raf.current = null;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
      style={{ ["--scroll" as string]: "0" }}
    >
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="fv-petal absolute block will-change-transform"
          style={{
            left: `${p.x}vw`,
            top: `${p.y}vh`,
            width: `${p.size}px`,
            height: `${p.size * 1.5}px`,
            opacity: p.opacity,
            ["--sp" as string]: p.speed,
            ["--dr" as string]: p.drift,
            ["--rot" as string]: `${p.rotate}deg`,
            transform:
              "translate3d(calc(var(--scroll) * 1px * var(--sp) * var(--dr) * 0.001), calc(var(--scroll) * -1px * var(--sp)), 0) rotate(calc(var(--rot) + var(--scroll) * 0.03deg * var(--sp)))",
            animation: `fv-petal-float ${14 + (i % 5) * 3}s ease-in-out ${p.delay}s infinite alternate`,
          }}
        >
          <PetalShape fill={p.hue} />
        </span>
      ))}

      <style>{`
        @keyframes fv-petal-float {
          0%   { filter: blur(0.4px); }
          50%  { filter: blur(0.2px); }
          100% { filter: blur(0.6px); }
        }
        .fv-petal { mix-blend-mode: multiply; }
      `}</style>
    </div>
  );
}