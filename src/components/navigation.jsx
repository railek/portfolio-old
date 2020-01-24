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
    padding: 32px;
  }

  @media (min-width: 1024px) {
    padding: 32px 96px;
  }

  ul {
    display: flex;
    gap: 48px;

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
