import React from 'react';
import styled from 'styled-components';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';

const StyledSocial = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: column;
  }

  svg {
    font-size: 32px;
    color: var(--gray-400);

    :hover {
      color: var(--white);
    }
  }
`;

export default function Social() {
  return (
    <StyledSocial>
      <a href="https://github.com/railek" target="_blank" rel="noopener noreferrer">
        <IoLogoGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/jean-brock-733398143/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoLinkedin />
      </a>
    </StyledSocial>
  );
}
