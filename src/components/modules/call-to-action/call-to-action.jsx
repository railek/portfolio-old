import React from 'react';

import Button from '@/components/elements/button';
import Wrapper from '@/components/elements/wrapper';

import { StyledContainer, StyledSection } from './call-to-action.styled';

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
