import styled from "styled-components";

import ArtPieces from "../../components/ArtPieces";
const Layout = styled.div`
  text-align: center;
  background-color: beige;
`;
export default function ArtPiecesPage({ galleryData }) {
  return (
    <>
      <Layout>
        <ArtPieces pieces={galleryData} />
      </Layout>
    </>
  );
}