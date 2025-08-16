import { useEffect, useRef } from "react";

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles: any[] = [];
  const PARTICLE_COUNT = Math.max(6, Math.floor((width * height) / 20000));

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }

    function randomColor() {
      // Only light blue/cyan shades
      const colors = [
        "#bae6fd", // sky-200
        "#e0f2fe", // sky-100
        "#a5f3fc", // cyan-200
        "#7dd3fc", // sky-300
        "#38bdf8", // sky-400
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    function createParticles() {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 18 + Math.random() * 18,
        dx: -0.3 + Math.random() * 0.6,
        dy: -0.3 + Math.random() * 0.6,
        color: randomColor(),
  alpha: 0.04 + Math.random() * 0.06,
        lineWidth: 2 + Math.random() * 2
      }));
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        ctx.globalAlpha = p.alpha;
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.lineWidth;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.rect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
        ctx.stroke();
        ctx.shadowBlur = 0;
        ctx.restore();
      }
      ctx.globalAlpha = 1;
    }

    function update() {
      for (const p of particles) {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;
      }
    }

    function animate() {
      draw();
      update();
      animationFrameId = requestAnimationFrame(animate);
    }

    resize();
    createParticles();
    animate();
    window.addEventListener("resize", () => {
      resize();
      createParticles();
    });
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
      tabIndex={-1}
      style={{ position: "fixed", inset: 0, zIndex: 0 }}
    />
  );
}
