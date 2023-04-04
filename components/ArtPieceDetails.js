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
}) {
  return (
    <>
      <Layout>
        <Image src={image} alt={title} width="200" height="200"></Image>
        <p>Title: {title}</p>
        <p>Artist: {artist}</p>
        <p>Year: {year}</p>
        <p>Genre: {genre}</p>
        <FavoriteButton slug={slug} />
        <Link href="/art-pieces">BACK</Link>
      </Layout>
    </>
  );
}
