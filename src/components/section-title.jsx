import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h2`
  margin-bottom: 48px;
  position: relative;
  color: var(--white);
  padding-bottom: 16px;

  @media (min-width: 768px) {
    max-width: 26ch;
    margin-bottom: 64px;
  }

  &::after {
    content: '';
    display: block;
    width: 96px;
    height: 8px;
    background: var(--gray-500);
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export default function SectionTitle({ title }) {
  return <StyledHeader>{title}</StyledHeader>;
}
