/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledImage = styled.img`
  width: var(--space-32);
  transition: transform 0.2s ease-in-out;

  :hover {
    transform: rotate(360deg);
  }
`;
