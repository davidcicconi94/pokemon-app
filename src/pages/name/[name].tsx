import React, { FC, useState } from "react";

import { GetStaticProps, GetStaticPaths } from "next";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";

import confetti from "canvas-confetti";

import { pokeApi } from "../../../api";
import utils from "../../../utils/localFavorites";
import { Layout } from "../../../components/layouts";
import { DetailsPoke, PokemonList } from "../../../interfaces";

interface Props {
  pokemon: DetailsPoke;
}

const PokemonByName: FC<Props> = ({ pokemon }) => {
  const { isPokemonInFavorites, toggleFavorite } = utils;
  const [isInFavorites, setIsInFavorites] = useState<boolean>(
    isPokemonInFavorites(pokemon.id)
  );

  const onToggleFavorite = () => {
    toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);

    if (isInFavorites) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };

  return (
    <Layout title={pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}>
      <Grid.Container css={{ marginTop: "10px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card>
            <Card.Body>
              <Card.Image
                width="100%"
                src={
                  pokemon.sprites.other?.["official-artwork"].front_default ||
                  "no-image.jpg"
                }
                alt={pokemon.name}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ justifyContent: "space-between" }}>
              <Text h2 transform="uppercase">
                {pokemon.name}
              </Text>
              <Button
                onPress={onToggleFavorite}
                color={isInFavorites ? "success" : "warning"}
                ghost={isInFavorites}
              >
                {!isInFavorites ? "Add to favorites" : "Added"}
              </Button>
            </Card.Header>
            <hr />
            <Card.Body>
              <Container display="flex" direction="row">
                <Text h3>Sprites:</Text>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
            <Card.Body>
              <Container display="flex" direction="row">
                <Text h3 css={{ marginRight: "25px" }}>
                  Type:{" "}
                </Text>
                {pokemon.types.map(
                  ({ type }): JSX.Element => (
                    <Button
                      css={{
                        width: "5%",
                        marginRight: "15px",
                      }}
                      key={type.name}
                      color={
                        type.name === "fire"
                          ? "error"
                          : type.name === "water"
                          ? "primary"
                          : type.name === "grass" || type.name === "bug"
                          ? "success"
                          : type.name === "electric"
                          ? "warning"
                          : type.name === "ground"
                          ? "secondary"
                          : "secondary"
                      }
                    >
                      {" "}
                      {type.name.toUpperCase()}{" "}
                    </Button>
                  )
                )}
              </Container>
            </Card.Body>
            <Card.Body>
              <Container display="flex" direction="row">
                <Text h3 css={{ marginRight: "40px" }}>
                  Height: {pokemon.height} M.{" "}
                </Text>
                <Text h3 css={{ marginRight: "40px" }}>
                  Weight: {pokemon.weight} Kg.{" "}
                </Text>
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  // traer 151 pokemons
  const { data } = await pokeApi.get<PokemonList>("/pokemon?limit=151");

  const pokemonNames: string[] = [];

  // generar array con todos los nombres
  data.results?.map((pokemon) => pokemonNames.push(pokemon.name));

  //mapearlo y pasarlo como params
  return {
    paths: pokemonNames.map((pokemon) => ({
      params: { name: pokemon },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  const { data } = await pokeApi.get<DetailsPoke>(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );

  const pokemon = {
    id: data.name,
    name: data.name,
    sprites: data.sprites,
    types: data.types,
  };

  console.log("POKE:", pokemon);

  return {
    props: {
      pokemon,
    },
  };
};

export default PokemonByName;
