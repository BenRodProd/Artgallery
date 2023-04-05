import styled from "styled-components";
import Heart from "../public/assets/heart.svg";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <>
      <button onClick={() => onToggleFavorite()}>
        <StyledHeart isFavorite={isFavorite()} />
      </button>
    </>
  );
}
const StyledHeart = styled(Heart)`
  fill: ${(props) => (props.isFavorite ? "red" : "black")};
  width: 50px;
`;
