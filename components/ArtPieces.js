import ArtPiecePreview from "./ArtPiecePreview";
import Link from "next/link";
const { v4: uuidv4 } = require("uuid");
import styled from "styled-components";
const Layout = styled.ul`
  list.style: none;
  padding: 0;
`;
export default function ArtPieces({ pieces }) {
  return (
    <>
      <Layout>
        {pieces.map((el) => (
          <Link key={uuidv4()} href={"/art-pieces/" + el.slug}>
            <ArtPiecePreview
              slug={el.slug}
              key={uuidv4()}
              image={el.imageSource}
              title={el.name}
              artist={el.artist}
            />
          </Link>
        ))}
      </Layout>
    </>
  );
}
