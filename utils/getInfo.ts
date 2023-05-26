import { pokeApi } from "../api";
import { DetailsPoke } from "../interfaces";

export const getInfo = async (urlType: string) => {
  const { data } = await pokeApi.get<DetailsPoke>(`/pokemon/${urlType}`);

  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
    types: data.types,
  };
};