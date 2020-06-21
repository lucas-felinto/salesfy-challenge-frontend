import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    background-color: #993399;
  }

  body, input, button {
    font-family: Graphik-Medium, Graphik-Regular, "Gotham SSm A", "Gotham SSm B", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Graphik-Medium, Graphik-Regular, "Gotham SSm A", "Gotham SSm B", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
