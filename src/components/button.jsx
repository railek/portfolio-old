import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledButton = styled.button`
  margin-top: 32px;
  border: 2px solid var(--gray-100);
  background: transparent;
  padding: 12px 24px;
  transition: all 0.2s ease-in-out;
  color: var(--gray-100);
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;

  :hover {
    background-color: var(--gray-100);
    color: var(--gray-900);
  }

  @media (min-width: 768px) {
    width: auto;
    margin-top: 48px;
  }
`;

export default function Button({ type = 'button', label, path = '/' }) {
  if (type === 'submit') {
    return <StyledButton type={type}>{label}</StyledButton>;
  }
  return (
    <StyledButton type={type}>
      <Link to={path}>{label}</Link>
    </StyledButton>
  );
}
