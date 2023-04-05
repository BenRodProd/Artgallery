import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    justify-items:center;
    margin: 0;
    font-family: system-ui;
  }
  h1 {
    text-align:center;
    background-color:grey;
  }
  a {
    text-decoration:none;
    color: black;
  }

`;
