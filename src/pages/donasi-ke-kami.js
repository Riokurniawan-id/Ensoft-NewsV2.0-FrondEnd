import Head from "next/head";
import LayoutIndex from "@/layout/LayoutIndex";

export default function DonasiKeKami() {
  return (
    <>
      <Head>
        <title>Ensoft</title>
        <link rel="icon" href="/logo-strapi.jpg" />
      </Head>
      <LayoutIndex>
        <div className=" text-center">
          <h1 className="text-slate-800 text-3xl py-4 w-full border-b-2 font-bold">
            Donasi Ke Kami
          </h1>
        </div>
        <div className="container ">
          <h2 className="text-slate-700 text-2xl pt-4 pb-1 w-full font-bold">
            Selamatkan Masa Depan Informasi
          </h2>
          <p className="text-slate-600 text-md pt-4 w-full font-medium">
            <span className="font-bold">Ensoft ID</span> adalah proyek berita
            yang berdedikasi untuk memberikan informasi yang menarik dan
            relevan, disajikan dengan kemudahan dan kejelasan seperti media
            sosial. <br />
            <br /> <span className="font-bold">Anda</span> adalah bagian penting
            dari perjalanan kami, dan kami membutuhkan dukungan Anda untuk terus
            berkembang. Dengan donasi Anda, Anda membantu kami memastikan bahwa
            kami dapat terus memberikan berita yang bermanfaat dan terpercaya
            kepada Anda dan komunitas kami.
          </p>
        </div>
        <div className="flex justify-center mt-16 mb-10 ">
          <div className="group justify-center flex rounded-xl group-hover:scale-125">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 p-5 px-7 rounded-xl drop-shadow-lg text-slate-50 text-lg font-semibold cursor-pointer animate-bounce">
              Donasi Sekarang
            </button>
          </div>
        </div>
        <p className="text-slate-500 text-md w-full font-semibold text-center mb-40 container">
          Setiap sumbangan memiliki dampak yang signifikan pada misi kami.
          <br />
          <span className="text-lg font-bold text-slate-600">
            Terima kasih atas dukungan Anda.
          </span>
        </p>
      </LayoutIndex>
    </>
  );
}
