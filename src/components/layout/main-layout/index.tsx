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
      <main className="container my-5">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout;