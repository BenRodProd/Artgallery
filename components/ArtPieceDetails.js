import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
const { v4: uuidv4 } = require("uuid");
import FavoriteButton from "./FavoriteButton";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import ShowColor from "./ShowColor";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ColorLayout = styled.div`
  display: flex;
`;
export default function ArtPieceDetails({
  slug,
  image,
  title,
  artist,
  year,
  genre,
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
  function thisComment() {
    const thisSlug = artPiecesInfo.find((el) => el.slug === slug);
    if (thisSlug.comment) {
      return thisSlug.comment;
    }
    return "";
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
        <p>__________________</p>
        <h3>Color Palette</h3>
        <ColorLayout>
          {colors.map((el) => (
            <ShowColor key={uuidv4()} color={el} />
          ))}
        </ColorLayout>
        <h3>Comment</h3>
        <Comments comments={thisComment()} />
        <CommentForm
          slug={slug}
          artPiecesInfo={artPiecesInfo}
          setArtPiecesInfo={setArtPiecesInfo}
        />
        <Link href="/art-pieces">BACK</Link>
      </Layout>
    </>
  );
}
