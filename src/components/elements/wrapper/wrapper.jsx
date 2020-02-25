import React from 'react';
import PropTypes from 'prop-types';

import { StyledWrapper } from './wrapper.styled';

export default function Wrapper({ children }) {
  return <StyledWrapper>{children}</StyledWrapper>;
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
