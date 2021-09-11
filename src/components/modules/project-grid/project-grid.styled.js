/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledGrid = styled.div`
  display: grid;
  gap: var(--space-16);

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
