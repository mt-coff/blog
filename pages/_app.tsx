import Head from "next/head";
import "tailwindcss/tailwind.css";

function mt_coffBlogApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <style>{`
          html,
          body {
            font-size: 16px;
          }
          #__next {
            display: flex;
            min-height: 100vh;
            flex-direction: column;
          }
        `}</style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default mt_coffBlogApp;
