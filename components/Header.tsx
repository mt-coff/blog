import { VFC } from "react";
import Link from "next/link";
import { version } from "../package.json";

const Header: VFC = () => {
  return (
    <header className="h-24 bg-header-blue flex flex-col justify-center items-center px-6">
      <h1 className="text-white text-4xl font-bold">
        <Link href="/">mt_coff's blog</Link>
      </h1>
      <small className="text-xs text-white ml-2">v{version}</small>
    </header>
  );
};

export default Header;
