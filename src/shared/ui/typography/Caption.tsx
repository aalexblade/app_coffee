import React, { FC } from 'react';
import { cn } from '../../lib/utils';
import { TypographyProps } from './types';

export const Caption: FC<Omit<TypographyProps, 'variant'>> = ({
  children,
  className,
  as: Component = 'span',
  ...props
}) => {
  return (
    <Component
      className={cn('text-sm font-medium uppercase tracking-wider text-coffee-medium', className)}
      {...props}
    >
      {children}
    </Component>
  );
};
