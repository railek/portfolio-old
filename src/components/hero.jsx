import React from 'react';
import styled from 'styled-components';
import Wrapper from './wrapper';

const StyledHero = styled.div`
  border-bottom: 1px solid var(--gray-800);

  h1 {
    font-size: 24px;

    @media (min-width: 768px) {
      font-size: 32px;
    }

    @media (min-width: 1024px) {
      font-size: 48px;
    }
  }
`;

export default function Hero() {
  return (
    <StyledHero>
      <Wrapper>
        <h1>
          Multi-disciplinary frontend
          <br />
          developer experienced in
          <br />
          building beautiful user
          <br />
          experiences.
        </h1>
      </Wrapper>
    </StyledHero>
  );
}
