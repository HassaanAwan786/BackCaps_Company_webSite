import { useEffect, useRef } from "react";

/**
 * Elegant smoke/mist cursor follower.
 *
 * Spawns small, soft particles at the cursor position that drift
 * upward with subtle horizontal sway and fade out gracefully.
 * Hidden on touch/mobile devices.
 */

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  opacity: number;
}

const MAX_PARTICLES = 60;
const SPAWN_RATE = 2; // particles per frame

export function SmokeCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: -200, y: -200 });
  const frame = useRef(0);
  const lastMouse = useRef({ x: -200, y: -200 });

  useEffect(() => {
    // Don't render on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouse);

    const spawnParticle = () => {
      const mx = mouse.current.x;
      const my = mouse.current.y;

      // Only spawn if mouse is on screen
      if (mx < 0 || my < 0) return;

      // Calculate mouse speed for velocity influence
      const dx = mx - lastMouse.current.x;
      const dy = my - lastMouse.current.y;

      particles.current.push({
        x: mx + (Math.random() - 0.5) * 8,
        y: my + (Math.random() - 0.5) * 8,
        vx: dx * 0.05 + (Math.random() - 0.5) * 0.6,
        vy: -0.4 - Math.random() * 0.8, // drift upward
        life: 0,
        maxLife: 50 + Math.random() * 40, // ~50-90 frames (~0.8-1.5s)
        size: 3 + Math.random() * 6,
        opacity: 0.15 + Math.random() * 0.15,
      });

      // Cap particles
      if (particles.current.length > MAX_PARTICLES) {
        particles.current.shift();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spawn new particles
      for (let i = 0; i < SPAWN_RATE; i++) {
        spawnParticle();
      }

      // Update and draw particles
      for (let i = particles.current.length - 1; i >= 0; i--) {
        const p = particles.current[i];
        p.life++;

        // Remove dead particles
        if (p.life >= p.maxLife) {
          particles.current.splice(i, 1);
          continue;
        }

        const progress = p.life / p.maxLife;

        // Movement: drift up + sine wave sway
        p.x += p.vx + Math.sin(p.life * 0.06) * 0.3;
        p.y += p.vy;
        p.vx *= 0.98; // dampen horizontal
        p.vy *= 0.995;

        // Grow then shrink
        const sizeProgress = progress < 0.3
          ? progress / 0.3 // grow
          : 1 - (progress - 0.3) / 0.7; // shrink
        const currentSize = p.size * (0.5 + sizeProgress * 0.8);

        // Fade in then out
        const fadeProgress = progress < 0.15
          ? progress / 0.15
          : 1 - (progress - 0.15) / 0.85;
        const alpha = p.opacity * fadeProgress * fadeProgress;

        // Draw smoke particle — soft radial gradient
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, currentSize);
        grad.addColorStop(0, `rgba(180, 210, 225, ${alpha})`);
        grad.addColorStop(0.5, `rgba(160, 195, 210, ${alpha * 0.4})`);
        grad.addColorStop(1, `rgba(140, 175, 195, 0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        ctx.fill();
      }

      // Track last mouse position for velocity calc
      lastMouse.current = { ...mouse.current };

      frame.current = requestAnimationFrame(animate);
    };

    frame.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[99] hidden md:block"
      style={{ opacity: 0.85 }}
    />
  );
}
