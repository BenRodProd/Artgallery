import styled from "styled-components";
import Navigation from "./Navigation";
const NavLayout = styled.nav`
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: grey;

  padding-top: 25px;
  margin-top: 50px;
`;
export default function Layout({ children }) {
  return (
    <>
      {children}
      <br />
      <br />
      <NavLayout>
        <Navigation />
      </NavLayout>
    </>
  );
}
