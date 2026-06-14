"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";

/**
 * Ambient animated SVG background.
 * - Fixed full-viewport layer behind all content (opacity ~10%).
 * - Organic, slow "path trace" via stroke-dashoffset animation.
 * - Scroll-driven parallax + tracing speed boost during active scrolling.
 * - Pulsing nodes at intersections imply gentle data flow.
 * - Respects prefers-reduced-motion.
 */

type Pt = { x: number; y: number };
type Path = {
  d: string;
  len: number;
  width: number;
  dur: number;
  delay: number;
  parallax: number;
};
type Node = { x: number; y: number; r: number; delay: number };
type TracePoint = { x: number; y: number };

// Deterministic PRNG so SSR & client agree (no hydration flicker)
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const VBW = 1600;
const VBH = 1000;
const ACCENT = "#10B981"; // deep emerald
const PRIMARY_LINE =
  "M -120 640 C 180 520, 310 250, 560 330 S 860 720, 1110 500 S 1380 210, 1720 360";
const SCROLL_NODE_SELECTOR = "[data-scroll-node]";

function buildScene() {
  const rand = mulberry32(7);
  const paths: Path[] = [];
  const nodes: Node[] = [];

  // Generate organic curved paths that traverse the viewport
  const PATH_COUNT = 14;
  for (let i = 0; i < PATH_COUNT; i++) {
    const startSide = Math.floor(rand() * 4);
    let p: Pt;
    switch (startSide) {
      case 0:
        p = { x: rand() * VBW, y: -20 };
        break;
      case 1:
        p = { x: VBW + 20, y: rand() * VBH };
        break;
      case 2:
        p = { x: rand() * VBW, y: VBH + 20 };
        break;
      default:
        p = { x: -20, y: rand() * VBH };
    }
    const points: Pt[] = [p];
    const segs = 4 + Math.floor(rand() * 4);
    for (let s = 0; s < segs; s++) {
      const last = points[points.length - 1];
      const angle = rand() * Math.PI * 2;
      const dist = 180 + rand() * 260;
      points.push({
        x: Math.max(-40, Math.min(VBW + 40, last.x + Math.cos(angle) * dist)),
        y: Math.max(-40, Math.min(VBH + 40, last.y + Math.sin(angle) * dist)),
      });
    }
    // Build smooth cubic path
    let d = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
    let approxLen = 0;
    for (let k = 1; k < points.length; k++) {
      const a = points[k - 1];
      const b = points[k];
      const cx1 = a.x + (b.x - a.x) * 0.3 + (rand() - 0.5) * 80;
      const cy1 = a.y + (b.y - a.y) * 0.1 + (rand() - 0.5) * 80;
      const cx2 = a.x + (b.x - a.x) * 0.7 + (rand() - 0.5) * 80;
      const cy2 = a.y + (b.y - a.y) * 0.9 + (rand() - 0.5) * 80;
      d += ` C ${cx1.toFixed(1)} ${cy1.toFixed(1)}, ${cx2.toFixed(1)} ${cy2.toFixed(1)}, ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
      approxLen += Math.hypot(b.x - a.x, b.y - a.y) * 1.1;
      // occasional node at intersection-ish points
      if (rand() < 0.45) {
        nodes.push({
          x: b.x,
          y: b.y,
          r: 1.2 + rand() * 1.8,
          delay: rand() * 6,
        });
      }
    }
    paths.push({
      d,
      len: approxLen,
      width: rand() < 0.15 ? 1.4 : rand() < 0.5 ? 1.1 : 0.8,
      dur: 14 + rand() * 18, // slow & organic
      delay: -rand() * 20,
      parallax: 0.04 + rand() * 0.18,
    });
  }

  // A few extra straight "circuit" traces for variety
  for (let i = 0; i < 6; i++) {
    const x1 = rand() * VBW;
    const y1 = rand() * VBH;
    const horiz = rand() < 0.5;
    const len = 120 + rand() * 240;
    const mx = horiz ? x1 + len * 0.6 : x1;
    const my = horiz ? y1 : y1 + len * 0.6;
    const ex = horiz ? mx : mx + 80 * (rand() < 0.5 ? -1 : 1);
    const ey = horiz ? my + 80 * (rand() < 0.5 ? -1 : 1) : my;
    const d = `M ${x1.toFixed(1)} ${y1.toFixed(1)} L ${mx.toFixed(1)} ${my.toFixed(1)} L ${ex.toFixed(1)} ${ey.toFixed(1)}`;
    const approxLen =
      Math.hypot(mx - x1, my - y1) + Math.hypot(ex - mx, ey - my);
    paths.push({
      d,
      len: approxLen,
      width: 0.7,
      dur: 12 + rand() * 10,
      delay: -rand() * 15,
      parallax: 0.02 + rand() * 0.1,
    });
    nodes.push({ x: ex, y: ey, r: 1.5, delay: rand() * 5 });
  }

  return { paths, nodes };
}

function buildScrollPath(points: TracePoint[]) {
  if (points.length < 2) return "";

  return points.slice(1).reduce(
    (path, point, index) => {
      const previous = points[index];
      const midY = previous.y + (point.y - previous.y) * 0.5;
      const bend = Math.min(90, Math.abs(point.x - previous.x) * 0.22);
      const c1x = previous.x + Math.sign(point.x - previous.x || 1) * bend;
      const c2x = point.x - Math.sign(point.x - previous.x || 1) * bend;

      return `${path} C ${c1x.toFixed(1)} ${midY.toFixed(1)}, ${c2x.toFixed(1)} ${midY.toFixed(1)}, ${point.x.toFixed(1)} ${point.y.toFixed(1)}`;
    },
    `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`,
  );
}

export function AmbientBackground() {
  const scene = useMemo(() => buildScene(), []);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const scrollTraceRef = useRef<HTMLDivElement | null>(null);
  const scrollSvgRef = useRef<SVGSVGElement | null>(null);
  const scrollPathRef = useRef<SVGPathElement | null>(null);
  const scrollGlowRef = useRef<SVGPathElement | null>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Scroll-driven parallax + tracing-speed boost
  useEffect(() => {
    if (reduced) return;
    const root = rootRef.current;
    if (!root) return;

    let lastY = window.scrollY;
    let velocity = 0;
    let targetSpeed = 1;
    let currentSpeed = 1;
    let scrollY = lastY;
    let raf = 0;
    let idleTimer = 0;

    const onScroll = () => {
      const y = window.scrollY;
      velocity = Math.min(Math.abs(y - lastY), 80);
      lastY = y;
      scrollY = y;
      targetSpeed = 1 + Math.min(velocity / 30, 1.6); // up to ~2.6x during fast scroll
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        targetSpeed = 1;
      }, 220);
    };

    const tick = () => {
      currentSpeed += (targetSpeed - currentSpeed) * 0.08;
      root.style.setProperty("--trace-speed", currentSpeed.toFixed(3));
      // parallax shift on groups
      const groups = root.querySelectorAll<SVGGElement>("[data-parallax]");
      groups.forEach((g) => {
        const f = parseFloat(g.dataset.parallax || "0");
        g.style.transform = `translate3d(0, ${(-scrollY * f).toFixed(2)}px, 0)`;
      });
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
      window.clearTimeout(idleTimer);
    };
  }, [reduced]);

  useEffect(() => {
    const traceRoot = scrollTraceRef.current;
    const svg = scrollSvgRef.current;
    const path = scrollPathRef.current;
    const glow = scrollGlowRef.current;
    if (!traceRoot || !svg || !path || !glow) return;

    let raf = 0;
    let cachedLength = 0;

    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const body = document.body;
      const pageHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        doc.clientHeight,
        doc.scrollHeight,
        doc.offsetHeight,
      );
      const viewportWidth = window.innerWidth;
      const scrollY = window.scrollY;
      const anchors = Array.from(
        document.querySelectorAll<HTMLElement>(SCROLL_NODE_SELECTOR),
      );
      const points = anchors
        .map((el) => {
          const rect = el.getBoundingClientRect();
          return {
            x: rect.left + rect.width / 2,
            y: rect.top + scrollY + rect.height / 2,
          };
        })
        .filter((point) => point.y > 0 && point.y < pageHeight)
        .sort((a, b) => a.y - b.y || a.x - b.x);

      traceRoot.style.height = `${pageHeight}px`;
      svg.setAttribute("viewBox", `0 0 ${viewportWidth} ${pageHeight}`);

      if (points.length < 2) {
        path.removeAttribute("d");
        glow.removeAttribute("d");
        return;
      }

      const d = buildScrollPath(points);
      path.setAttribute("d", d);
      glow.setAttribute("d", d);
      cachedLength = path.getTotalLength();

      const start = points[0].y - window.innerHeight * 0.7;
      const end = points[points.length - 1].y - window.innerHeight * 0.35;
      const progress = reduced
        ? 1
        : Math.min(
            1,
            Math.max(0, (scrollY - start) / Math.max(1, end - start)),
          );

      path.style.strokeDasharray = `${cachedLength}`;
      path.style.strokeDashoffset = `${cachedLength * (1 - progress)}`;
      glow.style.strokeDasharray = `${cachedLength}`;
      glow.style.strokeDashoffset = `${cachedLength * (1 - progress)}`;
    };

    const requestUpdate = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    const resizeObserver = new ResizeObserver(requestUpdate);
    resizeObserver.observe(document.body);
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    requestUpdate();
    const timeout = window.setTimeout(requestUpdate, 350);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.clearTimeout(timeout);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [reduced]);

  return (
    <>
      <div
        ref={rootRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        style={
          {
            opacity: 0.24,
            "--trace-speed": 1,
            contain: "strict",
          } as CSSProperties & { "--trace-speed": number }
        }
      >
        <svg
          viewBox={`0 0 ${VBW} ${VBH}`}
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full"
        >
          <defs>
            <filter
              id="ambient-glow"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feGaussianBlur stdDeviation="2.2" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <radialGradient id="ambient-node">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="60%" stopColor={ACCENT} stopOpacity="0.7" />
              <stop offset="100%" stopColor={ACCENT} stopOpacity="0" />
            </radialGradient>
            <radialGradient id="ambient-vignette" cx="50%" cy="50%" r="75%">
              <stop offset="60%" stopColor="#000" stopOpacity="0" />
              <stop offset="100%" stopColor="#000" stopOpacity="0.55" />
            </radialGradient>
          </defs>

          <g
            filter="url(#ambient-glow)"
            stroke={ACCENT}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <g data-parallax="0.09" style={{ willChange: "transform" }}>
              <path
                d={PRIMARY_LINE}
                strokeWidth="1.65"
                strokeOpacity="0.95"
                strokeDasharray="220 980"
                style={
                  reduced
                    ? { strokeDasharray: "none", strokeOpacity: 0.45 }
                    : {
                        animation: "ambient-trace 16s linear -4s infinite",
                        animationDuration: "calc(16s / var(--trace-speed, 1))",
                      }
                }
              />
              <path d={PRIMARY_LINE} strokeWidth="5" strokeOpacity="0.12" />
            </g>
            {scene.paths.map((p, i) => {
              const dash = Math.max(80, p.len * 0.22);
              const gap = p.len;
              return (
                <g
                  key={`p${i}`}
                  data-parallax={p.parallax}
                  style={{ willChange: "transform" }}
                >
                  <path
                    d={p.d}
                    strokeWidth={p.width}
                    strokeOpacity={0.85}
                    strokeDasharray={`${dash} ${gap}`}
                    style={
                      reduced
                        ? { strokeDasharray: "none", strokeOpacity: 0.25 }
                        : {
                            animation: `ambient-trace ${p.dur}s linear ${p.delay}s infinite`,
                            animationDuration: `calc(${p.dur}s / var(--trace-speed, 1))`,
                          }
                    }
                  />
                </g>
              );
            })}
          </g>

          <g filter="url(#ambient-glow)">
            {scene.nodes.map((n, i) => (
              <circle
                key={`n${i}`}
                cx={n.x}
                cy={n.y}
                r={n.r}
                fill="url(#ambient-node)"
                style={
                  reduced
                    ? { opacity: 0.5 }
                    : {
                        animation: `ambient-pulse ${4 + (i % 5)}s ease-in-out ${n.delay}s infinite`,
                      }
                }
              />
            ))}
          </g>

          <rect width={VBW} height={VBH} fill="url(#ambient-vignette)" />
        </svg>
      </div>

      <div
        ref={scrollTraceRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 overflow-hidden opacity-45"
      >
        <svg
          ref={scrollSvgRef}
          className="absolute inset-0 h-full w-full"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="scroll-trace-gradient"
              x1="0"
              x2="1"
              y1="0"
              y2="1"
            >
              <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
              <stop offset="16%" stopColor="#10B981" stopOpacity="0.72" />
              <stop offset="58%" stopColor="#9D7CFF" stopOpacity="0.64" />
              <stop offset="100%" stopColor="#F4C95D" stopOpacity="0.22" />
            </linearGradient>
            <filter
              id="scroll-trace-glow"
              x="-12%"
              y="-12%"
              width="124%"
              height="124%"
            >
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            ref={scrollGlowRef}
            stroke="url(#scroll-trace-gradient)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="18"
            strokeOpacity="0.16"
            filter="url(#scroll-trace-glow)"
          />
          <path
            ref={scrollPathRef}
            stroke="url(#scroll-trace-gradient)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.2"
            strokeOpacity="0.86"
          />
        </svg>
      </div>

      <style>{`
        @keyframes ambient-trace {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: -1000; }
        }
        @keyframes ambient-pulse {
          0%, 100% { opacity: 0.25; transform: scale(0.9); transform-box: fill-box; transform-origin: center; }
          50%      { opacity: 0.9;  transform: scale(1.25); transform-box: fill-box; transform-origin: center; }
        }
      `}</style>
    </>
  );
}

export default AmbientBackground;
