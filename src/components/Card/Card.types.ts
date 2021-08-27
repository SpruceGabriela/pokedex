import { PokemonAbilities, PokemonType } from '../../types/pokemons';

export interface CardProps {
  id: number;
  name: string;
  types?: PokemonType[];
  abilities?: PokemonAbilities[];
  genus?: string;
  onClick?: () => void;
}
