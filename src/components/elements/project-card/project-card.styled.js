/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--gray-800);
  border: 1px solid var(--gray-700);
  padding: var(--space-24);

  @media (min-width: 768px) {
    min-height: 256px;
  }

  h5 {
    color: var(--gray-50);
    margin-bottom: var(--space-8);
  }

  header > div {
    display: flex;
    justify-content: space-between;

    svg {
      font-size: var(--text-24);
      color: var(--gray-400);
      margin-bottom: var(--space-32);
    }
  }

  footer {
    display: flex;
    flex-wrap: wrap;
    column-gap: var(--space-10);
    row-gap: var(--space-4);
    font-size: var(--text-14);
    color: var(--gray-400);
    margin-top: var(--space-32);
  }
`;
