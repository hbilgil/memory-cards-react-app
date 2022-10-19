import { createGlobalStyle } from "styled-components";
import backGroundPic from "../images/background.jpeg";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    word-wrap: break-word;
  }

  html {
    font-size: 62.5%;
    line-height: 1.6; 
    position: relative;
    background-image: url(${backGroundPic});
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
  }

  body {
    font-family: "Nunito", sans-serif;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.dark};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.2;
  }

  a {
    text-decoration: none;
  }

  img {
    display: block;
    width: 100%;
  }

  button,
  input, 
  textarea {
    border: none;
    outline: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;