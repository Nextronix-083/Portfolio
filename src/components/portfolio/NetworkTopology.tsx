import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hub: boolean;
};

/**
 * Interactive network topology canvas: floating nodes linked by proximity,
 * with links lighting up and nodes drifting toward the pointer.
 */
export function NetworkTopology() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let frame = 0;
    const pointer = { x: -9999, y: -9999, active: false };

    const styles = getComputedStyle(document.documentElement);
    const primary = styles.getPropertyValue("--primary").trim() || "oklch(0.79 0.15 195)";
    const accent = styles.getPropertyValue("--accent").trim() || "oklch(0.7 0.16 240)";

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = Math.round((width * height) / 16000);
      const count = Math.max(26, Math.min(76, density));
      nodes = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.6 + 1.2,
        hub: i % 9 === 0,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const linkDistance = Math.min(170, Math.max(110, width / 9));

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]!;
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]!;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist > linkDistance) continue;
          const strength = 1 - dist / linkDistance;
          const mx = (a.x + b.x) / 2;
          const my = (a.y + b.y) / 2;
          const near = pointer.active ? Math.hypot(pointer.x - mx, pointer.y - my) : 9999;
          const boost = near < 150 ? (1 - near / 150) * 0.55 : 0;
          ctx.strokeStyle = boost > 0.02 ? accent : primary;
          ctx.globalAlpha = strength * 0.2 + boost;
          ctx.lineWidth = boost > 0.2 ? 1.1 : 0.6;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      for (const n of nodes) {
        const near = pointer.active ? Math.hypot(pointer.x - n.x, pointer.y - n.y) : 9999;
        const pulse = n.hub ? 0.55 + Math.sin(frame / 34 + n.x) * 0.2 : 0.45;
        const lit = near < 130 ? 1 : pulse;
        ctx.globalAlpha = Math.min(1, lit);
        ctx.fillStyle = n.hub ? accent : primary;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.hub ? n.r * 1.9 : n.r, 0, Math.PI * 2);
        ctx.fill();

        if (n.hub) {
          ctx.globalAlpha = 0.16;
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r * 6 + Math.sin(frame / 30) * 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
    };

    const step = () => {
      frame += 1;
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        if (pointer.active) {
          const dx = pointer.x - n.x;
          const dy = pointer.y - n.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 180 && dist > 1) {
            n.x += (dx / dist) * 0.28;
            n.y += (dy / dist) * 0.28;
          }
        }
      }
      draw();
      raf = requestAnimationFrame(step);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };
    const onLeave = () => {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    };

    build();
    let raf = 0;
    if (reduceMotion) {
      draw();
    } else {
      raf = requestAnimationFrame(step);
    }

    const onResize = () => {
      build();
      if (reduceMotion) draw();
    };

    window.addEventListener("resize", onResize);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full touch-none"
    />
  );
}
