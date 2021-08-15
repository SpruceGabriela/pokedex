export interface Pokemons {
  id: number;
  name: string;
  types: PokemonType[];
  abilities: PokemonAbilities[];
}

export interface PokemonType {
  type: PokemonTypeName;
}

export interface PokemonTypeName {
  name: string;
}

export interface PokemonAbilities {
  ability: PokemonAbilityName;
}

export interface PokemonAbilityName {
  name: string;
}
