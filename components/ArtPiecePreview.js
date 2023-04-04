import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
export default function ArtPiecePreview({
  galleryData,
  slug,
  image,
  title,
  artist,
}) {
  return (
    <>
      <li>
        <Image width="100" height="100" src={image} alt={title}></Image>
        <p>Title: {title}</p>
        <p>Artist: {artist}</p>
        <FavoriteButton slug={slug} galleryData={galleryData} />
        <p>_____________</p>
      </li>
    </>
  );
}
