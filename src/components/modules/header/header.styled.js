/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledHeader = styled.header`
  top: 0;
  z-index: 10;
  border-bottom: 1px solid var(--gray-800);
  background: var(--gray-900);

  @media (min-width: 768px) {
    position: sticky;
    left: 0;
    height: 100vh;
    border-bottom: none;
    border-right: 1px solid var(--gray-800);
    background: none;
  }

  & > div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-20) var(--space-24);
    height: 100%;

    @media (min-width: 768px) {
      flex-direction: column;
      padding: var(--space-32);
    }
  }

  ul {
    display: flex;
    gap: var(--space-16);
    align-items: center;
    border-top: 1px solid var(--gray-800);
    padding: var(--space-16) var(--space-24);

    li {
      color: var(--gray-300);
    }

    @media (min-width: 768px) {
      display: none;
    }
  }
`;
