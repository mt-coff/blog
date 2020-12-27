import { VFC } from "react";
import Link from "next/link";

const Header: VFC = () => {
  return (
    <header className="h-16 bg-mt-green flex justify-center sm:justify-start items-center px-6">
      <h1 className="text-white text-4xl font-bold">
        <Link href="/">
          mt_coff's blog
        </Link>
      </h1>
    </header>
  );
};

export default Header;
