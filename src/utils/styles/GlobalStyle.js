// @flow
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html {
    font-size: 16px;
  }
  body {
    font-family: 'PT Sans', sans-serif;
  }
`;

export default GlobalStyle;
