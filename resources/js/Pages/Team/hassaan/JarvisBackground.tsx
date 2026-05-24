import { useEffect, useRef } from "react";

/**
 * Subtle JARVIS-style HUD background.
 *
 * Renders a faint arc-reactor-inspired circle with concentric
 * rotating rings, radial grid lines, and subtle data tick marks.
 * Reacts to scroll: parallax drift, scale pulse, and rotation boost.
 */

export function JarvisBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frame = useRef(0);
  const scroll = useRef({ y: 0, smoothY: 0, energy: 0, lastY: 0 });

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const delta = Math.abs(y - scroll.current.lastY);
      scroll.current.y = y;
      scroll.current.lastY = y;
      scroll.current.energy = Math.min(scroll.current.energy + delta * 0.004, 1);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const animate = (now: number) => {
      const t = now / 1000;
      const w = canvas.width;
      const h = canvas.height;

      scroll.current.smoothY += (scroll.current.y - scroll.current.smoothY) * 0.08;
      scroll.current.energy *= 0.92;

      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      const scrollProgress = scroll.current.smoothY / maxScroll;
      const energy = scroll.current.energy;

      const parallaxY = scroll.current.smoothY * 0.12;
      const cx = w / 2;
      const cy = h / 2 + parallaxY;
      const scale = 1 + scrollProgress * 0.12 + energy * 0.08;
      const maxR = Math.min(w, h) * 0.35 * scale;
      const spinBoost = 1 + energy * 4 + scrollProgress * 0.6;
      const intensity = 1 + energy * 1.8 + scrollProgress * 0.35;

      ctx.clearRect(0, 0, w, h);

      const color = "79, 195, 247";

      const spokeCount = 12;
      ctx.strokeStyle = `rgba(${color}, ${0.03 * intensity})`;
      ctx.lineWidth = 1;
      for (let i = 0; i < spokeCount; i++) {
        const angle = (i / spokeCount) * Math.PI * 2 + t * 0.02 * spinBoost;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(angle) * maxR, cy + Math.sin(angle) * maxR);
        ctx.stroke();
      }

      const rings = [
        { r: maxR * 0.25, dash: [4, 12], speed: 0.08, alpha: 0.05, width: 1 },
        { r: maxR * 0.4, dash: [2, 8], speed: -0.05, alpha: 0.04, width: 1 },
        { r: maxR * 0.55, dash: [8, 16], speed: 0.03, alpha: 0.035, width: 1 },
        { r: maxR * 0.7, dash: [], speed: -0.02, alpha: 0.025, width: 0.5 },
        { r: maxR * 0.85, dash: [3, 10], speed: 0.015, alpha: 0.02, width: 0.5 },
        { r: maxR, dash: [1, 6], speed: -0.01, alpha: 0.015, width: 0.5 },
      ];

      for (const ring of rings) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(t * ring.speed * spinBoost);
        ctx.strokeStyle = `rgba(${color}, ${ring.alpha * intensity})`;
        ctx.lineWidth = ring.width;
        ctx.setLineDash(ring.dash);
        ctx.beginPath();
        ctx.arc(0, 0, ring.r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      const tickRing = maxR * 0.55;
      const tickCount = 36;
      ctx.strokeStyle = `rgba(${color}, ${0.04 * intensity})`;
      ctx.lineWidth = 1;
      ctx.setLineDash([]);
      for (let i = 0; i < tickCount; i++) {
        const angle = (i / tickCount) * Math.PI * 2 + t * 0.03 * spinBoost;
        const inner = tickRing - (i % 3 === 0 ? 8 : 4);
        const outer = tickRing + (i % 3 === 0 ? 8 : 4);
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(angle) * inner, cy + Math.sin(angle) * inner);
        ctx.lineTo(cx + Math.cos(angle) * outer, cy + Math.sin(angle) * outer);
        ctx.stroke();
      }

      const coreRadius = maxR * (0.12 + energy * 0.04);
      const coreGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreRadius);
      coreGlow.addColorStop(0, `rgba(${color}, ${0.06 + energy * 0.08})`);
      coreGlow.addColorStop(0.5, `rgba(${color}, ${0.02 + energy * 0.03})`);
      coreGlow.addColorStop(1, `rgba(${color}, 0)`);
      ctx.fillStyle = coreGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, coreRadius, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = `rgba(${color}, ${0.08 + energy * 0.12})`;
      ctx.beginPath();
      ctx.arc(cx, cy, 2 + energy * 2, 0, Math.PI * 2);
      ctx.fill();

      const fadeRing = ctx.createRadialGradient(cx, cy, maxR * 0.8, cx, cy, maxR * 1.1);
      fadeRing.addColorStop(0, "rgba(0, 0, 0, 0)");
      fadeRing.addColorStop(1, "rgba(5, 5, 16, 0.6)");
      ctx.fillStyle = fadeRing;
      ctx.beginPath();
      ctx.arc(cx, cy, maxR * 1.1, 0, Math.PI * 2);
      ctx.fill();

      frame.current = requestAnimationFrame(animate);
    };

    frame.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[1]"
      aria-hidden="true"
    />
  );
}
