import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Gothic A1', sans-serif;
    box-sizing: border-box;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }

  .header {
    height: 80px;
  }
  .main {
    display: grid;
    grid-template-columns: repeat(2,1fr);

    min-height: 100vh;
  }
`;

export default GlobalStyle;
