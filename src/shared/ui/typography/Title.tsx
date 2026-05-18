import React from 'react';
import { cn } from '../../lib/utils';
import { TypographyProps } from './types';

export interface TitleProps extends Omit<TypographyProps, 'variant'> {
  level?: 1 | 2 | 3 | 4;
}

// У React 19 краще відмовитися від : FC<TitleProps> та типізувати пропси безпосередньо в аргументах
export const Title = ({
  level = 1,
  children,
  className,
  ...props
}: TitleProps) => {
  const levels = {
    1: 'text-4xl font-bold tracking-tight sm:text-6xl',
    2: 'text-3xl font-bold tracking-tight sm:text-4xl',
    3: 'text-2xl font-bold',
    4: 'text-xl font-bold',
  };

  // Замінюємо keyof JSX.IntrinsicElements на безпечний React.ElementType
  const Component = `h${level}` as React.ElementType;

  return (
    <Component
      className={cn(levels[level], 'text-coffee-dark', className)}
      {...props}
    >
      {children}
    </Component>
  );
};
