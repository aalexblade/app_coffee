import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { AppButton } from '../../../shared/ui/button';

export const HeroActions: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4 }}
      className="flex flex-wrap gap-6 justify-center lg:justify-start"
    >
      <a href="#menu" className="inline-block">
        <AppButton 
          variant="primary" 
          size="lg"
          className="uppercase tracking-widest text-[11px] font-bold"
        >
          View Menu
        </AppButton>
      </a>
      <a href="#contact" className="inline-block">
        <AppButton
          variant="outline"
          size="lg"
          className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm uppercase tracking-widest text-[11px] font-bold"
        >
          Order Now
        </AppButton>
      </a>
    </motion.div>
  );
};
