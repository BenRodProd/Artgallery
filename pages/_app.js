import GlobalStyle from "../styles";
import Head from "next/head";
import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";
import { useEffect } from "react";
import Layout from "../components/Layout";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function App({ Component, pageProps }) {
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "artPiecesInfo",
    {
      defaultValue: [
        {
          slug: "orange-red-and-green",

          isLike: false,
        },
        {
          slug: "blue-and-red",

          isLike: false,
        },
        {
          slug: "clay-bust-sculptures",

          isLike: false,
        },
        {
          slug: "bread-and-fruits",

          isLike: false,
        },
        {
          slug: "kiwi-juice-on-glass",

          isLike: false,
        },
        {
          slug: "silhouette-of-trees",

          isLike: false,
        },
        {
          slug: "split-shot-of-whale",

          isLike: false,
        },
        {
          slug: "body-of-water",

          isLike: false,
        },
        {
          slug: "man-digital-illustration",

          isLike: false,
        },
        {
          slug: "woman-statue",

          isLike: false,
        },
        {
          slug: "majestic-greek-sculpture",

          isLike: false,
        },
      ],
    }
  );
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",

    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (artPiecesInfo === []) return <div>loading</div>;
  function onChangeArtPiecesInfo(info) {
    setArtPiecesInfo(info);
  }

  return (
    <>
      <Head>
        <title>Art Gallery</title>
      </Head>
      <Layout>
        <GlobalStyle />
        <h1>Art Gallery</h1>
        <Component
          {...pageProps}
          galleryData={data}
          artPiecesInfo={artPiecesInfo}
          setArtPiecesInfo={onChangeArtPiecesInfo}
        />
      </Layout>
    </>
  );
}
