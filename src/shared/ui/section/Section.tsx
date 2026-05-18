import React, { FC } from 'react';
import { cn } from '../../lib/utils';
import { SectionProps } from './types';

export const Section: FC<SectionProps> = ({
  children,
  className,
  as: Component = 'section',
  ...props
}) => {
  return (
    <Component
      className={cn('py-16 md:py-24', className)}
      {...props}
    >
      {children}
    </Component>
  );
};
