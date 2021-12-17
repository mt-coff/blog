import Head from "next/head";
import { useRouter } from "next/router";
import { VFC } from "react";

type Props = {
  title?: string;
  image?: string;
};

export const Meta: VFC<Props> = ({ title, image }) => {
  const router = useRouter();

  return (
    <Head>
      <meta name="description" content="blog.mt_coff" />
      <meta property="og:url" content="https://blog.mt-coff.me" />
      <meta
        property="og:type"
        content={router.asPath.includes("posts/") ? "website" : "article"}
      />
      <meta
        property="og:title"
        content={`blog.mt-coff ${title ? " | " + title : ""}`}
      />
      <meta property="og:description" content="mt_coff's blog." />
      <meta property="og:site_name" content="blog.mt_coff" />
      <meta
        property="og:image"
        content={image ? `https://blog.mt-coff.me/image/${image}.png` : ""}
      />
      <title>{`blog.mt_coff${title ? " | " + title : ""}`}</title>
    </Head>
  );
};
