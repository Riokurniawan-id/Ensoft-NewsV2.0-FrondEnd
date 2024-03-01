import { Inter } from "next/font/google";
import Head from "next/head";
import LayoutIndex from "@/layout/LayoutIndex";

// component
import Header from "@/components/Header";
import NewsCard from "@/components/NewsCard";
import Dummy from "@/components/dummy";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ensoft</title>
        <link rel="icon" href="/logo-strapi.jpg" />
      </Head>
      <LayoutIndex>
        <Header />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </LayoutIndex>
    </>
  );
}
