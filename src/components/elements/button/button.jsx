import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './button.styled';

export default function Button({ type = 'button', label }) {
  return <StyledButton type={type}>{label}</StyledButton>;
}

Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
};
