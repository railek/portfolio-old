import React from 'react';
import { IoIosArrowUp } from 'react-icons/io';

import { StyledButton } from './scroll-top.styled';

const ScrollTop = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <StyledButton onClick={handleClick} type="button" aria-label="Scroll to top">
      <IoIosArrowUp />
    </StyledButton>
  );
};

export default ScrollTop;
