import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  max-width: 100%;
  padding: 24px;

  @media (min-width: 768px) {
    padding: 48px;
  }

  @media (min-width: 1024px) {
    padding: 96px;
  }
`;

export default function Wrapper({ children }) {
  return <StyledWrapper>{children}</StyledWrapper>;
}
