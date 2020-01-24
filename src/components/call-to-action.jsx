import React from 'react';
import styled from 'styled-components';
import Wrapper from './wrapper';
import Button from './button';

const StyledSection = styled.section`
  border-top: 1px solid var(--gray-800);
`;

const StyledContainer = styled.div`
  header {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export default function CallToAction() {
  return (
    <StyledSection>
      <Wrapper>
        <StyledContainer>
          <header>
            <h2>Get in touch 👋</h2>
            <p>Feel free to email me about anything. Do you have some feedback or suggestions?</p>
          </header>
          <a href="mailto:jean@railek.com">
            <Button label="Say Hello" />
          </a>
        </StyledContainer>
      </Wrapper>
    </StyledSection>
  );
}
