import { createGlobalStyle } from 'styled-components';

import Color from './color';
import Typography from './typography';

import 'reset-css';

const GlobalStyle = createGlobalStyle`
  ${Color}
  ${Typography}
`;

export default GlobalStyle;
