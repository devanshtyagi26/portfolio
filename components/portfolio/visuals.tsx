"use client";
import { useEffect, useMemo, useRef, useState } from "react";

export function NeuralVisual() {
  // Deterministic layered neural network visualization
  const layers = useMemo(() => [4, 6, 6, 3], []);
  const width = 460;
  const height = 460;
  const padX = 60;
  const padY = 50;

  const nodes: { x: number; y: number; layer: number; i: number }[] = [];
  layers.forEach((count, li) => {
    const xs = padX + (li * (width - padX * 2)) / (layers.length - 1);
    for (let i = 0; i < count; i++) {
      const ys = padY + (i * (height - padY * 2)) / Math.max(count - 1, 1);
      nodes.push({ x: xs, y: ys, layer: li, i });
    }
  });

  const edges: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    key: string;
    delay: number;
  }[] = [];
  for (let li = 0; li < layers.length - 1; li++) {
    const a = nodes.filter((n) => n.layer === li);
    const b = nodes.filter((n) => n.layer === li + 1);
    a.forEach((na) => {
      b.forEach((nb) => {
        edges.push({
          x1: na.x,
          y1: na.y,
          x2: nb.x,
          y2: nb.y,
          key: `${na.layer}-${na.i}-${nb.layer}-${nb.i}`,
          delay: (na.i + nb.i + li) * 0.08,
        });
      });
    });
  }

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative aspect-square w-full max-w-[460px]">
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, oklch(0.68 0.13 175 / 0.18), transparent 60%)",
        }}
      />
      <svg viewBox={`0 0 ${width} ${height}`} className="h-full w-full">
        <defs>
          <linearGradient id="edge" x1="0" x2="1">
            <stop
              offset="0%"
              stopColor="oklch(0.68 0.13 175)"
              stopOpacity="0.05"
            />
            <stop
              offset="50%"
              stopColor="oklch(0.68 0.13 175)"
              stopOpacity="0.55"
            />
            <stop
              offset="100%"
              stopColor="oklch(0.68 0.13 175)"
              stopOpacity="0.05"
            />
          </linearGradient>
          <radialGradient id="node">
            <stop offset="0%" stopColor="oklch(0.97 0 0)" />
            <stop offset="100%" stopColor="oklch(0.68 0.13 175)" />
          </radialGradient>
        </defs>

        {/* Faint grid */}
        <g opacity="0.06">
          {Array.from({ length: 10 }).map((_, i) => (
            <line
              key={`gv${i}`}
              x1={(i * width) / 10}
              y1="0"
              x2={(i * width) / 10}
              y2={height}
              stroke="white"
            />
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <line
              key={`gh${i}`}
              x1="0"
              y1={(i * height) / 10}
              x2={width}
              y2={(i * height) / 10}
              stroke="white"
            />
          ))}
        </g>

        {edges.map((e) => (
          <line
            key={e.key}
            x1={e.x1}
            y1={e.y1}
            x2={e.x2}
            y2={e.y2}
            stroke="url(#edge)"
            strokeWidth="0.6"
            style={{
              opacity: mounted ? 1 : 0,
              transition: `opacity 1.2s ease ${e.delay}s`,
            }}
          />
        ))}

        {nodes.map((n, idx) => (
          <g
            key={`n${idx}`}
            style={{
              opacity: mounted ? 1 : 0,
              transition: `opacity 0.6s ease ${0.4 + n.layer * 0.15 + n.i * 0.04}s`,
              transformOrigin: `${n.x}px ${n.y}px`,
              animation: mounted
                ? `float-node 6s ease-in-out ${(n.layer + n.i) * 0.2}s infinite`
                : undefined,
            }}
          >
            <circle
              cx={n.x}
              cy={n.y}
              r="8"
              fill="oklch(0.19 0 0)"
              stroke="oklch(0.32 0 0)"
              strokeWidth="1"
            />
            <circle cx={n.x} cy={n.y} r="3" fill="url(#node)" />
          </g>
        ))}
      </svg>
    </div>
  );
}

export function MiniSpark({ delay = 0 }: { delay?: number }) {
  return (
    <svg viewBox="0 0 80 24" className="h-6 w-20 text-accent">
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        points="0,18 12,15 22,17 32,10 44,12 56,6 68,8 80,3"
        style={{
          strokeDasharray: 200,
          strokeDashoffset: 200,
          animation: `draw-line 2s ease-out ${delay}s forwards`,
        }}
      />
    </svg>
  );
}

export function Reveal({
  children,
  delay = 0,
  as: As = "div",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  as?: any;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <As
      ref={ref as any}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(14px)",
        transition: `opacity 0.8s cubic-bezier(0.2,0.7,0.2,1) ${delay}s, transform 0.8s cubic-bezier(0.2,0.7,0.2,1) ${delay}s`,
      }}
    >
      {children}
    </As>
  );
}
