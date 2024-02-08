import { Inter } from "next/font/google";

import LayoutIndex from "@/layout/LayoutIndex";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <LayoutIndex />
    </>
  );
}
