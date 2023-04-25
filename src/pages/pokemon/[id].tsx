import React from "react";

import { Layout } from "../../../components/layouts";

import { useRouter } from "next/router";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";

interface Props {
  id: string;
  name: string;
}

const Details: NextPage<Props> = ({ id, name }) => {
  const { query } = useRouter();
  console.log(query);

  return (
    <Layout title="Detalle">
      <h2>Aca estan los detalles</h2>
      <h3>
        {" "}
        {id} - {name}{" "}
      </h3>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  return {
    paths: [
      {
        params: {
          id: "1",
        },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      id: "1",
      name: "Bolvasor",
    },
  };
};

export default Details;
