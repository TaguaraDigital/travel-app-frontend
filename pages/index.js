import Head from "next/head";
import HeroSlider from "../components/Hero";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Taguara Digital - Next Travel Aplication</title>
        <meta name="description" content="Aplication for a full stack job" />
        <meta name="keywords" content="next node react" />
        <meta name="author" content="Youssef Sabbagh" />
        <meta name="copyright" content="Youssef Sabbagh" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroSlider />
      </main>
    </>
  );
}
