import React, { FC } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  staggerDelay?: number;
}

export const StaggerContainer: FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 0.1,
  ...props
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
