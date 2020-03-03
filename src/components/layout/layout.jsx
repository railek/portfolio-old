import React from 'react';
import PropTypes from 'prop-types';

import Footer from '@/components/modules/footer';
import Header from '@/components/modules/header';
import Navigation from '@/components/modules/navigation';
import GlobalStyles from '@/styles/global';

import { StyledContainer } from './layout.styled';

export default function Layout({ children }) {
  return (
    <>
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
