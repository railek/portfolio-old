import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from './background-image';
import Wrapper from './wrapper';
import SectionTitle from './section-title';

const StyledIntroduction = styled.div`
  position: relative;
`;

const StyledContent = styled.div`
  position: relative;
  p {
    max-width: 64ch;
    margin-bottom: 16px;
    color: var(--gray-100);

    &:last-of-type {
      margin-bottom: 0px;
    }
  }
`;

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
    <StyledIntroduction>
      <BackgroundImage image={data.file.childImageSharp.fluid} alt="Jean Brock" />
      <Wrapper>
        <SectionTitle title="Introduction" />
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
            need for new systems or tools to improve workflow efficiency. I`m always motivated by a
            challenge and like to be well-organized to deliver consistent results.
          </p>
        </StyledContent>
      </Wrapper>
    </StyledIntroduction>
  );
}
