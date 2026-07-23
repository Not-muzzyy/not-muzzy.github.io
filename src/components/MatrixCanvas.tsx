'use client';

import { useEffect, useRef } from 'react';

export default function MatrixCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ';
    let W: number, H: number, cols: number, drops: number[];

    function init() {
      W = canvas!.width = window.innerWidth;
      H = canvas!.height = window.innerHeight;
      cols = Math.floor(W / 16);
      drops = Array(cols).fill(1);
    }
    init();

    window.addEventListener('resize', init);

    const interval = setInterval(() => {
      if (!ctx) return;
      ctx.fillStyle = 'rgba(5,10,5,0.05)';
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = '#00ff41';
      ctx.font = '14px Share Tech Mono';
      drops.forEach((y, i) => {
        const ch = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(ch, i * 16, y * 16);
        if (y * 16 > H && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    }, 60);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', init);
    };
  }, []);

  return <canvas id="matrix" ref={canvasRef} />;
}
