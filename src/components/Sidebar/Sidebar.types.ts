import { ReactNode } from 'react';

export interface SidebarProps {
  children?: ReactNode;
}

export interface SidebarItemProps {
  children?: string;
  backgroundColor?: string;
}
