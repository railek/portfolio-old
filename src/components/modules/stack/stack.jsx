import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import IconListItem from '@/components/elements/icon-list-item';
import ScrollFade from '@/components/elements/scroll-fade';
import SectionTitle from '@/components/elements/section-title';
import Wrapper from '@/components/elements/wrapper';
import data from '@/data/stack.json';

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
        <Masonry gutter="var(--space-16)">
          {data.map((level) => (
            <div key={level.id}>
              <ScrollFade threshold={0.2}>
                <StyledCard>
                  <h4>{level.title}</h4>
                  {level.content.map((section) => (
                    <figure key={section.id}>
                      <StyledSubheading>{section.subheading}</StyledSubheading>
                      <ul>
                        {section.list.map((item) => (
                          <li key={item.id}>
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
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </Wrapper>
  );
}
