import React, { FC, useRef, useMemo } from "react";
import { ChevronDown } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { Container } from "../../shared/ui/container";
import { Image } from "../../shared/ui/image";
import { FloatingParticles } from "../../shared/ui/motion";
import { HeroContent } from "./components/HeroContent";
import { HeroImage } from "./components/HeroImage";

export const HeroSection: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);
  const backgroundOpacity = useTransform(scrollY, [0, 800], [1, 0]);
  const contentOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const contentScale = useTransform(scrollY, [0, 600], [1, 0.9]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 120 };
  const headX = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [20, -20]),
    springConfig,
  );
  const headY = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [10, -10]),
    springConfig,
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - left) / width - 0.5);
    mouseY.set((e.clientY - top) / height - 0.5);
  };

  const words = useMemo(() => "Artisanal Coffee in Kyiv".split(" "), []);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      id="hero"
      className="relative h-screen min-h-[750px] w-full flex items-center justify-center bg-black"
    >
      {/* Background Layer */}
      <motion.div
        style={{ y: backgroundY, opacity: backgroundOpacity }}
        className="absolute inset-0 z-0"
      >
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1.2 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="w-full h-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
            alt="Cinematic Coffee Shop"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-cream z-10" />
      </motion.div>

      <FloatingParticles count={30} />

      {/* Content */}
      <Container className="relative z-20">
        <motion.div
          style={{ opacity: contentOpacity, scale: contentScale }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <HeroContent headX={headX} headY={headY} words={words} />
          <HeroImage />
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] uppercase tracking-[0.7em] text-white/30 font-bold">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-coffee-medium/50"
        >
          <ChevronDown size={24} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
};
