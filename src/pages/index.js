import { Inter } from "next/font/google";
import Head from "next/head";
import Logo from "@/asset-dummy/logo-strapi.jpg";
import LayoutIndex from "@/layout/LayoutIndex";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ensoft</title>
        <link rel="icon" href="/logo-strapi.jpg" />
      </Head>
      <LayoutIndex />
    </>
  );
}
