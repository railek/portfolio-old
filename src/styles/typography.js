import { css } from 'styled-components';

const Typography = css`
  body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.5;
    font-weight: 400;
    font-style: normal;
    color: var(--gray-200);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
    font-weight: 700;
    color: var(--gray-50);
    font-family: 'Bungee', sans-serif;
  }
`;

export default Typography;
