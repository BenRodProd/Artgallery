import styled from "styled-components";
import Navigation from "../components/Navigation";
import Spotlight from "../components/Spotlight";
import FavoriteButton from "../components/FavoriteButton";
const MainLayout = styled.div`
  text-align: center;
`;

export default function SpotLightPage({ galleryData }) {
  function pickRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }
  function getRandomData() {
    const randomIndex = pickRandomIndex(galleryData);
    return (
      <>
        <Spotlight
          image={galleryData[randomIndex].imageSource}
          artist={galleryData[randomIndex].artist}
          slug={galleryData[randomIndex].slug}
          galleryData={galleryData}
        />
      </>
    );
  }

  return (
    <div>
      <MainLayout>{getRandomData()}</MainLayout>
    </div>
  );
}
