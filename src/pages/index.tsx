import { NextPage, GetStaticProps } from "next";

import { pokeApi } from "../../api";
import { Pokemon, PokemonList } from "../../interfaces";
import PokemonCard from "../../components/pokemon/PokemonCard";

interface Props {
  pokemons: Pokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      <PokemonCard pokemons={pokemons} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonList>("/pokemon?limit=151");

  const poke151: Pokemon[] = data.results.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
      i + 1
    }.png`,
  }));

  return {
    props: {
      pokemons: poke151,
    }, // estas props son las unicas que llegan al cliente
  };
};

export default Home;
