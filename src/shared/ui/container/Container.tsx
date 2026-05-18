import React, { FC } from 'react';
import { cn } from '../../lib/utils';
import { ContainerProps } from './types';

export const Container: FC<ContainerProps> = ({
  children,
  className,
  as: Component = 'div',
  ...props
}) => {
  return (
    <Component
      className={cn('mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    >
      {children}
    </Component>
  );
};
