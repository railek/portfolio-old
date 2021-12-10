import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import ScrollFade from '@/components/elements/scroll-fade';
import Wrapper from '@/components/elements/wrapper';

import { StyledContent, StyledGrid, StyledImage, StyledSection } from './introduction.styled';

export default function Introduction() {
  return (
    <StyledSection>
      <ScrollFade threshold={0}>
        <StyledGrid>
          <Wrapper>
            <StyledContent>
              <p>
                <b>Hey, I&apos;m Jean Brock 👋</b>
              </p>
              <p>
                I`m a developer who also designs, with a strong interest in web technology and video
                games.
              </p>
              <p>
                I enjoy sharing my knowledge and helping others adopt the technologies I`m
                passionate about. I do this in part by developing open-source projects.
              </p>
              <p>
                I`m able to quickly learn new tools and technologies when needed. I often identify
                the need for new systems or tools to improve workflow efficiency. I`m always
                motivated by a challenge and like to be well-organized to deliver consistent
                results.
              </p>
            </StyledContent>
          </Wrapper>
          <StyledImage>
            <StaticImage
              src="../../../images/jean_brock.png"
              alt="Jean Brock"
              placeholder="blurred"
              layout="fullWidth"
              style={{ position: 'absolute', inset: '0' }}
              objectFit="cover"
              objectPosition="center"
              quality="100"
              loading="eager"
            />
          </StyledImage>
        </StyledGrid>
      </ScrollFade>
    </StyledSection>
  );
}
