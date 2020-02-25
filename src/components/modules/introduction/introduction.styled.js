/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledIntroduction = styled.div`
  position: relative;
`;

export const StyledContent = styled.div`
  position: relative;
  p {
    max-width: 64ch;
    margin-bottom: var(--space-16);
    color: var(--gray-100);

    &:last-of-type {
      margin-bottom: var(--space-0);
    }
  }
`;
