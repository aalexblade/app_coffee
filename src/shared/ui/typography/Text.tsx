import React, { FC } from 'react';
import { cn } from '../../lib/utils';
import { TypographyProps } from './types';

export interface TextProps extends Omit<TypographyProps, 'variant'> {
  variant?: 'body' | 'lead';
}

export const Text: FC<TextProps> = ({
  variant = 'body',
  children,
  className,
  as: Component = 'p',
  ...props
}) => {
  const variants = {
    body: 'text-base leading-7',
    lead: 'text-xl leading-8',
  };

  return (
    <Component
      className={cn(variants[variant], 'text-coffee-dark/80', className)}
      {...props}
    >
      {children}
    </Component>
  );
};
