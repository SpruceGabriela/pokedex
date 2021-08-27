import styled from 'styled-components';

export const ImageContainer = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 99;

  & > img {
    margin-top: 5rem;
    width: 50%;
  }
`;
