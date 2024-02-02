import Profile from "@/asset-dummy/logo-strapi.jpg";
import Image from "next/image";
import Hamburger_menu from "@/asset/hamburger_menu.svg";

const Navbar = () => {
  return (
    <div className="container mx-auto py-3 ">
      <div class="flex gap-4 justify-center md:justify-between mx-auto">
        <div className="flex text-2xl font-bold text-gray-900 sm:text-3xl">
          <h1>Ensoft.news</h1>
          <a href="#" class="shrink-0">
            <span class="sr-only">Profile</span>
            <Image
              src={Hamburger_menu}
              alt="Picture of the author"
              class="h-5 w-10 object-cover fill-slate-400"
            />
          </a>
          <span
            aria-hidden="true"
            class="h-6 w-px rounded-full bg-gray-200"
          ></span>
        </div>
        <div className="flex gap-4">
          <div class="relative">
            <label class="sr-only" for="search">
              {" "}
              Search{" "}
            </label>

            <input
              class="h-10 w-full rounded-full border-none bg-white pe-10 ps-4
            text-sm shadow-sm sm:w-96 text-black peer focus:scale-150 focus:shadow-md focus:translate-y-9 focus:rounded-md md:focus:scale-100 md:focus:translate-y-0 md:focus:rounded-full transition-all focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              id="search"
              type="search"
              placeholder=" 🔎 Search News..."
            />

            <button
              type="button"
              class="peer-focus:opacity-0 md:peer-focus:opacity-100 absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
            >
              <span class="sr-only">Search</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          <a
            href="#"
            class=" shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
          >
            <span class="sr-only">Notifications</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
