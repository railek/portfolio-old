import { css } from 'styled-components';

const Typography = css`
  * {
    --text-12: 12px;
    --text-14: 14px;
    --text-16: 16px;
    --text-18: 18px;
    --text-20: 20px;
    --text-24: 24px;
    --text-28: 28px;
    --text-32: 32px;
    --text-40: 40px;
    --text-48: 48px;
    --text-64: 64px;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.5;
    font-weight: 400;
    font-style: normal;
    color: var(--gray-200);
    font-size: var(--text-16);
  }

  p {
    font-size: var(--text-14);
    @media (min-width: 768px) {
      font-size: var(--text-16);
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    letter-spacing: 0.75px;
    line-height: 1.1;
    font-weight: 500;
    color: var(--gray-50);
    font-family: 'Bungee', sans-serif;
  }

  h1 {
    font-size: var(--text-40);
    @media (min-width: 768px) {
      font-size: var(--text-48);
    }
  }

  h2 {
    font-size: var(--text-28);
    @media (min-width: 768px) {
      font-size: var(--text-32);
    }
  }

  h3 {
    font-size: var(--text-24);
    @media (min-width: 768px) {
      font-size: var(--text-28);
    }
  }

  h4 {
    font-size: var(--text-20);
    @media (min-width: 768px) {
      font-size: var(--text-24);
    }
  }

  h5 {
    font-size: var(--text-18);
    @media (min-width: 768px) {
      font-size: var(--text-20);
    }
  }

  h6 {
    font-size: var(--text-16);
    letter-spacing: -0.5px;
    @media (min-width: 768px) {
      font-size: var(--text-18);
    }
  }
`;

export default Typography;
