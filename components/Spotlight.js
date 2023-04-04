import Image from "next/image";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";
export default function Spotlight({
  setArtPiecesInfo,
  artPiecesInfo,
  slug,
  image,
  artist,
}) {
  console.log("inside Spotlight", artPiecesInfo);
  function onToggleFavorite() {
    const thisSlug = artPiecesInfo.find((el) => el.slug === slug);
    setArtPiecesInfo();
  }

  function checkIfLiked() {
    const thisSlug = artPiecesInfo.find((el) => el.slug === slug);
    console.log("thisSlug", thisSlug);
    if (thisSlug.isLiked) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <>
      <Image src={image} alt={artist} width="300" height="300" />
      <p>Artist: {artist}</p>
      <FavoriteButton
        isFavorite={checkIfLiked}
        onToggleFavorite={onToggleFavorite}
      />
    </>
  );
}
