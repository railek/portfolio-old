import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledNavigation = styled.nav`
  display: none;

  @media (min-width: 768px) {
    border-bottom: 1px solid var(--gray-800);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-32);
  }

  @media (min-width: 1024px) {
    padding: var(--space-32) var(--space-96);
  }

  ul {
    display: flex;
    gap: var(--space-48);

    li {
      color: var(--gray-300);

      &:hover {
        color: var(--white);
      }
    }
  }
`;

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
