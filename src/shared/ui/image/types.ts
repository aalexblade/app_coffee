import { ImgHTMLAttributes } from 'react';

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}
