import Image from "next/image";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";
export default function Spotlight({ slug, image, artist }) {
  return (
    <>
      <Image src={image} alt={artist} width="300" height="300" />
      <p>Artist: {artist}</p>
      <FavoriteButton slug={slug} />
    </>
  );
}