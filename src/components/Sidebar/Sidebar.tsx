import React from 'react';
import * as css from './Sidebar.styles';
import { SidebarProps, SidebarItemProps } from './Sidebar.types';

const SidebarItem = ({ children, backgroundColor }: SidebarItemProps) => (
  <css.SidebarItem
    backgroundColor={backgroundColor}
  >
    {children}
  </css.SidebarItem>
);

const Sidebar = ({ children }: SidebarProps) => <css.Sidebar>{children}</css.Sidebar>;

const Item = SidebarItem;
Sidebar.Item = Item;

export default Sidebar;
