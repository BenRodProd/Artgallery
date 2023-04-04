export default function FavoriteButton({ slug, isFavorite, onToggleFavorite }) {
  console.log("slug", slug);
  return (
    <>
      <button onClick={() => onToggleFavorite(slug)}>
        {isFavorite ? "liked" : "notliked"}
      </button>
    </>
  );
}
