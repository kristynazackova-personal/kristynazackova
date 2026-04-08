"use client";

import { useEffect, useRef, useState } from "react";

export default function FloatingObject() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Subtle parallax on mouse move (max ~2-3% movement)
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setOffset({
        x: (e.clientX - cx) * 0.02,
        y: (e.clientY - cy) * 0.02,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const size = 320;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    // Icosahedron-like wireframe vertices
    const phi = (1 + Math.sqrt(5)) / 2;
    const rawVerts = [
      [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
      [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
      [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1],
    ];
    const edges = [
      [0,1],[0,5],[0,7],[0,10],[0,11],
      [1,5],[1,7],[1,8],[1,9],
      [2,3],[2,4],[2,6],[2,10],[2,11],
      [3,4],[3,6],[3,8],[3,9],
      [4,5],[4,9],[4,11],
      [5,9],[5,11],
      [6,7],[6,8],[6,10],
      [7,8],[7,10],
      [8,9],[10,11],
    ];

    const scale = 55;
    const verts = rawVerts.map(([x, y, z]) => [x * scale, y * scale, z * scale]);

    const rotateY = (x: number, z: number, a: number) => ({
      x: x * Math.cos(a) - z * Math.sin(a),
      z: x * Math.sin(a) + z * Math.cos(a),
    });
    const rotateX = (y: number, z: number, a: number) => ({
      y: y * Math.cos(a) - z * Math.sin(a),
      z: y * Math.sin(a) + z * Math.cos(a),
    });

    let rotY = 0;
    let rotX = 0.3;

    const draw = () => {
      ctx.clearRect(0, 0, size, size);
      const cx = size / 2;
      const cy = size / 2;

      rotY += 0.002;
      rotX += 0.0008;

      const projected = verts.map(([vx, vy, vz]) => {
        const ry = rotateY(vx, vz, rotY);
        const rx = rotateX(vy, ry.z, rotX);
        const perspective = 400;
        const s = perspective / (perspective + rx.z);
        return { x: cx + ry.x * s, y: cy + rx.y * s, z: rx.z, s };
      });

      // Draw edges
      for (const [a, b] of edges) {
        const pa = projected[a];
        const pb = projected[b];
        const avgZ = (pa.z + pb.z) / 2;
        const depthAlpha = 0.08 + (1 - (avgZ + 120) / 240) * 0.17;

        ctx.strokeStyle = `rgba(128, 0, 32, ${Math.max(0.04, Math.min(depthAlpha, 0.25))})`;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(pa.x, pa.y);
        ctx.lineTo(pb.x, pb.y);
        ctx.stroke();
      }

      // Draw vertices as small dots
      for (const p of projected) {
        const depthAlpha = 0.1 + (1 - (p.z + 120) / 240) * 0.2;
        const r = 1.2 * p.s;

        // Glow
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 6);
        grad.addColorStop(0, `rgba(128, 0, 32, ${depthAlpha * 0.3})`);
        grad.addColorStop(1, `rgba(128, 0, 32, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 6, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.fillStyle = `rgba(128, 0, 32, ${Math.min(depthAlpha * 1.2, 0.3)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div
      className="relative w-[320px] h-[320px] translate-x-[20px]"
      style={{
        animation: "heroFloat 12s ease-in-out infinite",
        transform: `translate(${20 + offset.x}px, ${offset.y}px)`,
      }}
    >
      {/* Depth glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,#eaeaea,transparent_70%)] opacity-50" />
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ opacity: 0.65 }}
      />
    </div>
  );
}
