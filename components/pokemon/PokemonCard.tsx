import React, { FC } from "react";
import { Layout } from "../layouts";
import { Card, Grid } from "@nextui-org/react";
import { Pokemon } from "../../interfaces";
import { useRouter } from "next/router";

interface Props {
  pokemon: Pokemon;
}

const PokemonCard: FC<Props> = ({ pokemon: { id, name, image, url } }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/name/${name}`);
  };

  return (
    <>
      <Grid xs={6} sm={4} md={2} xl={2} key={id}>
        <Card
          onClick={handleClick}
          isHoverable
          isPressable
          css={{ padding: "1.2em" }}
        >
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
    </>
  );
};

export default PokemonCard;
