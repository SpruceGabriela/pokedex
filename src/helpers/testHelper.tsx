import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/_theme';

export const renderThemed = (children: any) => render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>,
);
