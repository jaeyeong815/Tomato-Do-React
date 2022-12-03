import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gothic A1', sans-serif;
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
    min-width: 700px;
  }
  .main {
    display: grid;
    grid-template-columns: repeat(2,700px);
    justify-content: center;
    @media (max-width: 1370px) {
      grid-template-columns: repeat(1,700px);
    }
  }

  .main >div {
    padding-bottom: 50px;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
