import { VFC } from "react";
import Image from "next/image";
import BaseLayout from "../components/BaseLayout";

const NotFound: VFC = () => {
  return (
    <BaseLayout>
      <div className="flex items-center justify-center flex-1">
        <Image
          src="/img/mt_coffee.png"
          width={128}
          height={128}
          layout="fixed"
        />
        <span className="text-3xl pl-8 ml-8 border-l-2 h-24 flex items-center">
          404 Not Found
        </span>
      </div>
    </BaseLayout>
  );
};

export default NotFound;
