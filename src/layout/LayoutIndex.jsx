import Header from "@/components/Header";
import NewsCard from "@/components/NewsCard";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
export default function LayoutIndex() {
  return (
    <main className=" bg-white relative h-screen max-h-screen overflow-hidden scroll-smooth md:container">
      <div className="w-full sticky top-0 backdrop-filter backdrop-blur-md bg-opacity-100 z-50 ">
        <Navbar />
      </div>

      <div className=" md:container mx-auto relative flex h-full">
        <div
          className={`w-1/2 absolute md:static backdrop-filter backdrop-blur-md bg-opacity-100 h-screen -left-full md:left-0`}
        >
          <Sidebar />
        </div>

        <div className=" z-0 max-w-full overflow-x-hidden max-h-full overflow-y-auto relative snap-mandatory snap-y scroll-smooth duration-300">
          <Header />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </main>
  );
}
