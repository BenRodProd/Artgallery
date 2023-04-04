import styled from "styled-components";
import Navigation from "./Navigation";
const NavLayout = styled.nav`
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: grey;
`;
export default function Layout() {
  return (
    <>
      <NavLayout>
        <Navigation />
      </NavLayout>
    </>
  );
}
