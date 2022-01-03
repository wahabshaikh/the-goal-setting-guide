import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Goal Setting Guide</title>
        <meta
          name="description"
          content="An online platform based on Sahil Bloom's 'The Goal Setting Guide'"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1>The Goal Setting Guide</h1>
      </Layout>
    </>
  );
};

export default Home;
