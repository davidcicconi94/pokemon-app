import React, { useEffect, useState } from "react";

import { Layout } from "../../../components/layouts";
import NoFavorites from "../../../components/ui/NoFavorites";
import { localFavorites } from "../../../utils";

const FavoritesPage = () => {
  const [favoritePoke, setFavoritePoke] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePoke(localFavorites.pokemonFavorites());
  }, []);

  console.log(favoritePoke);
  return (
    <Layout title="My Pokemons">
      <NoFavorites />
    </Layout>
  );
};

export default FavoritesPage;
