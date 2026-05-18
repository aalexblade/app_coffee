import React, { FC, useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export interface ParticleProps {
  count?: number;
  color?: string;
  opacity?: number;
  className?: string;
}

export const FloatingParticles: FC<ParticleProps> = ({ 
  count = 20, 
  color = "bg-white", 
  opacity = 0.4,
  className
}) => {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 20,
    }));
  }, [count]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-10", className)}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ 
            opacity: 0, 
            x: `${p.x}%`, 
            y: `${p.y}%` 
          }}
          animate={{
            opacity: [0, opacity, 0],
            y: [`${p.y}%`, `${p.y - 20}%`],
            x: [`${p.x}%`, `${p.x + (Math.random() - 0.5) * 10}%`],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
          className={cn("absolute rounded-full blur-[1px]", color)}
          style={{
            width: p.size,
            height: p.size,
          }}
        />
      ))}
    </div>
  );
};
