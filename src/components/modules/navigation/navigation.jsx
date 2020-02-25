import React from 'react';
import { Link } from 'gatsby';

import { StyledNavigation } from './navigation.styled';

const Navigation = () => {
  const links = ['About', 'Projects'];

  return (
    <StyledNavigation>
      <h6>Jean Alexander Brock</h6>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={`/${link.toLowerCase()}`}>{link}</Link>
          </li>
        ))}
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
