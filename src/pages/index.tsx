import { NextPage, GetStaticProps } from "next";

import { pokeApi } from "../../api";
import { Pokemon, PokemonList } from "../../interfaces";
import PokemonCard from "../../components/pokemon/PokemonCard";
import { Layout } from "../../components/layouts";
import { Grid } from "@nextui-org/react";

interface Props {
  pokemons: Pokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Pokemon App">
      <Grid.Container gap={2} justify="center">
        {pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </Grid.Container>
    </Layout>
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
