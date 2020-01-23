import React from 'react';
import styled from 'styled-components';
import Wrapper from './wrapper';
import Button from './button';

const StyledSection = styled.section`
  border-top: 1px solid var(--gray-800);

  h2 {
    margin-top: 0px;
    margin-bottom: 12px;
    font-size: 18px;

    @media (min-width: 768px) {
      font-size: 24px;
    }

    @media (min-width: 1024px) {
      font-size: 32px;
    }
  }
`;

export default function CallToAction() {
  return (
    <StyledSection>
      <Wrapper>
        <h2>Get in touch 👋</h2>
        <p>Feel free to email me about anything. Do you have some feedback or suggestions?</p>
        <a href="mailto:jean@railek.com">
          <Button label="Say Hello" />
        </a>
      </Wrapper>
    </StyledSection>
  );
}
