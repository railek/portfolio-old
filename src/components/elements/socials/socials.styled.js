/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

export const StyledSocials = styled.div`
  display: flex;
  gap: var(--space-16);
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: column;
  }

  svg {
    font-size: var(--text-32);
    color: var(--gray-400);

    :hover {
      color: var(--white);
    }
  }
`;
