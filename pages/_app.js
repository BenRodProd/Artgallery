import GlobalStyle from "../styles";
import Head from "next/head";
import useSWR from "swr";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <Head>
        <title>Art Gallery</title>
      </Head>
      <GlobalStyle />
      <h1>Art Gallery</h1>
      <Component
        {...pageProps}
        galleryData={data}
        artPiecesInfo={artPiecesInfo}
      />
      <Layout />
    </>
  );
}
