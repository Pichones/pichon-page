import { FC, useState } from "react";

import Head from "next/head";
import { Navbar } from "../ui/Navbar";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  // ? esto quiere decir que es opcional
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  const defaultDark =
    typeof window === "undefined"
      ? false
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [dark, setDark] = useState<boolean>(defaultDark);

  return (
    <div className="container is-fluid" data-theme={dark ? "dark" : "light"}>
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
      <div className="field">
        <input
          type="checkbox"
          defaultChecked={dark}
          onChange={() => setDark(!dark)}
        />
        <label>Theme {dark}</label>
      </div>

      <main>{children}</main>
    </div>
  );
};
