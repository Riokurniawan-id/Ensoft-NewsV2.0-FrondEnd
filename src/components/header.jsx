import Profile from "@/asset-dummy/logo-strapi.jpg";
import Image from "next/image";

function Header() {
  return (
    <header className="bg-gray-50 snap-start">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 sm:pb-6 lg:px-8">
        <div className="pt-8">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Welcome To <span className="text-sky-500">Ensoft</span> News
          </h1>
          <p className="mt-1.5 text-sm text-gray-500">
            Your website has seen a 52% increase in traffic in the last month.
            Keep it up! 🚀
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
