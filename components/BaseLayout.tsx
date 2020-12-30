import { FC } from "react";
import Header from "./Header";
import Footer from "./Footer";

const BaseLayout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex flex-col my-8 w-full items-center justify-start">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default BaseLayout;
