import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import favicon from '../images/favicon.png';

const StyledImage = styled.img`
  width: 32px;
`;

const Logo = () => (
  <Link to="/">
    <StyledImage src={favicon} alt="Railek Logo" />
  </Link>
);

export default Logo;
