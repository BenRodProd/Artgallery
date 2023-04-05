import Heart from "../public/assets/heart.svg";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <>
      <button onClick={() => onToggleFavorite()}>
        {isFavorite() ? (
          <Heart width="50" height="50" fill="red" />
        ) : (
          <Heart width="50" height="50" />
        )}
      </button>
    </>
  );
}
