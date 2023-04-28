import { Card, Grid, Image } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { FC } from "react";

interface Props {
  id: number;
}

const FavoriteCard: FC<Props> = ({ id }) => {
  const router = useRouter();

  const handleClickFavorite = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card isHoverable isPressable onPress={handleClickFavorite}>
        <Card.Body>
          <Image
            width={100}
            height={100}
            alt={`pokemon-${id}`}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          />
        </Card.Body>
      </Card>
    </Grid>
  );
};

export default FavoriteCard;
