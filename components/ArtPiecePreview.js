import Image from "next/image";
import Link from "next/link";
const { v4: uuidv4 } = require("uuid");
import FavoriteButton from "./FavoriteButton";
export default function ArtPiecePreview({
  galleryData,
  slug,
  image,
  title,
  artist,
  colors,
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

    if (thisSlug.isLike) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <li>
        <Link key={uuidv4()} href={"/art-pieces/" + slug}>
          <Image width="100" height="100" src={image} alt={title}></Image>
        </Link>
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
