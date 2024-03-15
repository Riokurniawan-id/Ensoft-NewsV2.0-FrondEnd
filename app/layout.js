"use client";

import { Inter } from "next/font/google";
import "./globals.css";

import { useState } from "react";

// component
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Fungsi untuk mengatur status Sidebar
  function toggleSidebar(isOpen) {
    setIsSidebarOpen(isOpen);
  }

  function handleCloseSidebar(isOpen) {
    setIsSidebarOpen(!isOpen);
  }
  return (
    <html lang="en">
      <body>
        <main className=" bg-white relative h-screen max-h-screen overflow-hidden scroll-smooth md:container mx-auto">
          <div className="w-full sticky top-0 backdrop-filter backdrop-blur-md bg-opacity-100 z-50 ">
            <Navbar
              toggleSidebar={toggleSidebar}
              isSidebarOpen={isSidebarOpen}
            />
          </div>

          <div className=" md:container mx-auto relative flex h-full">
            <div
              className={`md:w-1/4 absolute md:static backdrop-filter backdrop-blur-md bg-opacity-100 h-screen bg-white transition-all duration-300 ${
                isSidebarOpen ? "left-0 z-50 w-48" : "-left-full "
              } md:left-0`}
            >
              <Sidebar />
            </div>
            <div
              className={`w-screen bg-slate-700 opacity-75 absolute h-screen md:hidden ${
                isSidebarOpen ? "left-0 z-40" : "-left-full "
              } md:left-0`}
              onClick={handleCloseSidebar}
            ></div>

            <div className=" z-0 w-full overflow-x-hidden max-h-full overflow-y-auto relative snap-mandatory snap-y scroll-smooth duration-300">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
