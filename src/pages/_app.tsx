import "@/styles/base.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <title>park-ji-won-portfolio</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
