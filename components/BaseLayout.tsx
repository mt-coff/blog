import { FC } from "react";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  className?: string;
};

const BaseLayout: FC<Props> = ({ children, className }) => {
  return (
    <>
      <Header />
      <main className={`flex flex-1 ${className}`}>{children}</main>
      <Footer />
    </>
  );
};

export default BaseLayout;
