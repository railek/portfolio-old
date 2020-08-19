import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import BackgroundImage from '@/components/elements/background-image';
import ScrollFade from '@/components/elements/scroll-fade';
import SectionTitle from '@/components/elements/section-title';
import Wrapper from '@/components/elements/wrapper';

import { StyledContent, StyledSection } from './introduction.styled';

export default function Introduction() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "jean_brock.png" }) {
        childImageSharp {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  `);
  return (
    <StyledSection>
      <BackgroundImage image={data.file.childImageSharp.fluid} alt="Jean Brock" />
      <Wrapper>
        <SectionTitle title="Introduction" />
        <ScrollFade>
          <StyledContent>
            <p>Hey, I`m Jean Brock 👋</p>
            <p>
              I`m a developer who also designs, with a strong interest in web technology and video
              games.
            </p>
            <p>
              I enjoy sharing my knowledge and helping others adopt the technologies I`m passionate
              about. I do this in part by developing open-source projects.
            </p>
            <p>
              I`m able to quickly learn new tools and technologies when needed. I often identify the
              need for new systems or tools to improve workflow efficiency. I`m always motivated by
              a challenge and like to be well-organized to deliver consistent results.
            </p>
          </StyledContent>
        </ScrollFade>
      </Wrapper>
    </StyledSection>
  );
}
