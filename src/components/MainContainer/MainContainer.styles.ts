import styled from 'styled-components';

export const MainContainer = styled.main`
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
  display: flex;
  justify-content: flex-start;
`;
