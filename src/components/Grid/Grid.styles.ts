import styled from 'styled-components';

export const Grid = styled.main`
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100vh;
  box-sizing: border-box;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  overflow: scroll;
`;
