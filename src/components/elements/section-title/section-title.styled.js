/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledHeader = styled.h2`
  margin-bottom: var(--space-48);
  position: relative;
  color: var(--white);
  padding-bottom: var(--space-12);

  @media (min-width: 768px) {
    max-width: 26ch;
    margin-bottom: var(--space-64);
  }

  &::after {
    content: '';
    display: block;
    width: var(--space-96);
    height: var(--space-6);
    background: var(--primary-500);
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;
