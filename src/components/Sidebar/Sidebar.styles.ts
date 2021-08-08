import styled from 'styled-components';

export const Sidebar = styled.section`
  max-width: 300px;
  width: 100%;
  max-height: 100vh;
  height: 100%;
  padding: 30px, 0px, 30px, 0px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 10px 10px 60px #f4f4f4;
`;
