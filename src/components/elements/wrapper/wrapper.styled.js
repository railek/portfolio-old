/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledWrapper = styled.div`
  max-width: 100%;
  padding: var(--space-24) var(--space-20);

  @media (min-width: 768px) {
    padding: var(--space-32);
  }

  @media (min-width: 1024px) {
    padding: var(--space-64);
  }

  @media (min-width: 1280px) {
    padding: var(--space-96);
  }
`;
