import { NextPage, GetStaticProps } from "next";

import { Layout } from "../../components/layouts";

const Home: NextPage = (props) => {
  return (
    <>
      <Layout title="Pokemon App">
        <ul>
          <li>Pokemones</li>
          <li>Pokemones</li>
          <li>Pokemones</li>
          <li>Pokemones</li>
        </ul>
      </Layout>
    </>
  );
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log("Hola mundo"); // este console.log no aparece en el cliente, sino en la consola del servidor, ya que se ejecuta ahi mismo

  return {
    props: {}, // estas props son las unicas que llegan al cliente
  };
};

export default Home;
