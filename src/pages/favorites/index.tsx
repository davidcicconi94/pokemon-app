import React, { useEffect, useState } from "react";

import { Layout } from "../../../components/layouts";
import { localFavorites } from "../../../utils";
import { Favorites, NoFavorites } from "../../../components/ui";

const FavoritesPage = () => {
  const [favoritePoke, setFavoritePoke] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePoke(localFavorites.pokemonFavorites());
  }, []);

  return (
    <Layout title="My Pokemons">
      {favoritePoke.length === 0 ? (
        <NoFavorites />
      ) : (
        <Favorites pokemons={favoritePoke} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
