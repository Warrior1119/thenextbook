import Head from "next/head";

import Layout from "../components/Layout";

const Home: React.FunctionComponent = () => {
  return (
    <Layout>
      <Head>
        <title>The Next Book</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Home Page</h1>
    </Layout>
  );
};

export default Home;
