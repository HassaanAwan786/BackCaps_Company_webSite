import { useEffect, useRef } from "react";

/**
 * "Always-on-Edge" neon border lighting effect.
 *
 * Renders a bright, animated glow that traces the screen perimeter —
 * inspired by phone "edge lighting" / notch glow aesthetics.
 *
 * Features:
 *  – Persistent ambient neon edge border (always visible)
 *  – Bright animated light orb that orbits the screen perimeter
 *  – Multi-color cycling through the brand palette
 *  – Intense corner glow concentrations
 *  – Wider diffused glow halo for depth
 */

const COLORS: [number, number, number][] = [
  [0, 212, 255],   // cyan
  [100, 160, 255], // light blue
  [139, 92, 246],  // purple
  [200, 80, 200],  // magenta
  [244, 63, 94],   // rose
  [255, 159, 67],  // orange
  [46, 204, 113],  // green
  [0, 212, 255],   // back to cyan (loop)
];

const LOOP_DURATION = 14;      // seconds per full perimeter orbit
const GLOW_LENGTH = 0.18;      // fraction of perimeter the trail covers
const CORE_SIZE = 6;           // bright core radius
const HALO_SIZE = 60;          // soft outer halo radius
const AMBIENT_EDGE_WIDTH = 2;  // persistent border thickness
const AMBIENT_ALPHA = 0.15;    // persistent border brightness
const CORNER_RADIUS = 140;     // corner glow radius
const CORNER_ALPHA = 0.12;     // corner glow intensity
const TRAIL_STEPS = 80;        // smoothness of the trail

