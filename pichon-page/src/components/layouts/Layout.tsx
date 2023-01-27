import { FC, useState } from "react";

import Head from "next/head";
import { Navbar } from "../ui/Navbar";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  // ? esto quiere decir que es opcional
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {

  return (
    <div className="container is-fluid">
      <Head>
        <title>{title || "PC Studio"}</title>
        <meta name="author" content="Pichones Corp" />
        <meta name="description" content={`PC Studio - ${title}`} />
        <meta name="keywords" content={`${title}, Software, develpment`} />

        <meta property="og:title" content={`Informacion sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la pagina sobre ${title}`}
        />
        {/* <meta property="og:image" content={`${origin}/img/banner.png`} /> */}
      </Head>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};
