import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default function ArtPieceDetails({
  slug,
  image,
  title,
  artist,
  year,
  genre,
  artPiecesInfo,
  setArtPiecesInfo,
}) {
  function onToggleFavorite() {
    const thisSlug = artPiecesInfo.find((el) => el.slug === slug);
    const thisSlugLike = thisSlug.isLike;
    setArtPiecesInfo(
      artPiecesInfo.map((el) => {
        if (el.slug === slug) {
          return { ...el, isLike: !thisSlugLike };
        }
        return { ...el };
      })
    );
  }

  function checkIfLiked() {
    const thisSlug = artPiecesInfo.find((el) => el.slug === slug);
    console.log("thisSlug", thisSlug.isLike);
    if (thisSlug.isLike) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <>
      <Layout>
        <Image src={image} alt={title} width="200" height="200"></Image>
        <p>Title: {title}</p>
        <p>Artist: {artist}</p>
        <p>Year: {year}</p>
        <p>Genre: {genre}</p>
        <FavoriteButton
          isFavorite={checkIfLiked}
          onToggleFavorite={onToggleFavorite}
        />
        <Link href="/art-pieces">BACK</Link>
      </Layout>
    </>
  );
}
