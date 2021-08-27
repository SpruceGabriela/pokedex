import styled, { css } from 'styled-components';
import { TypographyProps } from './Typography.types';

export const Container = styled.p<TypographyProps>`
  margin: 0px;
  text-transform: capitalize;

  ${({ size }) => (size ? `font-size: ${size}px;` : '')}
  ${({ weight }) => (weight ? `font-weight: ${weight};` : '')}

  ${({ color, isColored }) => {
    if (!isColored) {
      return css`
        color: ${color};
      `;
    }
    if (color) {
      return css`
        color: ${({ theme }) => theme.types[color].dark};
      `;
    }
    return css`
      color: ${({ theme }) => theme.black};
    `;
  }}
`;
