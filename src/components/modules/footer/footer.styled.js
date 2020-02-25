/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: grid;
  padding: var(--space-24);
  gap: var(--space-48);

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: var(--space-48);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    padding: var(--space-96);
  }
`;

export const StyledFooter = styled.footer`
  color: var(--gray-400);
  border-top: 1px solid var(--gray-800);
`;

export const StyledColumn = styled.div`
  li {
    margin-top: var(--space-12);
    color: var(--gray-400);

    &:hover {
      color: var(--white);
    }
  }
`;

export const StyledBottom = styled.div`
  border-top: 1px solid var(--gray-800);
  display: flex;
  gap: var(--space-24);
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  padding: var(--space-24);

  @media (min-width: 768px) {
    align-items: center;
    flex-direction: row;
    padding: var(--space-24) var(--space-48);
  }

  @media (min-width: 1024px) {
    padding: var(--space-24) var(--space-96);
  }
`;
