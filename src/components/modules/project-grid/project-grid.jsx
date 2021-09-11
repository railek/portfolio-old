import React from 'react';

import ProjectCard from '@/components/elements/project-card';
import SectionTitle from '@/components/elements/section-title';
import Wrapper from '@/components/elements/wrapper';
import useProjects from '@/hooks/use-projects';

import { StyledGrid } from './project-grid.styled';

export default function ProjectGrid() {
  const projects = useProjects();

  return (
    <Wrapper>
      <SectionTitle title="Noteworthy Projects I've worked on" />
      <StyledGrid>
        {projects.map(({ title, url, tags, excerpt }, index) => (
          <figure key={index}>
            <ProjectCard title={title} url={url} tags={tags} excerpt={excerpt} />
          </figure>
        ))}
      </StyledGrid>
    </Wrapper>
  );
}
