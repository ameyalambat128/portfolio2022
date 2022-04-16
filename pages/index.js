import Head from "next/head";
import Image from "next/image";
import Landing from "../components/Landing";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ameya Lambat</title>
        <meta name="description" content="Created by Ameya Lambat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h1 className="text-bold">Hello World</h1> */}
      <Landing />
    </div>
  );
}
