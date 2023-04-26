import React, { useEffect } from "react";

import { Layout } from "../../../components/layouts";

import { useRouter } from "next/router";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { pokeApi } from "../../../api";
import { DetailsPoke, PokemonList } from "../../../interfaces";

interface Props {
  pokemon: DetailsPoke;
}

const Details: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title="Detalle">
      <h2> {pokemon.name.toUpperCase()} </h2>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  // Generar un arreglo de 151 IDs
  const pokemonId: string[] = [];

  for (let index = 0; index < 151; index++) {
    pokemonId.push(index.toString());
  }

  return {
    paths: pokemonId.map((idPokemon) => ({
      params: { id: idPokemon },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // capturamos el param a través del contexto (ctx)
  const { id } = params as { id: string };

  const { data } = await pokeApi.get<DetailsPoke>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default Details;
