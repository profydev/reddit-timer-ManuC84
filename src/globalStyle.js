import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;

  }
  body {
  
    cursor: default;

  }
  a {
    text-decoration: none;
    color:#636363;
  }
  li{
    list-style: none;
  }

`;

export default GlobalStyles;
