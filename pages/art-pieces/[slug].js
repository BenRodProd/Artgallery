import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/ArtPieceDetails";

export default function SlugPage({
  galleryData,
  setArtPiecesInfo,
  artPiecesInfo,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const currentPiece = galleryData.find((object) => object.slug === slug);

  return (
    <div>
      <ArtPieceDetails
        image={currentPiece.imageSource}
        title={currentPiece.name}
        artist={currentPiece.artist}
        slug={currentPiece.slug}
        year={currentPiece.year}
        genre={currentPiece.genre}
        artPiecesInfo={artPiecesInfo}
        setArtPiecesInfo={setArtPiecesInfo}
      />
    </div>
  );
}
