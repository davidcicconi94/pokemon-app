import React from "react";

import { GetStaticProps } from "next";
import { pokeApi } from "../../../api";

const PokemonByName = () => {
  return <div></div>;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {},
  };
};

export default PokemonByName;
