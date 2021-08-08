import React, { FC } from 'react';
import * as css from './Sidebar.styles';
import { SidebarProps } from './Sidebar.types';

const Sidebar: FC = ({ children }: SidebarProps) => {
  return <css.Sidebar>{children}</css.Sidebar>;
};

export default Sidebar;
