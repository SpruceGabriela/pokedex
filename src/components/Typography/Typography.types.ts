import { ReactChildren, ReactNode } from 'react';

export interface TypographyProps {
  children: ReactChildren | ReactNode | string;
  size?: string;
  weight?: string;
  color?: string;
  as?: keyof JSX.IntrinsicElements;
  isColored?: boolean;
}
