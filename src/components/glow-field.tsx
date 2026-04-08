"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  phase: number;
  speed: number;
}

export default function GlowField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let nodes: Node[] = [];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    const init = () => {
      resize();
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      nodes = Array.from({ length: 5 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h * 0.7,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.1,
        radius: 80 + Math.random() * 120,
        opacity: 0.012 + Math.random() * 0.018,
        phase: Math.random() * Math.PI * 2,
        speed: 0.003 + Math.random() * 0.004,
      }));
    };

    const draw = (time: number) => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        // Soft bounce
        if (node.x < -node.radius) node.x = w + node.radius;
        if (node.x > w + node.radius) node.x = -node.radius;
        if (node.y < -node.radius) node.y = h * 0.7 + node.radius;
        if (node.y > h * 0.7 + node.radius) node.y = -node.radius;

        const pulse = Math.sin(time * node.speed + node.phase) * 0.5 + 0.5;
        const alpha = node.opacity * (0.6 + pulse * 0.4);

        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius
        );
        gradient.addColorStop(0, `rgba(46, 139, 87, ${alpha})`);
        gradient.addColorStop(0.4, `rgba(46, 139, 87, ${alpha * 0.4})`);
        gradient.addColorStop(1, `rgba(46, 139, 87, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(
          node.x - node.radius,
          node.y - node.radius,
          node.radius * 2,
          node.radius * 2
        );
      }

      // Draw faint connection lines between close nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 300;

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.025;
            ctx.strokeStyle = `rgba(46, 139, 87, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    init();
    animationId = requestAnimationFrame(draw);

    window.addEventListener("resize", () => {
      resize();
    });

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full pointer-events-none"
      style={{ height: "600px", opacity: 1 }}
    />
  );
}
