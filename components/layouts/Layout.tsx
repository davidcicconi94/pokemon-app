import Head from "next/head";
import React, { ReactNode } from "react";
import Navbar from "../ui/Navbar";
import { useTheme } from "@nextui-org/react";

interface Props {
  children: ReactNode;
  title?: string;
}

export const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title> {title || "Pokemon List"} </title>
        <meta name="author" content="David Cicconi" />
        <meta name="description" content="Información sobre el pokemon ..." />
        <meta name="keywords" content="... , pokemon, pokedex" />
      </Head>

      {/* Navbar */}
      <Navbar />

      <main
        style={{
          padding: "0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
