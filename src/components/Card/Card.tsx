import React from 'react';
import getCorrectDecimals from '../../utils/getCorrectDecimals';
import Typography from '../Typography';

import * as css from './Card.styles';
import { CardProps } from './Card.types';

const Card = ({ id, name }: CardProps) => (
  <css.Card>
    <css.PokemonId>
      #
      {getCorrectDecimals(id)}
    </css.PokemonId>
    <div>
      <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getCorrectDecimals(id)}.png`} alt={`pokemon-${id}`} />
    </div>
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
      Seed pokemon
    </Typography>
    <css.CardFlag>
      <Typography
        as="p"
        size="16"
        weight="400"
        color="grass"
      >
        Grass
      </Typography>
      <Typography
        as="p"
        size="16"
        weight="400"
        color="poison"
      >
        Poison
      </Typography>
    </css.CardFlag>
    <css.CardFlag>
      <Typography
        as="span"
        size="16"
        weight="400"
      >
        Overgrow
      </Typography>
      <Typography
        as="span"
        size="16"
        weight="400"
      >
        Chlorophyll
      </Typography>
    </css.CardFlag>
  </css.Card>
);

export default Card;
