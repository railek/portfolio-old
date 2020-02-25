import React from 'react';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';

import { StyledSocials } from './socials.styled';

export default function Socials() {
  return (
    <StyledSocials>
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
    </StyledSocials>
  );
}
