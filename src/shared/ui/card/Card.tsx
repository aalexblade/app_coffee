import React, { FC } from 'react';
import { cn } from '../../lib/utils';
import { CardProps } from './types';

export const Card: FC<CardProps> = ({
  children,
  className,
  hoverable = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        'rounded-2xl bg-cream p-6 shadow-sm border border-coffee-light/20',
        hoverable && 'transition-all hover:shadow-md hover:border-coffee-light/40',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
