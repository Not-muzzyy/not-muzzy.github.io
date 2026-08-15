import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0c]">
      <div className="brand-glow" style={{ width: '48px', height: '48px', opacity: 0.5, animation: 'pulse 1.5s infinite' }}></div>
    </div>
  );
}
