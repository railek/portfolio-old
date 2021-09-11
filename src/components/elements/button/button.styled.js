/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledButton = styled.button`
  margin-top: var(--space-32);
  background-color: var(--primary-500);
  padding: var(--space-12) var(--space-24);
  transition: all 0.2s ease-in-out;
  color: var(--gray-900);
  font-weight: 900;
  font-size: var(--text-14);
  text-transform: uppercase;

  :hover {
    background-color: var(--primary-800);
    color: var(--gray-900);
  }

  @media (min-width: 768px) {
    width: auto;
  }
`;
