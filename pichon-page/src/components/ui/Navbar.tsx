import Image from "next/image";
import NextLink from "next/link";

export const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NextLink className="navbar-item" href="/" passHref>
          <h2>PC</h2>
          <h3>Studio</h3>
        </NextLink>
        <NextLink className="navbar-item" href="/" passHref>
          <Image
            src={"https://bulma.io/images/bulma-logo.png"}
            alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
            width={112}
            height={28}
          />
        </NextLink>

        <NextLink
          href="/"
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </NextLink>
      </div>
    </nav>
  );
};
