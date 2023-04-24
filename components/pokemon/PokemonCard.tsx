import React, { FC } from "react";
import { Layout } from "../layouts";
import { Card, Grid } from "@nextui-org/react";
import { Pokemon } from "../../interfaces";

interface Props {
  pokemons: Pokemon[];
}

const PokemonCard: FC<Props> = ({ pokemons }) => {
  return (
    <Layout title="Pokemon App">
      <Grid.Container gap={2} justify="center">
        {pokemons.map(({ id, name, image }) => (
          <Grid xs={6} sm={4} md={2} xl={2} key={id}>
            <Card isHoverable isPressable css={{ padding: "1.2em" }}>
              <Card.Body>
                <Card.Header
                  css={{
                    display: "flex",
                    justifyContent: "center",
                    letterSpacing: "2px",
                  }}
                >
                  {name.toUpperCase()}
                </Card.Header>
                <hr />
                <Card.Image src={image} />
              </Card.Body>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </Layout>
  );
};

export default PokemonCard;
