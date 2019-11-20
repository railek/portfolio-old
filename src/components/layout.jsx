import React from 'react';
import GlobalStyles from '../styles/global';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <main>{children}</main>
    </>
  );
}
