import React from "react";

import { Layout } from "../../../components/layouts";

import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { pokeApi } from "../../../api";
import { DetailsPoke, PokemonList } from "../../../interfaces";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";

interface Props {
  pokemon: DetailsPoke;
}

const Details: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title="Detalle">
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
              <Button color="warning" ghost>
                Add to favorites
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
                {pokemon.types.map(({ type }: any) => (
                  <Button
                    css={{
                      width: "5%",
                      marginRight: "15px",
                    }}
                    key={type}
                    color={
                      type.name === "fire"
                        ? "error"
                        : type.name === "water" || "psychic"
                        ? "primary"
                        : type.name === "poison" || "grass"
                        ? "success"
                        : type.name === "ground"
                        ? "warning"
                        : "success"
                    }
                  >
                    {" "}
                    {type.name.toUpperCase()}{" "}
                  </Button>
                ))}
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
