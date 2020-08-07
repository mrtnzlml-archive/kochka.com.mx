import Head from "next/head";

import KochkaIcon from "./KochkaIcon";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <KochkaIcon />
      </main>
    </>
  );
}
