import { Inter } from "next/font/google";
import Header from "@/components/header";
import NewsCard from "@/components/NewsCard";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-full bg-white">
      <Navbar />
      <Sidebar />
      <Header />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </main>
  );
}
