/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledContainer = styled.div`
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
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -10;
  }

  &::before {
    background-image: linear-gradient(
        45deg,
        transparent 24%,
        rgba(255, 255, 255, 0.01) 25%,
        rgba(255, 255, 255, 0.01) 26%,
        transparent 27%,
        transparent 74%,
        rgba(255, 255, 255, 0.01) 75%,
        rgba(255, 255, 255, 0.01) 76%,
        transparent 77%,
        transparent
      ),
      linear-gradient(
        -45deg,
        transparent 24%,
        rgba(255, 255, 255, 0.01) 25%,
        rgba(255, 255, 255, 0.01) 26%,
        transparent 27%,
        transparent 74%,
        rgba(255, 255, 255, 0.01) 75%,
        rgba(255, 255, 255, 0.01) 76%,
        transparent 77%,
        transparent
      );
    height: 100%;
    background-size: var(--space-48) var(--space-48);
  }

  &::after {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    opacity: 0.05;

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }

  & > div {
    width: 100%;
  }
`;
