import { createGlobalStyle } from 'styled-components';

import Reset from './reset';
import Color from './color';
import Typography from './typography';

const GlobalStyle = createGlobalStyle`
  ${Reset}
  ${Color}
  ${Typography}

  * {
    scrollbar-width: thin;
    scrollbar-color: var(--gray-700);
  }

  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background: var(--gray-900);
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--gray-700);
  }
`;

export default GlobalStyle;
