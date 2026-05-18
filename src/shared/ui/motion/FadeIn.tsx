import { motion } from "framer-motion";
import { FC } from "react";
import { FadeInProps } from "./types";

export const FadeIn: FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = "up",
  ...props 
}) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: directions[direction].y, 
        x: directions[direction].x 
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay: delay, 
        ease: "easeOut" 
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
