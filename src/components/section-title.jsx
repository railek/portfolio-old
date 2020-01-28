import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h2`
  margin-bottom: var(--space-48);
  position: relative;
  color: var(--white);
  padding-bottom: var(--space-16);

  @media (min-width: 768px) {
    max-width: 26ch;
    margin-bottom: var(--space-64);
  }

  &::after {
    content: '';
    display: block;
    width: var(--space-96);
    height: var(--space-8);
    background: var(--gray-500);
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export default function SectionTitle({ title }) {
  return <StyledHeader>{title}</StyledHeader>;
}
