import Link from "next/link";

const TheHeader = () => {
  return (
    <header>
      <Link className="link" href="/">
        Home
      </Link>
      <Link className="link" href="/blog">
        Blog
      </Link>
      <Link className="link" href="/about">
        About
      </Link>
    </header>
  );
};

export { TheHeader };
