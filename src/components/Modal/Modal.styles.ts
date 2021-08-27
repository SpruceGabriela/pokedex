import styled, { css } from 'styled-components';
import { ModalProps } from './Modal.types';

export const Modal = styled.section<Pick<ModalProps, 'showModal'>>`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.white};
  position: fixed;
  left: 0;
  z-index: 99;
  transition: all 600ms cubic-bezier(.47,1.64,.41,.8);

  ${({ showModal }) => {
    if (showModal) {
      return css`
        bottom: 0;
      `;
    }
    return css`
      bottom: -100vh;
    `;
  }}
`;

export const ModalBody = styled.section`
  height: 100%;
  width: 100%;
  display: grid;
  position: relative;
  grid-template-columns: 2fr 1fr;

  & > svg {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  & > svg:first-of-type {
    z-index: 1;
    bottom: 8rem;
    left: -12rem;
  }

  & > svg:last-of-type {
    z-index: 2;
    bottom: 0;
  }
`;
