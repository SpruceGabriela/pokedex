import styled from 'styled-components';

export const CloseButton = styled.button`
  height: 40px;
  width: 40px;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 999;
  cursor: pointer;

  & > span {
    display: block;
    height: 3px;
    width: 40px;
    background: ${({ theme }) => theme.gray};
    border-radius: 20px;
    position: absolute;

    &:first-of-type {
      transform: rotate(45deg);
    }

    &:last-of-type {
      transform: rotate(-45deg);
    }
  }
`;
