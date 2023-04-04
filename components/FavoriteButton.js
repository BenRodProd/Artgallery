export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  console.log(isFavorite());
  return (
    <>
      <button onClick={() => onToggleFavorite()}>
        {isFavorite ? "liked" : "notliked"}
      </button>
    </>
  );
}
