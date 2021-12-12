import { Bilboard, Footer, Header } from "@components/section";
import Head from "next/head";
import React from "react";

const MainLayout = ({ children }: any) => {
  return (
    <div>
      <Head>
        <title>Female Daily</title>
      </Head>
      <Header />
      <main className="my-5">
        {children}
      </main>
      <Footer />
      <div style={{ width: 970, height: 50 }} className="border text-center text-2xl border-gray-super-light px-10 font-bold text-gray-dark flex justify-center items-center bg-gray-light m-auto mt-2">
        Bottom Frame 970x50, 468x60, 320x50
      </div>
    </div>
  )
}

export default MainLayout;