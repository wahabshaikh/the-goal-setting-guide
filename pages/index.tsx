import type { NextPage } from "next";
import Head from "next/head";

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

      <main>
        <h1>The Goal Setting Guide</h1>
      </main>

      <footer>
        Made with ♥️ by{" "}
        <a href="http://twitter.com/wahabshaikh_">Wahab Shaikh</a>
      </footer>
    </>
  );
};

export default Home;
