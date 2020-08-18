import Head from "next/head";
import { NextPageContext } from "next";

export default function Home({}) {
  return (
    <div className="container">
      <Head>
        <title>November Cloud</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}

async function getServerSideProps(context: NextPageContext) {
  const r = await fetch("https://api.novemberai.com/cloud/user/");
  let auth = r.json();
  return { props: {} };
}
