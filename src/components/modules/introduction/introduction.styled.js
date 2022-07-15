/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledSection = styled.section`
  position: relative;
  border-bottom: 1px solid var(--gray-800);
`;

export const StyledGrid = styled.div`
  display: grid;

  @media (min-width: 1280px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const StyledImage = styled.div`
  height: 256px;
  position: relative;
  border-left: 1px solid var(--gray-800);

  @media (min-width: 1280px) {
    height: auto;
  }
`;

export const StyledContent = styled.div`
  position: relative;

  h1 {
    margin-bottom: var(--space-32);
  }

  p {
    max-width: 64ch;
    margin-bottom: var(--space-16);
    color: var(--gray-100);

    &:last-of-type {
      margin-bottom: var(--space-0);
    }
  }
`;
