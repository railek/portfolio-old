import React from 'react';
import PropTypes from 'prop-types';

import ScrollFade from '@/components/elements/scroll-fade';

import { StyledHeader } from './section-title.styled';

export default function SectionTitle({ title }) {
  return (
    <ScrollFade threshold={0}>
      <StyledHeader>{title}</StyledHeader>
    </ScrollFade>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
