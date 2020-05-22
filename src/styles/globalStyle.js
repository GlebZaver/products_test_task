import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  };

  #root {
    height: 100%;
    display: flex;
  }

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #f1f1f1;
  }

  .content {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 32px;
    background-color: #f1f1f1;
  }
`;

export default GlobalStyle;
