import { NextPage } from "next";

import { Layout } from "../../components/layouts";

const Home: NextPage = () => {
  return (
    <>
      <Layout title="Pokemon App">
        <h2>Hola pokemones</h2>
      </Layout>
    </>
  );
};

export default Home;
