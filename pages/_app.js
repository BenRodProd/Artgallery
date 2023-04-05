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
          colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
          isLike: false,
        },
        {
          slug: "blue-and-red",
          colors: ["#3f9eab", "#dfa597", "#323f6a", "#88d9ce", "#5a614c"],
          isLike: false,
        },
        {
          slug: "clay-bust-sculptures",
          colors: ["#27231d", "#af8b69", "#775942", "#8a745b", "#6c6c6c"],
          isLike: false,
        },
        {
          slug: "bread-and-fruits",
          colors: ["#dadee1", "#3c2938", "#994836", "#e1be47", "#8f9197"],
          isLike: false,
        },
        {
          slug: "kiwi-juice-on-glass",
          colors: ["#a6b33f", "#356e0b", "#eeeee4", "#bec99e", "#635523"],
          isLike: false,
        },
        {
          slug: "silhouette-of-trees",
          colors: ["#f1f3f4", "#161718", "#979898", "#7c7c7c", "#7c747c"],
          isLike: false,
        },
        {
          slug: "split-shot-of-whale",
          colors: ["#bccbd5", "#13517b", "#80acc5", "#78a2c4", "#081931"],
          isLike: false,
        },
        {
          slug: "body-of-water",
          colors: ["#203f4a", "#9ca1a5", "#2d738d", "#3a8bb1", "#74a5bf"],
          isLike: false,
        },
        {
          slug: "man-digital-illustration",
          colors: ["#3d803b", "#073204", "#c5dedb", "#90b59f", "#afc6b5"],
          isLike: false,
        },
        {
          slug: "woman-statue",
          colors: ["#161616", "#c9c8c5", "#6b6a69", "#8c8c89", "#8c848c"],
          isLike: false,
        },
        {
          slug: "majestic-greek-sculpture",
          colors: ["#978e8b", "#2a201e", "#483833", "#d8d5d8", "#53443b"],
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
