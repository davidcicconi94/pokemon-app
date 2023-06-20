import { pokeApi } from "../api";
import { DetailsPoke } from "../interfaces";

export const getInfo = async (urlType: string) => {
  try {
    const { data } = await pokeApi.get<DetailsPoke>(`/pokemon/${urlType}`);

    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
      types: data.types,
      height: data.height,
      weight: data.weight,
    };
  } catch (error) {
    return null;
  }
};
