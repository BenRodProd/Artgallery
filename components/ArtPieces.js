import ArtPiecePreview from "./ArtPiecePreview";

const { v4: uuidv4 } = require("uuid");
import styled from "styled-components";
const NavigationLayout = styled.ul`
  list.style: none;
  padding: 0;
`;
export default function ArtPieces({ pieces, artPiecesInfo, setArtPiecesInfo }) {
  return (
    <>
      <NavigationLayout>
        {pieces.map((el) => (
          <ArtPiecePreview
            slug={el.slug}
            key={uuidv4()}
            image={el.imageSource}
            title={el.name}
            artist={el.artist}
            galleryData={pieces}
            artPiecesInfo={artPiecesInfo}
            setArtPiecesInfo={setArtPiecesInfo}
            colors={el.colors}
          />
        ))}
      </NavigationLayout>
    </>
  );
}
