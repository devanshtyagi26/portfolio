"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import image from "../../public/profile.jpg";

export function NeuralVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    setMounted(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 460,
      H = 460;
    const cx = W / 2,
      cy = H / 2;

    const img = new Image();
    img.src = image.src;

    // Orbital rings config
    const RINGS = [
      { radius: 162, count: 6, speed: 0.004, size: 2.8, opacity: 0.9, dir: 1 },
      {
        radius: 185,
        count: 9,
        speed: 0.0028,
        size: 2.0,
        opacity: 0.6,
        dir: -1,
      },
      {
        radius: 208,
        count: 12,
        speed: 0.0018,
        size: 1.4,
        opacity: 0.4,
        dir: 1,
      },
    ];

    // Init dot angles evenly spaced per ring
    const ringDots = RINGS.map((r) =>
      Array.from({ length: r.count }, (_, i) => (i / r.count) * Math.PI * 2),
    );

    // Scattered ambient particles (random drift)
    const ambient = Array.from({ length: 35 }, () => ({
      x: cx + (Math.random() - 0.5) * 340,
      y: cy + (Math.random() - 0.5) * 340,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: 0.8 + Math.random() * 1.4,
      opacity: 0.15 + Math.random() * 0.3,
    }));

    // Connector lines between nearby ring dots (computed once, updated live)
    let pulseT = 0;

    function draw() {
      ctx!.clearRect(0, 0, W, H);

      // --- Pulse rings ---
      pulseT += 0.01;
      for (let p = 0; p < 2; p++) {
        const t = (pulseT + p * 0.5) % 1;
        const pr = 142 + t * 75;
        const pa = (1 - t) * (p === 0 ? 0.3 : 0.18);
        ctx!.beginPath();
        ctx!.arc(cx, cy, pr, 0, Math.PI * 2);
        ctx!.strokeStyle = `oklch(0.68 0.13 175 / ${pa})`;
        ctx!.lineWidth = 1.5;
        ctx!.stroke();
      }

      // --- Connector lines between ring dots across rings ---
      // Connect each dot in ring 0 to nearest dot in ring 1
      for (let i = 0; i < RINGS[0].count; i++) {
        const ax = cx + Math.cos(ringDots[0][i]) * RINGS[0].radius;
        const ay = cy + Math.sin(ringDots[0][i]) * RINGS[0].radius;
        // find closest in ring 1
        let minDist = Infinity,
          closest = 0;
        for (let j = 0; j < RINGS[1].count; j++) {
          const bx = cx + Math.cos(ringDots[1][j]) * RINGS[1].radius;
          const by = cy + Math.sin(ringDots[1][j]) * RINGS[1].radius;
          const d = Math.hypot(ax - bx, ay - by);
          if (d < minDist) {
            minDist = d;
            closest = j;
          }
        }
        const bx = cx + Math.cos(ringDots[1][closest]) * RINGS[1].radius;
        const by = cy + Math.sin(ringDots[1][closest]) * RINGS[1].radius;
        if (minDist < 80) {
          ctx!.beginPath();
          ctx!.moveTo(ax, ay);
          ctx!.lineTo(bx, by);
          ctx!.strokeStyle = `oklch(0.68 0.13 175 / ${0.12 * (1 - minDist / 80)})`;
          ctx!.lineWidth = 0.7;
          ctx!.stroke();
        }
      }

      // --- Ambient particles ---
      ambient.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        // Wrap inside a soft area
        const dist = Math.hypot(p.x - cx, p.y - cy);
        if (dist > 215) {
          p.vx *= -1;
          p.vy *= -1;
        }
        // Stay outside photo
        if (dist < 148) {
          const angle = Math.atan2(p.y - cy, p.x - cx);
          p.x = cx + Math.cos(angle) * 150;
          p.y = cy + Math.sin(angle) * 150;
          p.vx *= -0.5;
          p.vy *= -0.5;
        }
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = `oklch(0.68 0.13 175 / ${p.opacity})`;
        ctx!.fill();
      });

      // --- Orbital rings & dots ---
      RINGS.forEach((ring, ri) => {
        // Orbit track
        ctx!.beginPath();
        ctx!.arc(cx, cy, ring.radius, 0, Math.PI * 2);
        ctx!.strokeStyle = `oklch(0.68 0.13 175 / 0.07)`;
        ctx!.lineWidth = 0.6;
        ctx!.stroke();

        ringDots[ri].forEach((angle, di) => {
          ringDots[ri][di] += ring.speed * ring.dir;
          const x = cx + Math.cos(angle) * ring.radius;
          const y = cy + Math.sin(angle) * ring.radius;

          // Glow halo
          ctx!.beginPath();
          ctx!.arc(x, y, ring.size * 2.2, 0, Math.PI * 2);
          ctx!.fillStyle = `oklch(0.68 0.13 175 / 0.12)`;
          ctx!.fill();

          // Core dot
          ctx!.beginPath();
          ctx!.arc(x, y, ring.size, 0, Math.PI * 2);
          ctx!.fillStyle = `oklch(0.68 0.13 175 / ${ring.opacity})`;
          ctx!.fill();
        });
      });

      // --- Photo ---
      ctx!.save();
      ctx!.beginPath();
      ctx!.arc(cx, cy, 138, 0, Math.PI * 2);
      ctx!.clip();
      if (img.complete && img.naturalWidth > 0) {
        ctx!.drawImage(img, cx - 138, cy - 138, 276, 276);
      } else {
        ctx!.fillStyle = "oklch(0.14 0 0)";
        ctx!.fill();
      }
      ctx!.restore();

      // Accent border
      ctx!.beginPath();
      ctx!.arc(cx, cy, 139, 0, Math.PI * 2);
      ctx!.strokeStyle = "oklch(0.68 0.13 175 / 0.85)";
      ctx!.lineWidth = 2.5;
      ctx!.stroke();

      // Soft inner glow ring
      ctx!.beginPath();
      ctx!.arc(cx, cy, 141, 0, Math.PI * 2);
      ctx!.strokeStyle = "oklch(0.68 0.13 175 / 0.25)";
      ctx!.lineWidth = 7;
      ctx!.stroke();

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="relative aspect-square w-full max-w-[460px] select-none">
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, oklch(0.68 0.13 175 / 0.3), transparent 65%)",
        }}
      />
      <canvas
        ref={canvasRef}
        width={460}
        height={460}
        className="h-full w-full"
        style={{ opacity: mounted ? 1 : 0, transition: "opacity 1s ease" }}
      />
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