export function EdgeGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frame = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let dpr = window.devicePixelRatio || 1;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    /** Interpolate between palette colors based on progress t ∈ [0,1] */
    const getColor = (t: number): [number, number, number] => {
      const total = COLORS.length - 1;
      const scaled = (t % 1) * total;
      const idx = Math.floor(scaled);
      const frac = scaled - idx;
      const a = COLORS[Math.min(idx, total)];
      const b = COLORS[Math.min(idx + 1, total)];
      return [
        Math.round(a[0] + (b[0] - a[0]) * frac),
        Math.round(a[1] + (b[1] - a[1]) * frac),
        Math.round(a[2] + (b[2] - a[2]) * frac),
      ];
    };

    /** Convert a perimeter fraction p ∈ [0,1] to (x, y) coordinates */
    const perimXY = (p: number, w: number, h: number): [number, number] => {
      const perim = 2 * (w + h);
      const d = ((p % 1) + 1) % 1 * perim;
      if (d <= w) return [d, 0];
      if (d <= w + h) return [w, d - w];
      if (d <= 2 * w + h) return [w - (d - w - h), h];
      return [0, h - (d - 2 * w - h)];
    };

    const animate = (now: number) => {
      const totalCycleDuration = LOOP_DURATION * (COLORS.length - 1);
      const t = (now / 1000) % totalCycleDuration;
      const loopP = (t / LOOP_DURATION) % 1;            // position on perimeter [0,1]
      const colorP = t / totalCycleDuration;             // color cycle progress [0,1]
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);

      // ─── 1. Persistent ambient edge borders ────────────────────────
      const [ambR, ambG, ambB] = getColor(colorP);

      // Draw glowing edge lines on all 4 sides
      // Top
      const topGrad = ctx.createLinearGradient(0, 0, 0, AMBIENT_EDGE_WIDTH * 8);
      topGrad.addColorStop(0, `rgba(${ambR}, ${ambG}, ${ambB}, ${AMBIENT_ALPHA})`);
      topGrad.addColorStop(1, `rgba(${ambR}, ${ambG}, ${ambB}, 0)`);
      ctx.fillStyle = topGrad;
      ctx.fillRect(0, 0, w, AMBIENT_EDGE_WIDTH * 8);

      // Bottom
      const botGrad = ctx.createLinearGradient(0, h, 0, h - AMBIENT_EDGE_WIDTH * 8);
      botGrad.addColorStop(0, `rgba(${ambR}, ${ambG}, ${ambB}, ${AMBIENT_ALPHA})`);
      botGrad.addColorStop(1, `rgba(${ambR}, ${ambG}, ${ambB}, 0)`);
      ctx.fillStyle = botGrad;
      ctx.fillRect(0, h - AMBIENT_EDGE_WIDTH * 8, w, AMBIENT_EDGE_WIDTH * 8);

      // Left
      const leftGrad = ctx.createLinearGradient(0, 0, AMBIENT_EDGE_WIDTH * 8, 0);
      leftGrad.addColorStop(0, `rgba(${ambR}, ${ambG}, ${ambB}, ${AMBIENT_ALPHA})`);
      leftGrad.addColorStop(1, `rgba(${ambR}, ${ambG}, ${ambB}, 0)`);
      ctx.fillStyle = leftGrad;
      ctx.fillRect(0, 0, AMBIENT_EDGE_WIDTH * 8, h);

      // Right
      const rightGrad = ctx.createLinearGradient(w, 0, w - AMBIENT_EDGE_WIDTH * 8, 0);
      rightGrad.addColorStop(0, `rgba(${ambR}, ${ambG}, ${ambB}, ${AMBIENT_ALPHA})`);
      rightGrad.addColorStop(1, `rgba(${ambR}, ${ambG}, ${ambB}, 0)`);
      ctx.fillStyle = rightGrad;
      ctx.fillRect(w - AMBIENT_EDGE_WIDTH * 8, 0, AMBIENT_EDGE_WIDTH * 8, h);

      // Bright 1px edge line
      ctx.fillStyle = `rgba(${ambR}, ${ambG}, ${ambB}, ${AMBIENT_ALPHA * 1.8})`;
      ctx.fillRect(0, 0, w, 1);       // top
      ctx.fillRect(0, h - 1, w, 1);   // bottom
      ctx.fillRect(0, 0, 1, h);       // left
      ctx.fillRect(w - 1, 0, 1, h);   // right

      // ─── 2. Bright corner concentrations ───────────────────────────
      const corners: [number, number][] = [[0, 0], [w, 0], [w, h], [0, h]];
      for (const [cx, cy] of corners) {
        const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, CORNER_RADIUS);
        cg.addColorStop(0, `rgba(${ambR}, ${ambG}, ${ambB}, ${CORNER_ALPHA})`);
        cg.addColorStop(0.3, `rgba(${ambR}, ${ambG}, ${ambB}, ${CORNER_ALPHA * 0.5})`);
        cg.addColorStop(1, `rgba(${ambR}, ${ambG}, ${ambB}, 0)`);
        ctx.fillStyle = cg;
        ctx.beginPath();
        ctx.arc(cx, cy, CORNER_RADIUS, 0, Math.PI * 2);
        ctx.fill();
      }

      // ─── 3. Animated orbiting light trail (uniform size) ─────────────
      for (let i = 0; i < TRAIL_STEPS; i++) {
        const frac = i / TRAIL_STEPS;
        const p = ((loopP - frac * GLOW_LENGTH) % 1 + 1) % 1;
        const [x, y] = perimXY(p, w, h);
        // Gentle linear opacity fade — size stays constant
        const alpha = 1 - frac * 0.85;

        const [r, g, b] = getColor(colorP + frac * 0.05);

        // Wide diffused halo — constant radius
        const halo = ctx.createRadialGradient(x, y, 0, x, y, HALO_SIZE);
        halo.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha * 0.2})`);
        halo.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, ${alpha * 0.07})`);
        halo.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(x, y, HALO_SIZE, 0, Math.PI * 2);
        ctx.fill();

        // Medium glow ring — constant radius
        const midR = CORE_SIZE * 3.5;
        const mid = ctx.createRadialGradient(x, y, 0, x, y, midR);
        mid.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha * 0.45})`);
        mid.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        ctx.fillStyle = mid;
        ctx.beginPath();
        ctx.arc(x, y, midR, 0, Math.PI * 2);
        ctx.fill();

        // Tight bright core — constant radius
        const core = ctx.createRadialGradient(x, y, 0, x, y, CORE_SIZE);
        core.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.7})`);
        core.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, ${alpha * 0.6})`);
        core.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        ctx.fillStyle = core;
        ctx.beginPath();
        ctx.arc(x, y, CORE_SIZE, 0, Math.PI * 2);
        ctx.fill();
      }

      // (No oversized head orb — trail is uniform)

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
      className="pointer-events-none fixed inset-0 z-[101]"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}
