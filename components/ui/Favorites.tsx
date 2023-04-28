import React from "react";

import { Grid } from "@nextui-org/react";

import { FavoriteCard } from "../pokemon";

interface Props {
  pokemons: number[];
}

const Favorites: React.FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id: number) => (
        <FavoriteCard id={id} key={id} />
      ))}
    </Grid.Container>
  );
};

export default Favorites;
