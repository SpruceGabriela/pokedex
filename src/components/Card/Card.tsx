import React from 'react';
import Typography from '../Typography';

import * as css from './Card.styles';

const Card = () => (
  <css.Card>
    <css.PokemonId>
      #001
    </css.PokemonId>
    <Typography
      as="h2"
      size="20"
      weight="600"
    >
      Nidoran
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
