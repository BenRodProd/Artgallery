import ArtPieces from "../../components/Artpieces";
import styled from "styled-components";
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
const ListLayout = styled.ul`
  list-style: none;
  padding: 0;
`;
export default function FavoritesPage({
  artPiecesInfo,
  galleryData,
  setArtPiecesInfo,
}) {
  console.log(galleryData);
  const likedPieces = artPiecesInfo.filter((el) => el.isLike);
  const sendLikedPieces = likedPieces.flatMap((element) =>
    galleryData.filter((el) => el.slug === element.slug)
  );
  console.log(sendLikedPieces);
  return (
    <>
      <Layout>
        <h2>Your Favorites</h2>
        <ListLayout>
          <ArtPieces
            pieces={sendLikedPieces}
            artPiecesInfo={artPiecesInfo}
            setArtPiecesInfo={setArtPiecesInfo}
          />
        </ListLayout>
      </Layout>
    </>
  );
}
