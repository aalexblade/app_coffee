import React, { FC } from 'react';
import { cn } from '../../lib/utils';
import { ImageProps } from './types';

export const Image: FC<ImageProps> = ({
  className,
  alt = '',
  objectFit = 'cover',
  ...props
}) => {
  const objectFitClasses = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
    none: 'object-none',
    'scale-down': 'object-scale-down',
  };

  return (
    <img
      className={cn('h-full w-full', objectFitClasses[objectFit], className)}
      alt={alt}
      {...props}
    />
  );
};
