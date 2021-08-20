import { EPokemonType } from '../shared/enums/PokemonType';

export default () => ({
  white: '#ffffff',
  backgroundColor: '#f8f7f7',
  gray: '#a39f99',
  shadowColor: '#f4f4f4',
  black: '#565656',
  lightGray: '#e9e8e7',

  types: {
    [EPokemonType.NORMAL]: {
      light: '#A4ACAF',
      dark: '#787f82',
    },
    [EPokemonType.BUG]: {
      light: '#84b749',
      dark: '#486328',
    },
    [EPokemonType.POISON]: {
      light: '#B97FC9',
      dark: '#734f7c',
    },
    [EPokemonType.ELETRIC]: {
      light: '#EED548',
      dark: '#b7a238',
    },
    [EPokemonType.FIRE]: {
      light: '#F07C3A',
      dark: '#ad582b',
    },
    [EPokemonType.WATER]: {
      light: '#4592C4',
      dark: '#2c5f7f',
    },
    [EPokemonType.FIGHTING]: {
      light: '#D56831',
      dark: '#d56831',
    },
    [EPokemonType.GROUND]: {
      light: '#F7DF4B',
      dark: '#aa9934',
    },
    [EPokemonType.GRASS]: {
      light: '#9BCC50',
      dark: '#698935',
    },
    [EPokemonType.PSYCHIC]: {
      light: '#ED65B9',
      dark: '#b24c8b',
    },
    [EPokemonType.ROCK]: {
      light: '#A38C2D',
      dark: '#564a19',
    },
    [EPokemonType.STEEL]: {
      light: '#9EB7B8',
      dark: '#687777',
    },
    [EPokemonType.ICE]: {
      light: '#51C4E7',
      dark: '#367e93',
    },
    [EPokemonType.GHOST]: {
      light: '#7B62A3',
      dark: '#4d3e66',
    },
    [EPokemonType.FAIRY]: {
      light: '#F4B9E9',
      dark: '#a57f9e',
    },
    [EPokemonType.FLYING]: {
      light: '#51C7EF',
      dark: '#9096f0',
    },
    [EPokemonType.DRAGON]: {
      light: '#38e1ea',
      dark: '#25989e',
    },
    [EPokemonType.UNKNOW]: {
      light: '#2e516d',
      dark: '#172d3f',
    },
    [EPokemonType.SHADOW]: {
      light: '#4e4e4e',
      dark: '#313131',
    },
    [EPokemonType.DARK]: {
      light: '#989898',
      dark: '#707070',
    },
  },
});
