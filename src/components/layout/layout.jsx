import React from 'react';
import PropTypes from 'prop-types';

import Footer from '@/components/modules/footer';
import Header from '@/components/modules/header';
import Navigation from '@/components/modules/navigation';
import GlobalStyles from '@/styles/global';

import { StyledContainer, StyledSVG } from './layout.styled';

export default function Layout({ children }) {
  return (
    <>
      <StyledSVG>
        <filter id="blobs">
          <feTurbulence type="fractalNoise" baseFrequency="0.001" />
        </filter>
      </StyledSVG>
      <GlobalStyles />
      <StyledContainer>
        <Header />
        <div>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>
      </StyledContainer>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
