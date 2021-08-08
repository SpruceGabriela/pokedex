import styled, { css } from 'styled-components';
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
`;

export const SidebarItem = styled.div<Pick<SidebarItemProps, 'backgroundColor'>>`
  width: 100%;
  min-height: 50px;
  color: ${({ theme }) => theme.white};
  text-transform: capitalize;
  box-sizing: border-box;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;

  ${({ backgroundColor }) => {
    if (backgroundColor) {
      return css`
        background-color: ${({ theme }) => theme.types[backgroundColor].dark};
      `;
    }
    return css`
      background-color: ${({ theme }) => theme.gray};
    `;
  }}
`;
