import React from 'react';
import { Link } from 'gatsby';

import ScrollTop from '@/components/elements/scroll-top';

import { StyledBottom, StyledColumn, StyledFooter, StyledWrapper } from './footer.styled';

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
