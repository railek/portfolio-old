import React from 'react';
import { Link } from 'gatsby';

import { StyledNavigation } from './navigation.styled';

const Navigation = () => {
  const links = [
    { label: 'Home', slug: '/' },
    { label: 'About', slug: '/about' },
    { label: 'Projects', slug: '/projects' },
  ];

  return (
    <StyledNavigation>
      <strong>Jean Alexander Brock</strong>
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
    </StyledNavigation>
  );
};

export default Navigation;
