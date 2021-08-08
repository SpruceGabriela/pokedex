import { ReactNode } from 'react';

export interface TypographyProps {
  children: ReactNode;
  size?: string;
  weight?: string;
  color?: string;
  as?: React.ElementType;
}
