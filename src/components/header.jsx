import React, { useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Logo from './logo';
import Socials from './socials';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid var(--gray-800);
  background: var(--gray-900);

  @media (min-width: 768px) {
    left: 0;
    height: 100vh;
    border-bottom: none;
    border-right: 1px solid var(--gray-800);
    background: none;
  }

  & > div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    height: 100%;

    @media (min-width: 768px) {
      flex-direction: column;
      padding: 48px;
    }
  }

  ul {
    display: flex;
    gap: 16px;
    align-items: center;
    border-top: 1px solid var(--gray-800);
    padding: 24px;

    li {
      color: var(--gray-300);
    }

    @media (min-width: 768px) {
      display: none;
    }
  }
`;

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
        {links.map(link => (
          <li key={link}>
            <Link to={`/${link.toLowerCase()}`}>{link}</Link>
          </li>
        ))}
      </ul>
    </StyledHeader>
  );
};

export default Header;
