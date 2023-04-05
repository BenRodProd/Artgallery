import styled from "styled-components";

export default function ShowColor({ color }) {
  return (
    <>
      <ColorLayout color={color} />
    </>
  );
}
const ColorLayout = styled.div`
  width: 40px;
  height: 40px;
  border-style: 2px solid black;
  background-color: ${(props) => props.color};
`;
