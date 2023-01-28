import { FC, useState } from "react";

import Head from "next/head";
import { Sidebar } from "../ui";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  // ? esto quiere decir que es opcional
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {

  return (
    <>
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
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <main className="container">{children}</main>
      </div>
      <div className="mobile-menu">menus mobile</div>
    </>
  );
};
