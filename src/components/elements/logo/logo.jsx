import React from 'react';
import { Link } from 'gatsby';

import favicon from '@/images/favicon.png';

import { StyledImage } from './logo.styled';

const Logo = () => (
  <Link to="/">
    <StyledImage src={favicon} alt="Railek Logo" />
  </Link>
);

export default Logo;
