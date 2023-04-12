import Head from "next/head";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title?: string;
}

export const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title> {title || "Pokemon List"} </title>
        <meta name="author" content="David Cicconi" />
        <meta name="description" content="Información sobre el pokemon ..." />
        <meta name="keywords" content="... , pokemon, pokedex" />
      </Head>

      {/* Navbar */}

      <main>{children}</main>
    </>
  );
};
