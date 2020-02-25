import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import favicon from '@/images/favicon.png';

const StyledImage = styled.img`
  width: var(--space-32);
  transition: transform 0.2s ease-in-out;

  :hover {
    transform: rotate(360deg);
  }
`;

const Logo = () => (
  <Link to="/">
    <StyledImage src={favicon} alt="Railek Logo" />
  </Link>
);

export default Logo;
