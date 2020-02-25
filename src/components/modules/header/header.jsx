import React, { useRef } from 'react';
import { Link } from 'gatsby';

import Logo from '@/components/elements/logo';
import Socials from '@/components/elements/socials';

import { StyledHeader } from './header.styled';

const Header = () => {
  const node = useRef();
  const links = ['About', 'Projects'];

  return (
    <StyledHeader>
      <div ref={node}>
        <Logo />
        <Socials />
      </div>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={`/${link.toLowerCase()}`}>{link}</Link>
          </li>
        ))}
      </ul>
    </StyledHeader>
  );
};

export default Header;
