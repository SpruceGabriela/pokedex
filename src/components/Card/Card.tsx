import React from 'react';
import getCorrectDecimals from '../../utils/getCorrectDecimals';
import Typography from '../Typography';

import * as css from './Card.styles';
import { CardProps } from './Card.types';

const Card = ({
  id, name, types, abilities, genus, onClick,
}: CardProps) => (
  <css.Card onClick={onClick}>
    <css.PokemonId>
      #
      {getCorrectDecimals(id)}
    </css.PokemonId>
    <css.ImageContainer>
      <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getCorrectDecimals(id)}.png`} alt={`pokemon-${id}`} />
    </css.ImageContainer>
    <Typography
      as="h2"
      size="20"
      weight="600"
    >
      {name}
    </Typography>
    <Typography
      as="p"
      size="14"
    >
      {genus}
    </Typography>
    <css.CardFlag>
      {types?.map((type, index) => (
        <Typography
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          as="p"
          size="16"
          weight="400"
          color={type.type.name}
        >
          {type.type.name}
        </Typography>
      ))}
    </css.CardFlag>
    <css.CardFlag>
      {abilities?.map((ability, index) => (
        <Typography
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          as="span"
          size="16"
          weight="400"
        >
          {ability.ability.name}
        </Typography>
      ))}
    </css.CardFlag>
  </css.Card>
);

export default Card;
