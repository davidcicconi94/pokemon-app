import React from "react";
import { Container, Image, Text } from "@nextui-org/react";

const NoFavorites = () => {
  return (
    <Container
      display="flex"
      direction="column"
      css={{
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <Text h2 content="center">
        {" "}
        No favorites :(
      </Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png"
        alt="snorlax.png"
        width={200}
        height={200}
      />
    </Container>
  );
};

export default NoFavorites;
