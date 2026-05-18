import React, { FC } from 'react';
import { cn } from '../../lib/utils';
import { TypographyProps } from './types';

export interface TitleProps extends Omit<TypographyProps, 'variant'> {
  level?: 1 | 2 | 3 | 4;
}

export const Title: FC<TitleProps> = ({
  level = 1,
  children,
  className,
  ...props
}) => {
  const levels = {
    1: 'text-4xl font-bold tracking-tight sm:text-6xl',
    2: 'text-3xl font-bold tracking-tight sm:text-4xl',
    3: 'text-2xl font-bold',
    4: 'text-xl font-bold',
  };

  const Component = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Component
      className={cn(levels[level], 'text-coffee-dark', className)}
      {...props}
    >
      {children}
    </Component>
  );
};
