import React from 'react';

import ScrollFade from '@/components/elements/scroll-fade';
import SectionTitle from '@/components/elements/section-title';
import Wrapper from '@/components/elements/wrapper';

import { StyledCard, StyledGrid, StyledNumber, StyledSection } from './capabilities.styled';

export default function Capabilities() {
  const capabilities = [
    {
      number: '01',
      title: 'Front-end',
      description: 'HTML, CSS, JavaScript, React, Next JS, Gatsby',
    },
    {
      number: '02',
      title: 'Design',
      description: 'Design Systems, UI, Figma, Adobe Suite',
    },
    {
      number: '03',
      title: 'Accessibility',
      description: 'Screen Readers, Accessibility tree, ARIA',
    },
  ];

  return (
    <StyledSection>
      <Wrapper>
        <SectionTitle title="What I do 👷‍♂️" />
        <StyledGrid>
          {capabilities.map((capability, index) => (
            <figure key={index}>
              <ScrollFade threshold={0}>
                <StyledCard>
                  <StyledNumber>{capability.number}</StyledNumber>
                  <footer>
                    <span>{capability.title}</span>
                    <p>{capability.description}</p>
                  </footer>
                </StyledCard>
              </ScrollFade>
            </figure>
          ))}
        </StyledGrid>
      </Wrapper>
    </StyledSection>
  );
}
