import React, { FC } from 'react';
import { motion, Variants } from 'framer-motion';
import { MenuItem } from '../../../shared/types/menu';
import { Title, Text } from '../../../shared/ui/typography';

interface MenuCardProps {
  item: MenuItem;
  variants: Variants;
}

export const MenuCard: FC<MenuCardProps> = ({ item, variants }) => {
  return (
    <motion.div 
      variants={variants} 
      className="group flex flex-col justify-between"
    >
      <div>
        <div className="flex items-baseline gap-2 mb-2">
          <Title level={4} as="h3" className="whitespace-nowrap group-hover:text-coffee-medium transition-colors duration-300">
            {item.name}
          </Title>
          <div className="flex-1 border-b border-dotted border-coffee-dark/15 mb-1" />
          <span className="text-base font-bold text-coffee-dark/80 group-hover:text-coffee-dark transition-colors duration-300">
            {item.price} ₴
          </span>
        </div>
        
        <Text className="text-sm font-light leading-relaxed">
          {item.description}
        </Text>
      </div>
    </motion.div>
  );
};
