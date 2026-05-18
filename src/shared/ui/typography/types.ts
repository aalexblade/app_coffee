import { HTMLAttributes } from 'react';

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'lead';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: React.ElementType;
}
