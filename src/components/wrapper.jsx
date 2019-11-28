import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  max-width: ${props => (props.fullWidth ? '100%' : '1280px')};
  padding: 24px;

  @media (min-width: 768px) {
    padding: 48px;
  }

  @media (min-width: 1024px) {
    padding: 96px;
  }

  @media (min-width: 1280px) {
    padding: 128px;
  }
`;

export default function Wrapper({ children, fullWidth = false }) {
  return <StyledWrapper fullWidth={fullWidth}>{children}</StyledWrapper>;
}
