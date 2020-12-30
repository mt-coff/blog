import { VFC } from "react";
import Image from "next/image";

const Profile: VFC = () => {
  return (
    <section className="flex items-center max-h-32 p-2 mx-4 border rounded-tl-xl rounded-br-xl lg:flex-grow-0">
      <Image
        className="rounded-full"
        src="/img/mt_coff.jpg"
        width={48}
        height={48}
        layout="fixed"
      />
      <div className="ml-2 w-52 text-xs">
        <p>name: mt_coff</p>
        <p>
          コーヒーが好きなエンジニアです。主にフロントエンドをやっています。
        </p>
      </div>
    </section>
  );
};

export default Profile;
