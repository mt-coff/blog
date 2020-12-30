import { VFC } from "react";
import Link from "next/link";

const Header: VFC = () => {
  return (
    <header className="h-24 bg-header-blue flex justify-center items-center px-6">
      <h1 className="text-white text-4xl font-bold">
        <Link href="/">mt_coff's blog</Link>
      </h1>
    </header>
  );
};

export default Header;
