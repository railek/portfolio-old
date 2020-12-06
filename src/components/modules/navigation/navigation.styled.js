/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  display: none;

  @media (min-width: 768px) {
    border-bottom: 1px solid var(--gray-800);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-32);
  }

  @media (min-width: 1024px) {
    padding: var(--space-32) var(--space-64);
  }

  @media (min-width: 1280px) {
    padding: var(--space-32) var(--space-96);
  }

  ul {
    display: flex;
    gap: var(--space-40);

    li a {
      color: var(--gray-400);
      font-weight: 500;
      &:hover {
        color: var(--gray-100);
      }
    }
  }
`;
