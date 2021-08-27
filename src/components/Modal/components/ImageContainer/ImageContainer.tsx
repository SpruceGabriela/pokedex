import React from 'react';
import Typography from '../../../Typography';
import * as css from './ImageContainer.styles';

const ImageContainer = () => (
  <css.ImageContainer>
    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png" alt="" />
    <Typography as="h2" size="50" isColored={false} color="white">#006 Charizard</Typography>
    <Typography size="30" isColored={false} color="white">リザードン</Typography>
  </css.ImageContainer>
);

export default ImageContainer;
