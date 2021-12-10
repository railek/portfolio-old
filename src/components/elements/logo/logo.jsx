import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { StyledLogo } from './logo.styled';

const Logo = () => (
  <Link to="/">
    <StyledLogo>
      <StaticImage
        src="../../../images/favicon.png"
        alt="Railek Logo"
        placeholder="blurred"
        layout="fixed"
        width={32}
        height={32}
      />
    </StyledLogo>
  </Link>
);

export default Logo;
