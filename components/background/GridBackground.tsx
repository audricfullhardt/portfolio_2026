"use client";
import { useEffect, useRef } from "react";

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    const SPACING = 32;
    let W = 0, H = 0;

    function resize() {
      W = window.innerWidth;
      H = Math.max(window.innerHeight, document.body.scrollHeight);
      canvas.width = W * DPR; canvas.height = H * DPR;
      canvas.style.width = W + "px"; canvas.style.height = H + "px";
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      draw();
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = "oklch(1 0 0 / 0.04)";
      ctx.lineWidth = 1;
      for (let x = SPACING; x < W; x += SPACING) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = SPACING; y < H; y += SPACING) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }
      ctx.fillStyle = "oklch(0.78 0.17 162 / 0.12)";
      for (let y = SPACING; y < H; y += SPACING)
        for (let x = SPACING; x < W; x += SPACING) {
          ctx.beginPath(); ctx.arc(x, y, 1, 0, Math.PI * 2); ctx.fill();
        }
    }

    window.addEventListener("resize", resize);
    const interval = setInterval(() => {
      const h = Math.max(window.innerHeight, document.body.scrollHeight);
      if (Math.abs(h - H) > 50) resize();
    }, 600);
    resize();
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} id="dots-canvas" />;
}
