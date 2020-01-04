import React from "react";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <div className="w-full h-screen flex flex-col items-center justify-center">
    <h1 className="text-5xl">Page is not found</h1>
    <p>お探しのページは見つかりませんでした.</p>
    <Link className="text-blue-300 underline" to="/">
      トップに戻る
    </Link>
  </div>
);

export default NotFoundPage;
