import styled, { css } from 'styled-components';
import { TypographyProps } from './Typography.types';

export const Container = styled.p<TypographyProps>`
  margin: 0px;
  
  ${({ size }) => (size ? `font-size: ${size}px;` : '')}
  ${({ weight }) => (weight ? `font-weight: ${weight};` : '')}

  ${({ color }) => {
    if (color) {
      return css`
        color: ${({ theme }) => theme.types[color].dark};
      `;
    }
    return css`
      color: ${({ theme }) => theme.gray};
    `;
  }}
`;
