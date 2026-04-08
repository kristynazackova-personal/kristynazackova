"use client";

import { useEffect, useRef } from "react";

interface GlowNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  phase: number;
  speed: number;
}

interface Shape {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  spinX: number;
  spinY: number;
  spinZ: number;
  size: number;
  type: "diamond" | "ring" | "cube" | "dot";
  opacity: number;
  phase: number;
}

function project(x: number, y: number, z: number, cx: number, cy: number) {
  const perspective = 800;
  const scale = perspective / (perspective + z);
  return { x: cx + x * scale, y: cy + y * scale, scale };
}

function rotateY(x: number, z: number, angle: number) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return { x: x * cos - z * sin, z: x * sin + z * cos };
}

function rotateX(y: number, z: number, angle: number) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return { y: y * cos - z * sin, z: y * sin + z * cos };
}

export default function GlowField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let nodes: GlowNode[] = [];
    let shapes: Shape[] = [];

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

      // Soft glow nodes (background atmosphere)
      nodes = Array.from({ length: 4 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h * 0.8,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.2,
        radius: 150 + Math.random() * 180,
        opacity: 0.05 + Math.random() * 0.04,
        phase: Math.random() * Math.PI * 2,
        speed: 0.002 + Math.random() * 0.003,
      }));

      // 3D floating shapes
      const types: Shape["type"][] = ["diamond", "ring", "cube", "diamond", "ring", "dot", "dot", "dot"];
      shapes = Array.from({ length: 16 }, (_, i) => ({
        x: (Math.random() - 0.5) * w * 1.0,
        y: (Math.random() - 0.5) * h * 0.7,
        z: Math.random() * 300 - 50,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.5,
        vz: (Math.random() - 0.5) * 0.3,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        spinX: (Math.random() - 0.5) * 0.012,
        spinY: (Math.random() - 0.5) * 0.015,
        spinZ: (Math.random() - 0.5) * 0.008,
        size: i < 8 ? 20 + Math.random() * 30 : 2.5 + Math.random() * 3.5,
        type: types[i % types.length],
        opacity: 0.18 + Math.random() * 0.14,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const drawDiamond = (
      cx: number, cy: number, size: number, scale: number,
      rotX: number, rotY: number, alpha: number
    ) => {
      const pts = [
        { x: 0, y: -size, z: 0 },
        { x: size * 0.6, y: 0, z: 0 },
        { x: 0, y: size, z: 0 },
        { x: -size * 0.6, y: 0, z: 0 },
      ];

      const projected = pts.map((p) => {
        let { x, z } = rotateY(p.x, p.z, rotY);
        let { y, z: z2 } = rotateX(p.y, z, rotX);
        return { x: cx + x * scale, y: cy + y * scale };
      });

      ctx.strokeStyle = `rgba(128, 0, 32, ${alpha})`;
      ctx.lineWidth = 1.5 * scale;
      ctx.beginPath();
      ctx.moveTo(projected[0].x, projected[0].y);
      for (let i = 1; i < projected.length; i++) {
        ctx.lineTo(projected[i].x, projected[i].y);
      }
      ctx.closePath();
      ctx.stroke();
    };

    const drawRing = (
      cx: number, cy: number, size: number, scale: number,
      rotX: number, rotY: number, alpha: number
    ) => {
      const segments = 16;
      ctx.strokeStyle = `rgba(128, 0, 32, ${alpha})`;
      ctx.lineWidth = 1.5 * scale;
      ctx.beginPath();
      for (let i = 0; i <= segments; i++) {
        const angle = (i / segments) * Math.PI * 2;
        let px = Math.cos(angle) * size;
        let py = Math.sin(angle) * size;
        let pz = 0;
        const ry = rotateY(px, pz, rotY);
        px = ry.x; pz = ry.z;
        const rx = rotateX(py, pz, rotX);
        py = rx.y;
        const sx = cx + px * scale;
        const sy = cy + py * scale;
        if (i === 0) ctx.moveTo(sx, sy);
        else ctx.lineTo(sx, sy);
      }
      ctx.stroke();
    };

    const drawCube = (
      cx: number, cy: number, size: number, scale: number,
      rotX: number, rotY: number, alpha: number
    ) => {
      const s = size * 0.5;
      const verts = [
        [-s, -s, -s], [s, -s, -s], [s, s, -s], [-s, s, -s],
        [-s, -s, s], [s, -s, s], [s, s, s], [-s, s, s],
      ];
      const edges = [
        [0,1],[1,2],[2,3],[3,0],
        [4,5],[5,6],[6,7],[7,4],
        [0,4],[1,5],[2,6],[3,7],
      ];

      const projected = verts.map(([vx, vy, vz]) => {
        let { x, z } = rotateY(vx, vz, rotY);
        let { y, z: z2 } = rotateX(vy, z, rotX);
        return { x: cx + x * scale, y: cy + y * scale };
      });

      ctx.strokeStyle = `rgba(128, 0, 32, ${alpha})`;
      ctx.lineWidth = 1.3 * scale;
      for (const [a, b] of edges) {
        ctx.beginPath();
        ctx.moveTo(projected[a].x, projected[a].y);
        ctx.lineTo(projected[b].x, projected[b].y);
        ctx.stroke();
      }
    };

    const draw = (time: number) => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const cx = w / 2;
      const cy = h * 0.4;
      ctx.clearRect(0, 0, w, h);

      // Draw glow nodes
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < -node.radius) node.x = w + node.radius;
        if (node.x > w + node.radius) node.x = -node.radius;
        if (node.y < -node.radius) node.y = h + node.radius;
        if (node.y > h + node.radius) node.y = -node.radius;

        const pulse = Math.sin(time * node.speed + node.phase) * 0.5 + 0.5;
        const alpha = node.opacity * (0.6 + pulse * 0.4);

        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0, node.x, node.y, node.radius
        );
        gradient.addColorStop(0, `rgba(128, 0, 32, ${alpha})`);
        gradient.addColorStop(0.4, `rgba(128, 0, 32, ${alpha * 0.3})`);
        gradient.addColorStop(1, `rgba(128, 0, 32, 0)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(
          node.x - node.radius, node.y - node.radius,
          node.radius * 2, node.radius * 2
        );
      }

      // Draw and update 3D shapes
      const sortedShapes = [...shapes].sort((a, b) => b.z - a.z);

      for (const shape of sortedShapes) {
        shape.x += shape.vx;
        shape.y += shape.vy;
        shape.z += shape.vz;
        shape.rotX += shape.spinX;
        shape.rotY += shape.spinY;
        shape.rotZ += shape.spinZ;

        // Wrap around
        const boundX = w * 0.6;
        const boundY = h * 0.5;
        if (shape.x < -boundX) shape.x = boundX;
        if (shape.x > boundX) shape.x = -boundX;
        if (shape.y < -boundY) shape.y = boundY;
        if (shape.y > boundY) shape.y = -boundY;
        if (shape.z < -100) shape.z = 400;
        if (shape.z > 400) shape.z = -100;

        const { x: sx, y: sy, scale } = project(shape.x, shape.y, shape.z, cx, cy);
        const pulse = Math.sin(time * 0.002 + shape.phase) * 0.5 + 0.5;
        const alpha = shape.opacity * (0.5 + pulse * 0.5) * scale;

        if (shape.type === "dot") {
          const r = shape.size * scale;
          const gradient = ctx.createRadialGradient(sx, sy, 0, sx, sy, r * 4);
          gradient.addColorStop(0, `rgba(128, 0, 32, ${alpha})`);
          gradient.addColorStop(0.3, `rgba(128, 0, 32, ${alpha * 0.4})`);
          gradient.addColorStop(1, `rgba(128, 0, 32, 0)`);
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(sx, sy, r * 4, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = `rgba(128, 0, 32, ${alpha * 1.2})`;
          ctx.beginPath();
          ctx.arc(sx, sy, r * 0.6, 0, Math.PI * 2);
          ctx.fill();
        } else if (shape.type === "diamond") {
          drawDiamond(sx, sy, shape.size, scale, shape.rotX, shape.rotY, alpha);
        } else if (shape.type === "ring") {
          drawRing(sx, sy, shape.size, scale, shape.rotX, shape.rotY, alpha);
        } else if (shape.type === "cube") {
          drawCube(sx, sy, shape.size, scale, shape.rotX, shape.rotY, alpha);
        }
      }

      // Faint connection lines between nearby shapes
      for (let i = 0; i < shapes.length; i++) {
        for (let j = i + 1; j < shapes.length; j++) {
          const a = project(shapes[i].x, shapes[i].y, shapes[i].z, cx, cy);
          const b = project(shapes[j].x, shapes[j].y, shapes[j].z, cx, cy);
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 300) {
            const lineAlpha = (1 - dist / 300) * 0.1;
            ctx.strokeStyle = `rgba(128, 0, 32, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    init();
    animationId = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full pointer-events-none"
      style={{ height: "700px", opacity: 1 }}
    />
  );
}
