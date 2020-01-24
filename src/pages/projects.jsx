import React from 'react';
import { IoLogoGithub, IoMdOpen } from 'react-icons/io';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useProjects from '../hooks/useProjects';
import Layout from '../components/layout';
import SectionTitle from '../components/section-title';
import Wrapper from '../components/wrapper';
import CallToAction from '../components/call-to-action';

export const Bounce = {
  transition: {
    duration: 0.1,
    ease: 'easeOut',
  },
  translateY: -4,
};

const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--gray-800);
  border: 1px solid var(--gray-700);
  padding: 24px;

  @media (min-width: 768px) {
    min-height: 256px;
  }

  h5 {
    color: var(--gray-50);
    margin-bottom: 8px;
  }

  header > div {
    display: flex;
    justify-content: space-between;

    svg {
      font-size: 24px;
      color: var(--gray-400);
      margin-bottom: 32px;
    }
  }

  footer {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    font-size: 14px;
    color: var(--gray-400);
    margin-top: 32px;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  gap: 48px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

function Card({ title, url, tags, excerpt }) {
  return (
    <a href={url} target="_blank" rel="nofollow noopener noreferrer">
      <StyledCard as={motion.div} whileHover={Bounce}>
        <header>
          <div>
            <IoLogoGithub />
            <IoMdOpen />
          </div>
          <h5>{title}</h5>
          <p>{excerpt}</p>
        </header>
        <footer>
          {tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </footer>
      </StyledCard>
    </a>
  );
}

const ProjectPage = () => {
  const projects = useProjects();

  return (
    <Layout title="Projects">
      <Wrapper>
        <SectionTitle title="Noteworthy Projects I've worked on" />
        <StyledGrid>
          {projects.map(({ title, url, tags, excerpt }) => (
            <Card title={title} url={url} tags={tags} excerpt={excerpt} />
          ))}
        </StyledGrid>
      </Wrapper>
      <CallToAction />
    </Layout>
  );
};

export default ProjectPage;
