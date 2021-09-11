/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledSection = styled.section`
  border-top: 1px solid var(--gray-800);
`;

export const StyledGrid = styled.div`
  display: grid;
  gap: var(--space-16);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const StyledNumber = styled.span`
  font-size: var(--text-48);
  line-height: 100%;
  font-weight: 700;
`;

export const StyledCard = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--gray-700);
  border-radius: 4px;
  padding: var(--space-24);
  min-height: 256px;

  p {
    color: var(--gray-500);
  }

  footer {
    display: flex;
    gap: var(--space-8);
    flex-direction: column;
  }
`;
