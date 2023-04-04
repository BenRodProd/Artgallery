import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
export default function ArtPiecePreview({
  galleryData,
  slug,
  image,
  title,
  artist,
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
      <li>
        <Image width="100" height="100" src={image} alt={title}></Image>
        <p>Title: {title}</p>
        <p>Artist: {artist}</p>
        <FavoriteButton
          onToggleFavorite={onToggleFavorite}
          isFavorite={checkIfLiked}
        />
        <p>_____________</p>
      </li>
    </>
  );
}
