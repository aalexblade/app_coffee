import React, { FC } from 'react';
import { motion, MotionValue } from 'framer-motion';
import { Coffee } from 'lucide-react';
import { Title, Text } from '../../../shared/ui/typography';
import { HeroActions } from './HeroActions';

interface HeroContentProps {
  headX: MotionValue<number>;
  headY: MotionValue<number>;
  words: string[];
}

export const HeroContent: FC<HeroContentProps> = ({ headX, headY, words }) => {
  return (
    <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-3 mb-8"
      >
        <div className="p-2 bg-white/10 rounded-lg backdrop-blur-md border border-white/20 text-coffee-medium">
          <Coffee size={20} />
        </div>
        <span className="text-white/50 uppercase tracking-[0.5em] text-[10px] font-bold">
          EST. 2024 • Kyiv Roasters
        </span>
      </motion.div>

      <motion.div style={{ x: headX, y: headY }} className="mb-8">
        <Title level={1} className="text-cream leading-none">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 1,
                delay: i * 0.15,
                ease: [0.2, 1, 0.3, 1],
              }}
              className="inline-block mr-4 last:mr-0"
            >
              {word === "Kyiv" ? (
                <span className="text-coffee-medium italic font-serif">Kyiv</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </Title>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <Text variant="lead" className="text-cream/60 max-w-lg mb-12 font-light leading-relaxed">
          Experience the art of the perfect pour. Our beans are micro-roasted
          in small batches to preserve every delicate note.
        </Text>
      </motion.div>

      <HeroActions />
    </div>
  );
};
