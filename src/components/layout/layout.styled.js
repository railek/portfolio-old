/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledContainer = styled.div`
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

  &::before,
  &::after {
    content: '';
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -10;
  }

  &::before {
    filter: url(#blobs);
  }

  &::after {
    background: linear-gradient(var(--black), var(--gray-900));
    opacity: 0.9;
  }

  & > div {
    width: 100%;
  }
`;

export const StyledSVG = styled.svg`
  position: absolute;
`;
