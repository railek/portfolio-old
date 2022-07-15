/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledSection = styled.section`
  border-top: 1px solid var(--gray-800);
`;

export const StyledNumber = styled.span`
  display: flex;
  align-items: center;
  border-right: 1px solid var(--gray-600);
  background-color: var(--gray-800);
  padding: var(--space-20) var(--space-24);
  font-size: var(--text-32);
  line-height: 100%;
  font-weight: 900;
`;

export const StyledContent = styled.div`
  display: flex;
  gap: var(--space-16);
  flex-direction: column;
  padding: var(--space-20) var(--space-24);
  width: 100%;

  @media (min-width: 768px) {
    gap: var(--space-0);
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  header {
    display: flex;
    flex-direction: column;
    color: var(--white);
    font-weight: 700;

    span {
      color: var(--gray-400);
      font-weight: 400;
    }
  }

  time {
    color: var(--gray-400);
  }
`;

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-12);

  figure {
    display: flex;
    border-radius: 4px;
    border: 1px solid var(--gray-600);
  }
`;

export const StyledCard = styled.div``;
