import React, { FC } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface RevealProps extends HTMLMotionProps<'div'> {
  delay?: number;
  width?: 'fit-content' | '100%';
}

export const Reveal: FC<RevealProps> = ({
  children,
  delay = 0.25,
  width = 'fit-content',
  ...props
}) => {
  return (
    <div style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  );
};
