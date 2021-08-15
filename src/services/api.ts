import axios from 'axios';
import { Pokemons } from '../types/pokemons';

export const getPokemons = async () => {
  const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon');
  return Promise.all(
    data?.results.map(async (result: any) => {
      const { data: pokemons } = await axios.get(`${result.url}`);
      return pokemons;
    }),
  ) as unknown as Pokemons[];
};
