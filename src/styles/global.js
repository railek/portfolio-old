import { createGlobalStyle } from 'styled-components';

import Reset from './reset';
import Color from './color';
import Typography from './typography';
import Spacing from './spacing';

const GlobalStyle = createGlobalStyle`
  ${Reset}
  ${Color}
  ${Typography}
  ${Spacing}

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
