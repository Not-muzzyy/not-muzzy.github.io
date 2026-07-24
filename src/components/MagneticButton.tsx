'use client';

import { useRef, useState, useEffect, ReactNode } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  download?: boolean;
  target?: string;
  rel?: string;
}

export default function MagneticButton({ children, className = '', href, onClick, download, target, rel }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = button.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      setPosition({ x: distanceX * 0.2, y: distanceY * 0.2 });
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const combinedStyle = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition: position.x === 0 && position.y === 0 ? 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)' : 'transform 0.1s linear'
  };

  if (href) {
    return (
      <a
        ref={buttonRef}
        href={href}
        className={className}
        style={combinedStyle}
        download={download}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={className}
      style={combinedStyle}
    >
      {children}
    </button>
  );
}
