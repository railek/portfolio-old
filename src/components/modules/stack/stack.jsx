import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import IconListItem from '@/components/elements/icon-list-item';
import ScrollFade from '@/components/elements/scroll-fade';
import SectionTitle from '@/components/elements/section-title';
import Wrapper from '@/components/elements/wrapper';
import { backend, design, frontend } from '@/data/stack';

import { StyledCard, StyledSubheading } from './stack.styled';

export default function Stack() {
  return (
    <Wrapper>
      <SectionTitle title="Technology Stack 📚" />
      <ResponsiveMasonry
        columnsCountBreakPoints={{
          1024: 1,
          1280: 2,
        }}
      >
        <Masonry gutter="16px">
          <ScrollFade threshold={0.2}>
            <StyledCard>
              <h4>Backend</h4>
              {backend.map((section, index) => (
                <figure key={index}>
                  <StyledSubheading>{section.subheading}</StyledSubheading>
                  <ul>
                    {section.list.map((item) => (
                      <li>
                        <IconListItem
                          name={item.name}
                          description={item.description}
                          link={item.link}
                          icon={item.icon}
                        />
                      </li>
                    ))}
                  </ul>
                </figure>
              ))}
            </StyledCard>
          </ScrollFade>
          <ScrollFade threshold={0.2}>
            <StyledCard>
              <h4>Frontend</h4>
              {frontend.map((section, index) => (
                <figure key={index}>
                  <StyledSubheading>{section.subheading}</StyledSubheading>
                  <ul>
                    {section.list.map((item) => (
                      <li>
                        <IconListItem
                          name={item.name}
                          description={item.description}
                          link={item.link}
                          icon={item.icon}
                        />
                      </li>
                    ))}
                  </ul>
                </figure>
              ))}
            </StyledCard>
          </ScrollFade>
          <ScrollFade threshold={0.2}>
            <StyledCard>
              <h4>Design</h4>
              {design.map((section, index) => (
                <figure key={index}>
                  <StyledSubheading>{section.subheading}</StyledSubheading>
                  <ul>
                    {section.list.map((item) => (
                      <li>
                        <IconListItem
                          name={item.name}
                          description={item.description}
                          link={item.link}
                          icon={item.icon}
                        />
                      </li>
                    ))}
                  </ul>
                </figure>
              ))}
            </StyledCard>
          </ScrollFade>
        </Masonry>
      </ResponsiveMasonry>
    </Wrapper>
  );
}
