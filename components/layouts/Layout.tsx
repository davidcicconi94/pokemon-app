import Head from "next/head";
import React, { ReactNode } from "react";
import { Navbar } from "../ui";

interface Props {
  children: ReactNode;
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: React.FC<Props> = ({ children, title }) => {
  console.log(origin);

  return (
    <>
      <Head>
        <title> {`${title}`} </title>
        <meta name="author" content="David Cicconi" />
        <meta name="description" content="Información sobre el pokemon ..." />
        <meta name="keywords" content={`${title} , pokemon, pokedex`} />

        <meta property="og:title" content={`Info about ${title}`} />
        <meta
          property="og:description"
          content={`This is page about ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
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
