import React from 'react';

import ScrollFade from '@/components/elements/scroll-fade';
import Wrapper from '@/components/elements/wrapper';

import { StyledHero } from './hero.styled';

export default function Hero() {
  return (
    <StyledHero>
      <Wrapper>
        <ScrollFade>
          <h1>
            Multi-disciplinary frontend
            <br />
            developer experienced in
            <br />
            building
            {` `}
            <span>
              beautiful user
              <br />
              experiences.
            </span>
          </h1>
        </ScrollFade>
      </Wrapper>
    </StyledHero>
  );
}
