import axios from 'axios';
import specieAdapter from '../adapters/specieAdapter';
import { Pokemons } from '../types/pokemons';
import { PokemonTypes } from '../types/pokemonsTypes';

export const getPokemonsSpecies = async (url: string) => axios.get(url);

export const getPokemons = async () => {
  const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon');
  return Promise.all(
    data?.results.map(async (result: any) => {
      const { data: pokemons } = await axios.get(`${result.url}`);

      const { data: specie } = await getPokemonsSpecies(pokemons?.species.url);

      const adaptedSpecie = specieAdapter(specie);

      return { ...pokemons, genus: adaptedSpecie.genus };
    }),
  ) as unknown as Pokemons[];
};

export const getPokemonsTypes = async () => {
  const { data } = await axios.get('https://pokeapi.co/api/v2/type');
  const { results: types } = data;
  return types as unknown as PokemonTypes[];
};
