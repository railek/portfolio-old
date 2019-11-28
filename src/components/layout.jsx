import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/global';
import Header from './header';
import Footer from './footer';

const Container = styled.div`
  background-color: var(--gray-900);
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: visible;
  z-index: 10;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  & > div {
    width: 100%;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <div>
          <main>{children}</main>
          <Footer />
        </div>
      </Container>
    </>
  );
}
