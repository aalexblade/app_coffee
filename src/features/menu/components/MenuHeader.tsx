import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { Title, Caption } from '../../../shared/ui/typography';

export const MenuHeader: FC = () => {
  return (
    <div className="flex flex-col items-center text-center mb-16">
      <Caption className="mb-4">
        Carefully Selected
      </Caption>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Title level={2}>
          Our Coffee Selection
        </Title>
      </motion.div>
      <div className="w-16 h-px bg-coffee-medium/40 mt-6" />
    </div>
  );
};
