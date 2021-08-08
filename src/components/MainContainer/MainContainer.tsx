import React, { FC } from 'react';
import * as css from './MainContainer.styles';
import { MainContainerProps } from './MainContainer.types';

const MainContainer: FC = ({ children }: MainContainerProps) => (
  <css.MainContainer>
    {children}
  </css.MainContainer>
);
export default MainContainer;
