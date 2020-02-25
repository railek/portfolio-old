/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledItem = styled.li`
  display: flex;
  gap: var(--space-8);
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: var(--gray-300);
  margin-bottom: var(--space-16);

  :last-of-type {
    margin-bottom: var(--space-0);
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  strong {
    font-weight: 500;
    color: var(--gray-50);
    font-family: 'Bungee', sans-serif;
  }

  a {
    display: flex;
    gap: var(--space-8);
    align-items: center;
    justify-content: center;
  }
`;

export const StyledGrid = styled.div`
  display: grid;
  gap: var(--space-48);

  @media (min-width: 1280px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const StyledHeading = styled.h3`
  margin-bottom: var(--space-20);
`;
