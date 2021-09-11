import React, { useRef } from 'react';
import { Link } from 'gatsby';

import Logo from '@/components/elements/logo';
import Socials from '@/components/elements/socials';

import { StyledHeader } from './header.styled';

const Header = () => {
  const node = useRef();
  const links = [
    { label: 'Home', slug: '/' },
    { label: 'About', slug: '/about' },
    { label: 'Projects', slug: '/projects' },
  ];

  return (
    <StyledHeader>
      <div ref={node}>
        <Logo />
        <Socials />
      </div>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link
              activeStyle={{
                color: 'var(--gray-50)',
                textDecoration: 'underline',
                textDecorationThickness: 'var(--space-2)',
                textUnderlineOffset: 'var(--space-8)',
                textDecorationColor: 'var(--primary-500)',
              }}
              to={link.slug}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </StyledHeader>
  );
};

export default Header;
