import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  margin-top: var(--space-32);
  border: 2px solid var(--gray-100);
  background: transparent;
  padding: var(--space-12) var(--space-24);
  transition: all 0.2s ease-in-out;
  color: var(--gray-100);
  font-weight: 700;
  font-size: var(--text-14);
  text-transform: uppercase;

  :hover {
    background-color: var(--gray-100);
    color: var(--gray-900);
  }

  @media (min-width: 768px) {
    width: auto;
    margin-top: var(--space-48);
  }
`;

export default function Button({ type = 'button', label }) {
  if (type === 'submit') {
    return <StyledButton type={type}>{label}</StyledButton>;
  }
  return <StyledButton type={type}>{label}</StyledButton>;
}

Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
};
