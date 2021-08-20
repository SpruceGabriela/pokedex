import styled, { css } from 'styled-components';
import hexRgb from 'hex-rgb';
import { SidebarItemProps } from './Sidebar.types';

export const Sidebar = styled.aside`
  max-width: 300px;
  width: 100%;
  max-height: 100vh;
  height: 100%;
  box-sizing: border-box;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 10px 10px 60px ${({ theme }) => theme.shadowColor};
  overflow-y: scroll;
`;

export const SidebarItem = styled.div<Pick<SidebarItemProps, 'backgroundColor'>>`
  width: 100%;
  min-height: 50px;
  text-transform: capitalize;
  box-sizing: border-box;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  cursor: pointer;
  transform: scale(1);
  transition: transform .4s;

  &:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }

  &:hover {
    transform: scale(1.03);
  }

  ${({ theme, backgroundColor }) => {
    if (backgroundColor) {
      return css`
        color: ${() => theme.types[backgroundColor].dark};
        background-color: ${hexRgb(theme.types[backgroundColor].light, { alpha: 0.2, format: 'css' })};
      `;
    }
    return css`
      color: white;  
      background-color: ${() => theme.gray};
    `;
  }}
`;
