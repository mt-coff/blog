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
      <meta name="description" content="mt_coff's blog" />
      <meta property="og:url" content="https://blog.mt-coff.me" />
      <meta
        property="og:type"
        content={router.asPath.includes("posts/") ? "website" : "article"}
      />
      <meta
        property="og:title"
        content={`mt-coff's blog${title ? " | " + title : ""}`}
      />
      <meta property="og:description" content="mt-coff's blog" />
      <meta property="og:site_name" content="mt-coff's blog" />
      <meta
        property="og:image"
        content={image ? `https://blog.mt-coff.me/${image}.png` : ""}
      />
      <title>{`mt-coff's blog${title ? " | " + title : ""}`}</title>
    </Head>
  );
};
