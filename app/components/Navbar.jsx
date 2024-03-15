"use client";

function Navbar({ toggleSidebar, isSidebarOpen }) {
  function handleTestClick() {
    alert("testing work");
  }

  function hamburgerClick() {
    toggleSidebar(!isSidebarOpen);
  }

  return (
    <div className="md:container mx-auto py-3 border-b px-4 md:px-0">
      <div className="flex gap-4 justify-between md:justify-end mx-auto">
        <a
          href="#"
          className="shrink-0 bg-white p-2.5 text-gray-600 md:hidden"
          onClick={hamburgerClick}
        >
          <span className="sr-only">hamburger</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </a>
        <div className="flex gap-4 px-2">
          <div className="relative">
            <label className="sr-only" htmlFor="search">
              {" "}
              Search{" "}
            </label>

            <input
              className="h-10 w-full rounded-full border-none bg-white pe-10 ps-4
              text-sm shadow-sm sm:w-96 text-black peer focus:scale-150 focus:shadow-md focus:translate-y-9 focus:rounded-md md:focus:scale-100 md:focus:translate-y-0 md:focus:rounded-full transition-all focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:-translate-x-3 md:focus:translate-x-0"
              id="search"
              type="search"
              placeholder=" 🔎 Search News..."
            />

            <button
              type="button"
              className="peer-focus:opacity-0 md:peer-focus:opacity-100 absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
            >
              <span className="sr-only">Search</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          <a
            href="#"
            className=" shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow-lg"
          >
            <span className="sr-only">Notifications</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </a>

          <a
            type="button"
            className="shrink-0 rounded-full bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow-lg"
            onClick={handleTestClick}
          >
            <span className="sr-only">mode</span>
            {/* matahari */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            {/* matahari */}

            {/* bulan */}
            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-5 w-5"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg> */}
            {/* bulan */}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
