import React from 'react';

import SectionTitle from '@/components/elements/section-title';
import Wrapper from '@/components/elements/wrapper';

import { StyledContent, StyledList, StyledNumber, StyledSection } from './experience.styled';

export default function Experience() {
  const jobs = [
    {
      id: '01',
      role: 'Email Developer',
      company: '@imimobile',
      date: '2015 - 2017',
    },
    {
      id: '02',
      role: 'Mobile Web Developer',
      company: '@imimobile',
      date: '2017 - 2018',
    },
    {
      id: '03',
      role: 'Frontend Developer',
      company: '@imimobile',
      date: '2018 - 2021',
    },
    {
      id: '04',
      role: 'Frontend Developer',
      company: '@vectra',
      date: '2021 - 2022',
    },
    {
      id: '05',
      role: 'Frontend Developer',
      company: '@viamedia',
      date: '2022 - Present',
    },
  ];

  return (
    <StyledSection>
      <Wrapper>
        <SectionTitle title="Experience 👴🏻" />
        <StyledList>
          {jobs.map((job) => (
            <figure key={job.id}>
              <StyledNumber>{job.id}</StyledNumber>
              <StyledContent>
                <header>
                  <div>{job.role}</div>
                  <span>{job.company}</span>
                </header>
                <time>{job.date}</time>
              </StyledContent>
            </figure>
          ))}
        </StyledList>
      </Wrapper>
    </StyledSection>
  );
}
