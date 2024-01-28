import { Inter } from "next/font/google";
import Header from "@/components/header";
import NewsCard from "@/components/NewsCard";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" bg-white relative">
      <div className="w-full sticky top-0 backdrop-filter backdrop-blur-md bg-opacity-100">
        <Navbar />
      </div>
      {/* <Sidebar /> */}

      <div className="container mx-auto">
        <Header />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </main>
  );
}
