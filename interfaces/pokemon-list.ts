export interface PokemonList {
  count: number;
  next?: string;
  previous?: null;
  results: Pokemon[];
}

export interface Pokemon {
  id: number;
  name: string;
  url: string;
  image: string;
}
