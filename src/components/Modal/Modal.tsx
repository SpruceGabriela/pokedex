import React from 'react';
import CloseButton from './components/CloseButton';
import ImageContainer from './components/ImageContainer';
import ModalBackground from './components/ModalBackground';
import PokemonDescription from './components/PokemonDescription';
import { ModalProps } from './Modal.types';
import * as css from './Modal.styles';

const Modal = ({ showModal, closeModal }: ModalProps) => (
  <css.Modal showModal={showModal}>
    <CloseButton onClick={closeModal} />
    <css.ModalBody>
      <ModalBackground />
      <ImageContainer />
      <PokemonDescription />
    </css.ModalBody>
  </css.Modal>
);

export default Modal;
