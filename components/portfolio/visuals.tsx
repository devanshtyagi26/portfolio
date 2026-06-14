"use client";
import { useEffect, useRef, useState } from "react";

export function NeuralVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 460;
    const H = 460;
    const accent = "oklch(0.68 0.13 175)";
    const violet = "oklch(0.72 0.17 296)";
    const amber = "oklch(0.78 0.14 74)";
    const ink = "oklch(0.985 0 0)";
    const layers = [
      { x: 72, ys: [118, 182, 246, 310] },
      { x: 158, ys: [92, 146, 205, 264, 324, 374] },
      { x: 242, ys: [112, 176, 230, 286, 348] },
      { x: 326, ys: [134, 204, 272, 338] },
      { x: 394, ys: [184, 252, 320] },
    ];
    const nodes = layers.flatMap((layer, layerIndex) =>
      layer.ys.map((y, nodeIndex) => ({
        x: layer.x,
        y,
        phase: layerIndex * 0.73 + nodeIndex * 0.47,
      })),
    );
    const flows = Array.from({ length: 26 }, (_, i) => ({
      layer: i % (layers.length - 1),
      from: i * 2 + 1,
      to: i * 3 + 2,
      speed: 0.0025 + (i % 5) * 0.00045,
      offset: i / 26,
      color: i % 7 === 0 ? amber : i % 3 === 0 ? violet : accent,
    }));
    const cells = Array.from({ length: 42 }, (_, i) => ({
      x: 278 + (i % 7) * 18,
      y: 50 + Math.floor(i / 7) * 18,
      value: ((i * 37) % 100) / 100,
      phase: i * 0.29,
    }));

    let frame = 0;

    function roundedRect(
      ctx: CanvasRenderingContext2D | null,
      x: number,
      y: number,
      width: number,
      height: number,
      radius: number,
    ) {
      if (!ctx) return;
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.arcTo(x + width, y, x + width, y + height, radius);
      ctx.arcTo(x + width, y + height, x, y + height, radius);
      ctx.arcTo(x, y + height, x, y, radius);
      ctx.arcTo(x, y, x + width, y, radius);
      ctx.closePath();
    }

    function pointOnQuadratic(
      t: number,
      a: { x: number; y: number },
      c: { x: number; y: number },
      b: { x: number; y: number },
    ) {
      const mt = 1 - t;
      return {
        x: mt * mt * a.x + 2 * mt * t * c.x + t * t * b.x,
        y: mt * mt * a.y + 2 * mt * t * c.y + t * t * b.y,
      };
    }

    function withAlpha(color: string, alpha: number) {
      return color.replace(")", ` / ${alpha})`);
    }

    function draw() {
      frame += 1;
      const t = frame * 0.012;
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);

      // const bg = ctx.createLinearGradient(32, 16, 420, 446);
      // bg.addColorStop(0, "oklch(0.24 0.025 232 / 0.86)");
      // bg.addColorStop(0.42, "oklch(0.16 0.015 250 / 0.96)");
      // bg.addColorStop(1, "oklch(0.105 0.018 180 / 1)");
      // roundedRect(18, 18, 424, 424, 32);
      // ctx.fillStyle = bg;
      // ctx.fill();

      const glow = ctx.createRadialGradient(236, 214, 20, 236, 214, 210);
      glow.addColorStop(0, "oklch(0.68 0.13 175 / 0.22)");
      glow.addColorStop(0.5, "oklch(0.72 0.17 296 / 0.08)");
      glow.addColorStop(1, "oklch(0.68 0.13 175 / 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(18, 18, 424, 424);

      ctx.save();
      roundedRect(ctx, 18, 18, 424, 424, 32);
      ctx.clip();

      ctx.lineWidth = 1;
      for (let x = 42; x < 430; x += 28) {
        const alpha = x % 56 === 0 ? 0.06 : 0.035;
        ctx.beginPath();
        ctx.moveTo(x, 28);
        ctx.lineTo(x, 432);
        ctx.strokeStyle = `oklch(0.985 0 0 / ${alpha})`;
        ctx.stroke();
      }
      for (let y = 42; y < 430; y += 28) {
        const alpha = y % 56 === 0 ? 0.06 : 0.035;
        ctx.beginPath();
        ctx.moveTo(28, y);
        ctx.lineTo(432, y);
        ctx.strokeStyle = `oklch(0.985 0 0 / ${alpha})`;
        ctx.stroke();
      }

      ctx.setLineDash([5, 9]);
      for (let i = 0; i < 5; i++) {
        const y = 358 + i * 12 + Math.sin(t + i) * 3;
        ctx.beginPath();
        ctx.moveTo(32, y);
        for (let x = 32; x <= 430; x += 14) {
          ctx.lineTo(x, y + Math.sin(x * 0.035 + t * 2 + i) * 6);
        }
        ctx.strokeStyle = `oklch(0.68 0.13 175 / ${0.055 + i * 0.012})`;
        ctx.stroke();
      }
      // ctx.setLineDash([]);

      ctx.strokeStyle = "oklch(0.985 0 0 / 0.07)";
      ctx.lineWidth = 1;
      layers.forEach((layer) => {
        ctx.beginPath();
        ctx.moveTo(layer.x, 72);
        ctx.lineTo(layer.x, 392);
        ctx.stroke();
      });

      for (let li = 0; li < layers.length - 1; li++) {
        const aLayer = layers[li];
        const bLayer = layers[li + 1];
        aLayer.ys.forEach((ay, ai) => {
          bLayer.ys.forEach((by, bi) => {
            const weight = Math.sin(ai * 1.7 + bi * 1.2 + li * 0.8);
            const active = Math.sin(t * 1.6 + ai * 0.6 + bi * 0.35 + li) > 0.62;
            const alpha = active ? 0.28 : 0.055 + Math.abs(weight) * 0.04;
            const control = {
              x: (aLayer.x + bLayer.x) / 2,
              y: (ay + by) / 2 + weight * 18,
            };

            ctx.beginPath();
            ctx.moveTo(aLayer.x, ay);
            ctx.quadraticCurveTo(control.x, control.y, bLayer.x, by);
            ctx.strokeStyle = active
              ? `oklch(0.68 0.13 175 / ${alpha})`
              : `oklch(0.985 0 0 / ${alpha})`;
            ctx.lineWidth = active ? 1.1 : 0.65;
            ctx.stroke();
          });
        });
      }

      flows.forEach((flow) => {
        const aLayer = layers[flow.layer];
        const bLayer = layers[flow.layer + 1];
        const ay = aLayer.ys[flow.from % aLayer.ys.length];
        const by = bLayer.ys[flow.to % bLayer.ys.length];
        const bend = Math.sin(flow.from * 0.8 + flow.to * 0.6) * 20;
        const progress = (flow.offset + frame * flow.speed) % 1;
        const point = pointOnQuadratic(
          progress,
          { x: aLayer.x, y: ay },
          { x: (aLayer.x + bLayer.x) / 2, y: (ay + by) / 2 + bend },
          { x: bLayer.x, y: by },
        );

        ctx.beginPath();
        ctx.arc(point.x, point.y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = withAlpha(flow.color, 0.9);
        ctx.shadowColor = withAlpha(flow.color, 0.55);
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      nodes.forEach((node) => {
        const pulse = (Math.sin(t * 2 + node.phase) + 1) / 2;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 7 + pulse * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `oklch(0.68 0.13 175 / ${0.08 + pulse * 0.07})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, 3.2 + pulse * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = `oklch(0.985 0 0 / ${0.76 + pulse * 0.2})`;
        ctx.fill();
      });

      // roundedRect(191, 169, 92, 92, 18);
      // ctx.fillStyle = "oklch(0.12 0.018 210 / 0.82)";
      // ctx.fill();
      // ctx.strokeStyle = "oklch(0.68 0.13 175 / 0.55)";
      // ctx.lineWidth = 1.4;
      // ctx.stroke();

      ctx.save();
      ctx.translate(237, 215);
      for (let i = 0; i < 3; i++) {
        ctx.rotate(t * 0.16 + i * 0.7);
        ctx.beginPath();
        ctx.ellipse(0, 0, 42, 16 + i * 4, 0, 0.25, Math.PI * 1.45);
        ctx.strokeStyle =
          i === 1
            ? "oklch(0.72 0.17 296 / 0.42)"
            : "oklch(0.68 0.13 175 / 0.38)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      ctx.restore();

      // ctx.font = "600 20px JetBrains Mono, monospace";
      // ctx.textAlign = "center";
      // ctx.textBaseline = "middle";
      // ctx.fillStyle = ink;
      // ctx.fillText("AI", 237, 205);
      // ctx.font = "10px JetBrains Mono, monospace";
      // ctx.fillStyle = "oklch(0.985 0 0 / 0.52)";
      // ctx.fillText("latent", 237, 229);

      // roundedRect(48, 48, 128, 62, 14);
      // ctx.fillStyle = "oklch(0.12 0.012 230 / 0.74)";
      // ctx.fill();
      // ctx.strokeStyle = "oklch(0.985 0 0 / 0.09)";
      // ctx.stroke();
      // ctx.font = "10px JetBrains Mono, monospace";
      // ctx.textAlign = "left";
      // ctx.fillStyle = "oklch(0.985 0 0 / 0.5)";
      // ctx.fillText("loss", 62, 68);
      // ctx.fillStyle = accent;
      // ctx.fillText("0.028", 112, 68);
      // ctx.beginPath();
      // ctx.moveTo(62, 94);
      // for (let i = 0; i < 80; i += 5) {
      //   const x = 62 + i;
      //   const y = 94 - Math.log(i + 4) * 7 + Math.sin(i * 0.24 + t * 3) * 2.5;
      //   ctx.lineTo(x, y);
      // }
      // ctx.strokeStyle = "oklch(0.78 0.14 74 / 0.85)";
      // ctx.lineWidth = 1.5;
      // ctx.stroke();

      // roundedRect(274, 42, 138, 132, 18);
      // ctx.fillStyle = "oklch(0.12 0.012 230 / 0.68)";
      // ctx.fill();
      // ctx.strokeStyle = "oklch(0.985 0 0 / 0.08)";
      // ctx.stroke();
      // cells.forEach((cell) => {
      //   const intensity = Math.max(
      //     0.08,
      //     cell.value * 0.55 + Math.sin(t * 2 + cell.phase) * 0.12,
      //   );
      //   roundedRect(cell.x, cell.y, 12, 12, 3);
      //   ctx.fillStyle = `oklch(0.68 0.13 175 / ${intensity})`;
      //   ctx.fill();
      // });

      // roundedRect(292, 326, 112, 62, 14);
      // ctx.fillStyle = "oklch(0.12 0.012 230 / 0.7)";
      // ctx.fill();
      // ctx.strokeStyle = "oklch(0.985 0 0 / 0.08)";
      // ctx.stroke();
      // ctx.textAlign = "left";
      // ctx.font = "10px JetBrains Mono, monospace";
      // ["vision", "nlp", "agents"].forEach((label, i) => {
      //   const y = 345 + i * 15;
      //   const width = 34 + Math.sin(t * 2 + i) * 8 + i * 10;
      //   ctx.fillStyle = "oklch(0.985 0 0 / 0.48)";
      //   ctx.fillText(label, 306, y);
      //   roundedRect(354, y - 7, 36, 5, 2.5);
      //   ctx.fillStyle = "oklch(0.985 0 0 / 0.08)";
      //   ctx.fill();
      //   roundedRect(354, y - 7, width, 5, 2.5);
      //   ctx.fillStyle =
      //     i === 1
      //       ? "oklch(0.72 0.17 296 / 0.76)"
      //       : "oklch(0.68 0.13 175 / 0.76)";
      //   ctx.fill();
      // });

      // ctx.restore();

      // roundedRect(18, 18, 424, 424, 32);
      // ctx.strokeStyle = "oklch(0.985 0 0 / 0.1)";
      // ctx.lineWidth = 1;
      // ctx.stroke();

      // roundedRect(22, 22, 416, 416, 28);
      // ctx.strokeStyle = "oklch(0.68 0.13 175 / 0.18)";
      // ctx.lineWidth = 1;
      // ctx.stroke();

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="relative aspect-square w-full max-w-[460px] select-none">
      <div
        className="pointer-events-none absolute inset-4 -z-10 rounded-[2rem] opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 55% 45%, oklch(0.68 0.13 175 / 0.28), transparent 58%), radial-gradient(circle at 25% 20%, oklch(0.72 0.17 296 / 0.14), transparent 52%)",
        }}
      />
      <canvas
        ref={canvasRef}
        width={460}
        height={460}
        className="h-full w-full animate-fade-in"
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
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
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
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(14px)",
        transition: `opacity 0.8s cubic-bezier(0.2,0.7,0.2,1) ${delay}s, transform 0.8s cubic-bezier(0.2,0.7,0.2,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
