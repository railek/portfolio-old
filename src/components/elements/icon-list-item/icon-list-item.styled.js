/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledItem = styled.div`
  display: flex;
  gap: var(--space-8);
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: var(--gray-300);
  margin-bottom: var(--space-16);
  cursor: pointer;

  :last-of-type {
    margin-bottom: var(--space-0);
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  :hover {
    strong {
      text-decoration: underline;
    }
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
