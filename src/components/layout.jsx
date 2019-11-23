import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/global';
import Header from './header';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: visible;
  z-index: 10;
  background: var(--gray-900);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <div style={{ width: '100%' }}>
          <main>{children}</main>
        </div>
      </Container>
    </>
  );
}
