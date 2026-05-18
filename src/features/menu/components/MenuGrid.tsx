import React, { FC } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { MenuItem } from '../../../shared/types/menu';
import { MenuCard } from './MenuCard';

interface MenuGridProps {
  items: MenuItem[];
  activeCategory: string;
}

export const MenuGrid: FC<MenuGridProps> = ({ items, activeCategory }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.2, 1, 0.3, 1] as const }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      filter: "blur(4px)",
      transition: { duration: 0.3 } 
    }
  };

  return (
    <div className="min-h-96">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12"
        >
          {items.length > 0 ? (
            items.map((item) => (
              <MenuCard key={item.id} item={item} variants={itemVariants} />
            ))
          ) : (
            <motion.p variants={itemVariants} className="text-sm italic text-coffee-dark/40 col-span-full text-center py-12">
              Brewing something new for this category soon.
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
