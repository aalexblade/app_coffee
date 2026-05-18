import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { Image } from '../../../shared/ui/image';

export const HeroImage: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: 50 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1.8, delay: 0.6, ease: "easeOut" }}
      className="hidden lg:flex lg:col-span-5 justify-center lg:justify-end relative"
    >
      <div className="absolute -inset-20 bg-coffee-medium/5 rounded-full blur-[120px] animate-pulse" />

      <div className="w-96 h-145 relative z-10 p-3 bg-white/5 border border-white/10 rounded-md backdrop-blur-sm overflow-hidden shadow-2xl">
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.6 }}
          className="h-full w-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop"
            alt="Artisanal Brewing"
            className="rounded-sm opacity-90 grayscale-[20%] contrast-[110%] hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
