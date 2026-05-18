import React, { FC } from 'react';
import { cn } from '../../lib/utils';
import { TypographyProps, TypographyVariant } from './types';

export const Typography: FC<TypographyProps> = ({
  children,
  className,
  variant = 'p',
  as,
  ...props
}) => {
  const variants: Record<TypographyVariant, string> = {
    h1: 'text-4xl font-bold tracking-tight sm:text-6xl text-coffee-dark',
    h2: 'text-3xl font-bold tracking-tight sm:text-4xl text-coffee-dark',
    h3: 'text-2xl font-bold text-coffee-dark',
    h4: 'text-xl font-bold text-coffee-dark',
    p: 'text-base leading-7 text-coffee-dark/80',
    lead: 'text-xl leading-8 text-coffee-dark/80',
    span: '',
  };

  const Component = as || (variant === 'lead' ? 'p' : variant);

  return (
    <Component
      className={cn(variants[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
};
