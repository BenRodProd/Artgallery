import Link from "next/link";
import styled from "styled-components";
const NavLayout = styled.nav`
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: grey;
`;
export default function Navigation() {
  return (
    <>
      <NavLayout>
        <Link href="/">Spotlight</Link>
        <Link href="/art-pieces">Artpieces</Link>
      </NavLayout>
    </>
  );
}
