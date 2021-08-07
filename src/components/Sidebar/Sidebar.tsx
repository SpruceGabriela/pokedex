import React, { FC } from 'react';
import * as css from './Sidebar.styles';

const Sidebar: FC = ({ children }) => {
  return <css.Sidebar>{children}</css.Sidebar>;
};

export default Sidebar;
