import styled from "styled-components";

import Spotlight from "../components/Spotlight";
import { useEffect } from "react";

const MainLayout = styled.div`
  text-align: center;
`;

export default function SpotLightPage({
  setArtPiecesInfo,
  galleryData,
  artPiecesInfo,
}) {
  function pickRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }
  function showRandomSpotlight() {
    const randomIndex = pickRandomIndex(galleryData);

    return (
      <>
        <Spotlight
          image={galleryData[randomIndex].imageSource}
          artist={galleryData[randomIndex].artist}
          slug={galleryData[randomIndex].slug}
          artPiecesInfo={artPiecesInfo}
          setArtPiecesInfo={setArtPiecesInfo}
        />
      </>
    );
  }

  console.log(artPiecesInfo);
  return (
    <div>
      <MainLayout>{showRandomSpotlight()}</MainLayout>
    </div>
  );
}
