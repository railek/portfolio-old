import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import ScrollTop from './scroll-top';

const StyledWrapper = styled.div`
  display: grid;
  padding: var(--space-24);
  gap: var(--space-48);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: var(--space-48);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    padding: var(--space-96);
  }
`;

const StyledFooter = styled.footer`
  color: var(--gray-400);
  border-top: 1px solid var(--gray-800);
`;

const StyledColumn = styled.div`
  li {
    margin-top: var(--space-12);
    color: var(--gray-400);

    &:hover {
      color: var(--white);
    }
  }
`;

const StyledBottom = styled.div`
  border-top: 1px solid var(--gray-800);
  display: flex;
  gap: var(--space-24);
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  padding: var(--space-24);

  @media (min-width: 768px) {
    align-items: center;
    flex-direction: row;
    padding: var(--space-24) var(--space-48);
  }

  @media (min-width: 1024px) {
    padding: var(--space-24) var(--space-96);
  }
`;

const Footer = () => {
  const links = ['About', 'Projects'];

  return (
    <>
      <StyledFooter>
        <StyledWrapper>
          <StyledColumn>
            <h6>Navigation</h6>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {links.map((link, index) => (
                <li key={index}>
                  <Link to={`/${link.toLowerCase()}`}>{link}</Link>
                </li>
              ))}
            </ul>
          </StyledColumn>

          <StyledColumn>
            <h6>Information</h6>
            <ul>
              <li>
                <a data-title="Privacy Policy" href="https://policies.google.com/privacy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a data-title="Terms of Service" href="https://policies.google.com/terms">
                  Terms of Service
                </a>
              </li>
            </ul>
          </StyledColumn>

          <StyledColumn>
            <h6>Contact</h6>
            <ul>
              <li>
                <a href="mailto:jean@railek.com">jean@railek.com</a>
              </li>
              <li>
                <a href="tel:+27818490162">+27 (081) 849 0162</a>
              </li>
            </ul>
          </StyledColumn>
        </StyledWrapper>
      </StyledFooter>

      <StyledBottom>
        <p>{`© Copyright ${new Date().getFullYear()} Railek. All rights reserved.`}</p>
        <ScrollTop />
      </StyledBottom>
    </>
  );
};

export default Footer;
