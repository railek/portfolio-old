import { createGlobalStyle } from 'styled-components';

import Color from './color';
import Keyframes from './keyframes';
import Reset from './reset';
import Spacing from './spacing';
import Typography from './typography';

const GlobalStyle = createGlobalStyle`
  ${Reset}
  ${Color}
  ${Typography}
  ${Spacing}
  ${Keyframes}

  body {
    background-color: var(--gray-900);
  }

  ::selection {
    background: var(--gray-700);
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: var(--gray-700);
  }

  *::-webkit-scrollbar {
    width: var(--space-8);
  }

  *::-webkit-scrollbar-track {
    background: var(--gray-900);
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--gray-700);
  }
`;

export default GlobalStyle;
