import React from 'react';

import Button from '@/components/elements/button';
import ScrollFade from '@/components/elements/scroll-fade';
import Wrapper from '@/components/elements/wrapper';

import { StyledContainer, StyledSection } from './call-to-action.styled';

export default function CallToAction() {
  return (
    <StyledSection>
      <Wrapper>
        <StyledContainer>
          <ScrollFade threshold={0.1}>
            <header>
              <h2>Get in touch 👋</h2>
              <p>Feel free to email me about anything. Do you have some feedback or suggestions?</p>
            </header>
            <a href="mailto:jean@railek.com">
              <Button label="Say Hello" />
            </a>
          </ScrollFade>
        </StyledContainer>
      </Wrapper>
    </StyledSection>
  );
}
