import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import Analytics from '@/components/elements/analytics';
import Footer from '@/components/modules/footer';
import Header from '@/components/modules/header';
import Navigation from '@/components/modules/navigation';
import GlobalStyles from '@/styles';

import { StyledContainer } from './layout.styled';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <StyledContainer>
        <Header />
        <div>
          <Navigation />
          <motion.main exit={{ opacity: 0 }} initial="initial" animate="animate">
            {children}
          </motion.main>
          <Footer />
        </div>
      </StyledContainer>
      <Analytics />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
