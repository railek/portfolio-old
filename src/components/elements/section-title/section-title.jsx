import React from 'react';
import PropTypes from 'prop-types';

import { StyledHeader } from './section-title.styled';

export default function SectionTitle({ title }) {
  return <StyledHeader>{title}</StyledHeader>;
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
