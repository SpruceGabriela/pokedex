import React from 'react';
import * as css from './CloseButton.styles';
import { CloseButtonProps } from './CloseButton.types';

const CloseButton = ({ onClick }: CloseButtonProps) => (
  <css.CloseButton onClick={onClick}>
    <span />
    <span />
  </css.CloseButton>
);

export default CloseButton;
