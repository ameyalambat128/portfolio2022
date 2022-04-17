import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Landing from "../components/Landing";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ameya Lambat</title>
        <meta name="description" content="Created by Ameya Lambat" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <Landing />
      <About />
      <Skills />
    </div>
  );
}
